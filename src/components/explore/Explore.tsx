import { useCallback, useEffect, useRef, useState } from "react";
import { profile, experience, projects, education, skills, contactLines } from "./content";

const TILE = 24;
const COLS = 20;
const ROWS = 18;
const VIEW_COLS = 10;
const VIEW_ROWS = 9;
const CANVAS_W = VIEW_COLS * TILE;
const CANVAS_H = VIEW_ROWS * TILE;

type Dir = "up" | "down" | "left" | "right";
type BuildingId = "about" | "work" | "projects" | "education" | "skills" | "contact";

type Building = {
  id: BuildingId;
  label: string;
  x: number;
  y: number;
  color: string;
  glow: string;
};

const BUILDINGS: Building[] = [
  { id: "about", label: "Captain's Quarters", x: 3, y: 3, color: "#7dd3fc", glow: "#0ea5e9" },
  { id: "work", label: "Cargo Bay", x: 14, y: 3, color: "#fbbf24", glow: "#d97706" },
  { id: "projects", label: "Engineering Hangar", x: 9, y: 6, color: "#c084fc", glow: "#7c3aed" },
  { id: "education", label: "Archive Vault", x: 3, y: 10, color: "#5eead4", glow: "#0d9488" },
  { id: "skills", label: "Systems Armory", x: 14, y: 10, color: "#fb7185", glow: "#be123c" },
  { id: "contact", label: "Comms Tower", x: 9, y: 13, color: "#a3e635", glow: "#4d7c0f" }
];

function buildGrid(): number[][] {
  const grid: number[][] = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  for (let x = 0; x < COLS; x++) {
    grid[0][x] = 1;
    grid[ROWS - 1][x] = 1;
  }
  for (let y = 0; y < ROWS; y++) {
    grid[y][0] = 1;
    grid[y][COLS - 1] = 1;
  }
  for (const b of BUILDINGS) {
    grid[b.y][b.x] = 1;
  }
  return grid;
}

const GRID = buildGrid();

function buildingAt(x: number, y: number): Building | undefined {
  return BUILDINGS.find((b) => b.x === x && b.y === y);
}

function isBlocked(x: number, y: number): boolean {
  if (x < 0 || y < 0 || x >= COLS || y >= ROWS) return true;
  return GRID[y][x] === 1;
}

function buildingContent(id: BuildingId): string[] {
  switch (id) {
    case "about":
      return [`${profile.name} — ${profile.role}.`, profile.summary];
    case "work":
      return experience
        .slice(0, 4)
        .map((job) => `${job.title} @ ${job.org} (${job.period}): ${job.bullets[0]}`);
    case "projects":
      return projects.map((p) => `${p.name} — ${p.tagline}. Stack: ${p.stack.join(", ")}.`);
    case "education":
      return education.map((e) => `${e.degree} — ${e.org} (${e.period}).`);
    case "skills":
      return [`Loadout: ${skills.map((s) => s.name).join(", ")}.`];
    case "contact":
      return contactLines;
  }
}

