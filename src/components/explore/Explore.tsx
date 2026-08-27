import { useCallback, useEffect, useRef, useState } from "react";
import { profile, experience, projects, education, skills, contactLines } from "./content";

const TILE = 64;
const COLS = 22;
const ROWS = 12;
const VIEW_COLS = 14;
const VIEW_ROWS = 7;
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
  { id: "about", label: "Captain's Quarters", x: 4, y: 3, color: "#7dd3fc", glow: "#0ea5e9" },
  { id: "work", label: "Cargo Bay", x: 17, y: 3, color: "#fbbf24", glow: "#d97706" },
  { id: "projects", label: "Engineering Hangar", x: 11, y: 5, color: "#c084fc", glow: "#7c3aed" },
  { id: "education", label: "Archive Vault", x: 4, y: 8, color: "#5eead4", glow: "#0d9488" },
  { id: "skills", label: "Systems Armory", x: 17, y: 8, color: "#fb7185", glow: "#be123c" },
  { id: "contact", label: "Comms Tower", x: 11, y: 9, color: "#a3e635", glow: "#4d7c0f" }
];

const HUB = { x: COLS / 2, y: ROWS / 2 };

type Star = { x: number; y: number; r: number; a: number };
const STARFIELD: Star[] = Array.from({ length: 90 }, () => ({
  x: Math.random() * COLS * TILE,
  y: Math.random() * ROWS * TILE,
  r: Math.random() * 1.4 + 0.3,
  a: Math.random() * 0.5 + 0.15
}));

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

function hexToRgb(hex: string): string {
  const n = parseInt(hex.slice(1), 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}

function getPalette() {
  const dark = document.documentElement.getAttribute("data-theme") !== "light";
  return dark
    ? { bg: "#080a0f", grid: "rgba(255,255,255,0.05)", star: "255,255,255", wall: "rgba(255,255,255,0.16)", marker: "255,255,255" }
    : { bg: "#eef0f3", grid: "rgba(0,0,0,0.07)", star: "0,0,0", wall: "rgba(0,0,0,0.16)", marker: "16,16,16" };
}

function ChevronIcon({ direction }: { direction: Dir }) {
  const rotation = { up: 0, right: 90, down: 180, left: 270 }[direction];
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path d="M6 15l6-6 6 6" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="m8 12 2.5 2.5L16 9" />
    </svg>
  );
}