export default function Explore() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const player = useRef({ x: 9, y: 15, px: 9, py: 15, facing: "down" as Dir, moving: false, animT: 0 });
  const rafRef = useRef<number>(0);
  const activeRef = useRef(false);

  const [dialog, setDialog] = useState<{ title: string; lines: string[]; index: number } | null>(null);
  const [visited, setVisited] = useState<Set<BuildingId>>(new Set());
  const [showMenu, setShowMenu] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [nearby, setNearby] = useState<Building | null>(null);

  const dialogRef = useRef(dialog);
  dialogRef.current = dialog;
  const showMenuRef = useRef(showMenu);
  showMenuRef.current = showMenu;

  const openBuilding = useCallback((b: Building) => {
    const content = buildingContent(b.id);
    setDialog({ title: b.label, lines: content, index: 0 });
    setVisited((prev) => {
      const next = new Set(prev);
      next.add(b.id);
      if (next.size === BUILDINGS.length && prev.size !== BUILDINGS.length) {
        setToast("Achievement unlocked: Full System Scan!");
        window.setTimeout(() => setToast(null), 3600);
      }
      return next;
    });
  }, []);

  const advanceDialog = useCallback(() => {
    setDialog((d) => {
      if (!d) return d;
      if (d.index + 1 >= d.lines.length) return null;
      return { ...d, index: d.index + 1 };
    });
  }, []);

  const tryInteract = useCallback(() => {
    if (dialogRef.current) {
      advanceDialog();
      return;
    }
    if (showMenuRef.current) return;
    const p = player.current;
    let fx = p.x;
    let fy = p.y;
    if (p.facing === "up") fy -= 1;
    if (p.facing === "down") fy += 1;
    if (p.facing === "left") fx -= 1;
    if (p.facing === "right") fx += 1;
    const b = buildingAt(fx, fy);
    if (b) openBuilding(b);
  }, [advanceDialog, openBuilding]);

  const move = useCallback((dir: Dir) => {
    const p = player.current;
    p.facing = dir;
    if (p.moving || dialogRef.current || showMenuRef.current) return;
    let nx = p.x;
    let ny = p.y;
    if (dir === "up") ny -= 1;
    if (dir === "down") ny += 1;
    if (dir === "left") nx -= 1;
    if (dir === "right") nx += 1;
    if (isBlocked(nx, ny)) return;
    p.x = nx;
    p.y = ny;
    p.moving = true;
    p.animT = 0;
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (!activeRef.current) return;
      const map: Record<string, Dir> = {
        ArrowUp: "up",
        ArrowDown: "down",
        ArrowLeft: "left",
        ArrowRight: "right",
        w: "up",
        s: "down",
        a: "left",
        d: "right"
      };
      if (map[e.key]) {
        e.preventDefault();
        move(map[e.key]);
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        tryInteract();
      } else if (e.key === "Escape") {
        if (dialogRef.current) setDialog(null);
        else if (showMenuRef.current) setShowMenu(false);
        else window.portfolioSetMode?.("site");
      } else if (e.key === "Tab") {
        e.preventDefault();
        setShowMenu((v) => !v);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [tryInteract, move]);

  useEffect(() => {
    function onMode(e: Event) {
      const mode = (e as CustomEvent).detail?.mode;
      activeRef.current = mode === "explore";
    }
    activeRef.current = document.body.dataset.mode === "explore";
    window.addEventListener("portfolio:mode", onMode);
    return () => window.removeEventListener("portfolio:mode", onMode);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context2d = canvas?.getContext("2d");
    if (!canvas || !context2d) return;
    const ctx: CanvasRenderingContext2D = context2d;

    function loop() {
      rafRef.current = requestAnimationFrame(loop);
      if (!activeRef.current) return;

      const p = player.current;
      if (p.moving) {
        p.animT += 1 / 6;
        if (p.animT >= 1) {
          p.animT = 1;
          p.moving = false;
        }
      }
      p.px = p.moving ? p.px + (p.x - p.px) * 0.6 : p.x;
      p.py = p.moving ? p.py + (p.y - p.py) * 0.6 : p.y;
      if (!p.moving) {
        p.px = p.x;
        p.py = p.y;
      }

      draw(ctx);
    }

    function draw(ctx: CanvasRenderingContext2D) {
      const p = player.current;
      const camX = Math.max(0, Math.min(COLS - VIEW_COLS, Math.round(p.px - VIEW_COLS / 2)));
      const camY = Math.max(0, Math.min(ROWS - VIEW_ROWS, Math.round(p.py - VIEW_ROWS / 2)));

      ctx.fillStyle = "#0f380f";
      ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

      for (let y = 0; y < VIEW_ROWS + 1; y++) {
        for (let x = 0; x < VIEW_COLS + 1; x++) {
          const gx = camX + x;
          const gy = camY + y;
          if (gx >= COLS || gy >= ROWS) continue;
          const tile = GRID[gy][gx];
          const px = x * TILE;
          const py = y * TILE;
          if (tile === 1 && !buildingAt(gx, gy)) {
            ctx.fillStyle = "#306230";
            ctx.fillRect(px, py, TILE, TILE);
          } else {
            const checker = (gx + gy) % 2 === 0;
            ctx.fillStyle = checker ? "#8bac0f" : "#9bbc0f";
            ctx.fillRect(px, py, TILE, TILE);
          }
        }
      }

      for (const b of BUILDINGS) {
        const sx = (b.x - camX) * TILE;
        const sy = (b.y - camY) * TILE;
        if (sx < -TILE || sy < -TILE || sx > CANVAS_W || sy > CANVAS_H) continue;
        const visitedGlow = visited.has(b.id);
        ctx.fillStyle = "#0f380f";
        ctx.fillRect(sx - 3, sy - 6, TILE + 6, TILE + 10);
        ctx.fillStyle = b.color;
        ctx.fillRect(sx - 1, sy - 4, TILE + 2, TILE + 6);
        ctx.fillStyle = "#0f380f";
        ctx.fillRect(sx + 4, sy + 2, TILE - 8, 6);
        if (visitedGlow) {
          ctx.fillStyle = "#e8ffb0";
          ctx.fillRect(sx + TILE / 2 - 2, sy - 12, 4, 4);
        }
      }

      const sx = (p.px - camX) * TILE;
      const sy = (p.py - camY) * TILE;
      drawPlayer(ctx, sx, sy, p.facing, p.moving && p.animT < 1);

      if (!dialogRef.current && !showMenuRef.current) {
        let fx = p.x;
        let fy = p.y;
        if (p.facing === "up") fy -= 1;
        if (p.facing === "down") fy += 1;
        if (p.facing === "left") fx -= 1;
        if (p.facing === "right") fx += 1;
        const b = buildingAt(fx, fy);
        if (b !== nearbyRef.current) {
          nearbyRef.current = b ?? null;
          setNearby(b ?? null);
        }
      }
    }

    function drawPlayer(ctx: CanvasRenderingContext2D, x: number, y: number, facing: Dir, bob: boolean) {
      const bounce = bob ? Math.sin(performance.now() / 60) * 2 : 0;
      const cx = x + TILE / 2;
      const top = y + 4 + bounce;

      ctx.fillStyle = "#0f380f";
      ctx.fillRect(cx - 7, top + 10, 14, 3);

      ctx.fillStyle = "#e8f8d0";
      ctx.fillRect(cx - 6, top + 4, 12, 10);

      ctx.fillStyle = "#f4a259";
      ctx.fillRect(cx - 5, top - 6, 10, 10);

      ctx.fillStyle = "#0f380f";
      if (facing === "down") {
        ctx.fillRect(cx - 3, top - 2, 2, 2);
        ctx.fillRect(cx + 1, top - 2, 2, 2);
      } else if (facing === "up") {
        ctx.fillRect(cx - 2, top - 4, 4, 2);
      } else if (facing === "left") {
        ctx.fillRect(cx - 5, top - 2, 2, 2);
      } else if (facing === "right") {
        ctx.fillRect(cx + 3, top - 2, 2, 2);
      }

      ctx.fillStyle = "#89c4f4";
      if (facing === "left") ctx.fillRect(cx - 8, top + 5, 3, 6);
      else if (facing === "right") ctx.fillRect(cx + 5, top + 5, 3, 6);
    }

    const nearbyRef = { current: null as Building | null };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [move, visited]);

  const dpad = (dir: Dir) => () => {
    player.current.facing = dir;
    move(dir);
  };

  return (
    <div className="gb-console">
      <div className="gb-screen-frame">
        <div className="gb-screen">
          <canvas ref={canvasRef} width={CANVAS_W} height={CANVAS_H} aria-label="Explore mode game screen" />
          {nearby && !dialog && !showMenu && (
            <div className="gb-prompt">Press A near {nearby.label}</div>
          )}
          {dialog && (
            <button type="button" className="gb-dialog" onClick={advanceDialog}>
              <strong>{dialog.title}</strong>
              <p>{dialog.lines[dialog.index]}</p>
              <span className="gb-dialog-more">{dialog.index + 1 < dialog.lines.length ? "▼ tap / A to continue" : "▼ tap / A to close"}</span>
            </button>
          )}
          {showMenu && (
            <div className="gb-menu">
              <strong>System Log</strong>
              <p>{profile.name}</p>
              <p>Sectors scanned: {visited.size}/{BUILDINGS.length}</p>
              <ul>
                {BUILDINGS.map((b) => (
                  <li key={b.id}>{visited.has(b.id) ? "✓" : "•"} {b.label}</li>
                ))}
              </ul>
              <span className="gb-dialog-more">TAB / Start to close</span>
            </div>
          )}
          {toast && <div className="gb-toast">{toast}</div>}
        </div>
      </div>
      <div className="gb-branding">
        <span>Firzok™</span>
        <span>Dot Matrix</span>
      </div>
      <div className="gb-dpad-row">
        <div className="gb-dpad">
          <button type="button" className="up" aria-label="Up" onPointerDown={dpad("up")} />
          <button type="button" className="down" aria-label="Down" onPointerDown={dpad("down")} />
          <button type="button" className="left" aria-label="Left" onPointerDown={dpad("left")} />
          <button type="button" className="right" aria-label="Right" onPointerDown={dpad("right")} />
          <div className="center" />
        </div>
        <div className="gb-ab">
          <button type="button" onClick={tryInteract} aria-label="A button">
            A
          </button>
          <button
            type="button"
            aria-label="B button"
            onClick={() => {
              if (dialog) setDialog(null);
              else if (showMenu) setShowMenu(false);
              else window.portfolioSetMode?.("site");
            }}
          >
            B
          </button>
        </div>
      </div>
      <div className="gb-startselect">
        <button type="button" onClick={() => setShowMenu((v) => !v)}>
          Start
        </button>
        <button
          type="button"
          onClick={() => {
            const html = document.documentElement;
            const next = html.getAttribute("data-theme") === "light" ? "dark" : "light";
            html.setAttribute("data-theme", next);
            try {
              localStorage.setItem("theme", next);
            } catch {}
          }}
        >
          Select
        </button>
      </div>
      <p className="explore-hint">
        Move with <kbd>WASD</kbd> / arrow keys. <kbd>Enter</kbd> or <kbd>A</kbd> to interact, <kbd>Esc</kbd> to leave,{" "}
        <kbd>Tab</kbd> for the system log.
      </p>
    </div>
  );
}