export default function Explore() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const player = useRef({ x: 11, y: 10, px: 11, py: 10, facing: "up" as Dir, moving: false, animT: 0 });
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
    const nearbyRef = { current: null as Building | null };

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

      draw();
    }

    function draw() {
      const pal = getPalette();
      const p = player.current;
      const camX = Math.max(0, Math.min(COLS - VIEW_COLS, p.px - VIEW_COLS / 2));
      const camY = Math.max(0, Math.min(ROWS - VIEW_ROWS, p.py - VIEW_ROWS / 2));
      const camPxX = camX * TILE;
      const camPxY = camY * TILE;

      ctx.fillStyle = pal.bg;
      ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

      // faint starfield, parallax-free (fixed to map space)
      for (const s of STARFIELD) {
        const sx = s.x - camPxX;
        const sy = s.y - camPxY;
        if (sx < -4 || sy < -4 || sx > CANVAS_W + 4 || sy > CANVAS_H + 4) continue;
        ctx.fillStyle = `rgba(${pal.star}, ${s.a})`;
        ctx.beginPath();
        ctx.arc(sx, sy, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // grid lines
      ctx.strokeStyle = pal.grid;
      ctx.lineWidth = 1;
      const startCol = Math.floor(camX);
      const startRow = Math.floor(camY);
      for (let x = startCol; x <= startCol + VIEW_COLS + 1; x++) {
        const sx = x * TILE - camPxX;
        ctx.beginPath();
        ctx.moveTo(sx, 0);
        ctx.lineTo(sx, CANVAS_H);
        ctx.stroke();
      }
      for (let y = startRow; y <= startRow + VIEW_ROWS + 1; y++) {
        const sy = y * TILE - camPxY;
        ctx.beginPath();
        ctx.moveTo(0, sy);
        ctx.lineTo(CANVAS_W, sy);
        ctx.stroke();
      }

      // conduit lines from hub to each building
      const hubSx = (HUB.x + 0.5) * TILE - camPxX;
      const hubSy = (HUB.y + 0.5) * TILE - camPxY;
      for (const b of BUILDINGS) {
        const bx = (b.x + 0.5) * TILE - camPxX;
        const by = (b.y + 0.5) * TILE - camPxY;
        ctx.strokeStyle = `rgba(${hexToRgb(b.glow)}, 0.16)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(hubSx, hubSy);
        ctx.lineTo(bx, by);
        ctx.stroke();
      }

      // outer boundary
      ctx.strokeStyle = pal.wall;
      ctx.lineWidth = 3;
      ctx.strokeRect(0.5 * TILE - camPxX, 0.5 * TILE - camPxY, (COLS - 1) * TILE, (ROWS - 1) * TILE);

      // buildings
      for (const b of BUILDINGS) {
        const cx = (b.x + 0.5) * TILE - camPxX;
        const cy = (b.y + 0.5) * TILE - camPxY;
        if (cx < -TILE || cy < -TILE || cx > CANVAS_W + TILE || cy > CANVAS_H + TILE) continue;
        drawBuilding(cx, cy, b, visited.has(b.id));
      }

      // player
      const psx = (p.px + 0.5) * TILE - camPxX;
      const psy = (p.py + 0.5) * TILE - camPxY;
      drawPlayer(psx, psy, p.facing, p.moving ? p.animT : 1, pal.marker);

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

    function drawBuilding(cx: number, cy: number, b: Building, isVisited: boolean) {
      const half = TILE * 0.4;
      const rgb = hexToRgb(b.glow);

      const glowR = TILE * 0.95;
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowR);
      gradient.addColorStop(0, `rgba(${rgb}, ${isVisited ? 0.28 : 0.16})`);
      gradient.addColorStop(1, `rgba(${rgb}, 0)`);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, glowR, 0, Math.PI * 2);
      ctx.fill();

      roundRect(cx - half, cy - half, half * 2, half * 2, 10);
      ctx.fillStyle = `rgba(${rgb}, 0.1)`;
      ctx.fill();
      ctx.strokeStyle = b.color;
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, isVisited ? 6 : 4, 0, Math.PI * 2);
      ctx.fillStyle = isVisited ? b.color : `rgba(${rgb}, 0.55)`;
      ctx.fill();
    }

    function roundRect(x: number, y: number, w: number, h: number, r: number) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    }

    function drawPlayer(cx: number, cy: number, facing: Dir, bounceT: number, marker: string) {
      const pulse = 1 + Math.sin(bounceT * Math.PI) * 0.18;
      const r = 9 * pulse;

      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 3.2);
      glow.addColorStop(0, `rgba(${marker}, 0.32)`);
      glow.addColorStop(1, `rgba(${marker}, 0)`);
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 3.2, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgb(${marker})`;
      ctx.fill();

      const dx = facing === "left" ? -1 : facing === "right" ? 1 : 0;
      const dy = facing === "up" ? -1 : facing === "down" ? 1 : 0;
      const tipX = cx + dx * (r + 9);
      const tipY = cy + dy * (r + 9);
      const perpX = -dy;
      const perpY = dx;
      const baseW = 5;
      ctx.beginPath();
      ctx.moveTo(tipX, tipY);
      ctx.lineTo(cx + dx * r + perpX * baseW, cy + dy * r + perpY * baseW);
      ctx.lineTo(cx + dx * r - perpX * baseW, cy + dy * r - perpY * baseW);
      ctx.closePath();
      ctx.fillStyle = `rgba(${marker}, 0.85)`;
      ctx.fill();
    }

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [visited]);

  const arrow = (dir: Dir) => () => move(dir);

  return (
    <div className="card explore-card">
      <h2>Explore</h2>
      <p className="explore-intro">
        Walk the station and interact with each module to read that section — or just scroll the classic site.
      </p>

      <div className="explore-viewport">
        <canvas ref={canvasRef} width={CANVAS_W} height={CANVAS_H} aria-label="Explore mode game screen" />
        {nearby && !dialog && !showMenu && <div className="explore-prompt">Press Enter near {nearby.label}</div>}
        {dialog && (
          <button type="button" className="explore-dialog" onClick={advanceDialog}>
            <strong>{dialog.title}</strong>
            <p>{dialog.lines[dialog.index]}</p>
            <span className="explore-dialog-more">
              {dialog.index + 1 < dialog.lines.length ? "continue ▸" : "close ▸"}
            </span>
          </button>
        )}
        {showMenu && (
          <div className="explore-menu">
            <strong>System Log</strong>
            <p>
              Sectors scanned: {visited.size}/{BUILDINGS.length}
            </p>
            <ul>
              {BUILDINGS.map((b) => (
                <li key={b.id}>
                  {visited.has(b.id) ? "✓" : "•"} {b.label}
                </li>
              ))}
            </ul>
            <span className="explore-dialog-more">Tab to close</span>
          </div>
        )}
        {toast && <div className="explore-toast">{toast}</div>}
      </div>

      <div className="explore-controls">
        <div className="explore-dpad" role="group" aria-label="Move">
          <button type="button" className="btn secondary" aria-label="Up" onPointerDown={arrow("up")}>
            <ChevronIcon direction="up" />
          </button>
          <button type="button" className="btn secondary" aria-label="Left" onPointerDown={arrow("left")}>
            <ChevronIcon direction="left" />
          </button>
          <button type="button" className="btn secondary" aria-label="Down" onPointerDown={arrow("down")}>
            <ChevronIcon direction="down" />
          </button>
          <button type="button" className="btn secondary" aria-label="Right" onPointerDown={arrow("right")}>
            <ChevronIcon direction="right" />
          </button>
        </div>
        <div className="explore-actions">
          <button type="button" className="btn primary" onClick={tryInteract}>
            Interact
          </button>
          <button type="button" className="btn secondary" onClick={() => setShowMenu((v) => !v)}>
            <ListIcon /> Log
          </button>
        </div>
      </div>

      <p className="explore-hint">
        Move with <kbd>WASD</kbd> / arrow keys. <kbd>Enter</kbd> to interact, <kbd>Esc</kbd> to leave, <kbd>Tab</kbd>{" "}
        for the system log.
      </p>
    </div>
  );
}
