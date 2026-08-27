import { useEffect, useRef, useState } from "react";
import { profile, experience, projects, education, skills } from "../content/resume";

type Line = { text: string; kind?: "cmd" | "err" | "hint" };

declare global {
  interface Window {
    portfolioSetMode?: (mode: string) => void;
  }
}

const SECTION_IDS: Record<string, string> = {
  about: "about",
  work: "work-experience",
  experience: "work-experience",
  projects: "projects",
  education: "education",
  skills: "skills",
  contact: "contact"
};

function goToSection(id: string) {
  window.portfolioSetMode?.("site");
  requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  });
}

const BANNER = [
  ` ______ _____ ______ ______ _____  _  __`,
  `|  ____|_   _|___  /|___  /|  __ \\| |/ /`,
  `| |__    | |    / /    / / | |__) | ' / `,
  `|  __|   | |   / /    / /  |  _  /|  <  `,
  `| |     _| |_ / /__  / /__ | | \\ \\| . \\ `,
  `|_|    |_____/_____|/_____||_|  \\_\\_|\\_\\`,
  "",
  `${profile.name} — ${profile.role}`,
  `Type "help" to see available commands.`
];

function buildHelp(): string[] {
  return [
    "Available commands:",
    "  help                 show this list",
    "  whoami               who is firzok",
    "  about                summary",
    "  work | experience    career history",
    "  projects             founder projects (ApplyX, Lnkdly)",
    "  education            degrees & honours",
    "  skills               tech stack",
    "  contact              how to reach me",
    "  resume               open the latest resume",
    "  theme [dark|light]   switch color theme",
    "  explore              launch Explore Mode (Game Boy overworld)",
    "  site                 return to the classic scrolling site",
    "  clear                clear the terminal",
    "  sudo make-coffee     ???"
  ];
}

function runCommand(raw: string): Line[] {
  const input = raw.trim();
  const [cmd, ...rest] = input.split(/\s+/);
  const arg = rest.join(" ").toLowerCase();

  switch ((cmd || "").toLowerCase()) {
    case "":
      return [];
    case "help":
      return buildHelp().map((text) => ({ text }));
    case "whoami":
      return [{ text: `${profile.name.toLowerCase().replace(/\s+/g, "-")} — ${profile.role}, ${profile.location}` }];
    case "about":
      return [{ text: profile.summary }];
    case "work":
    case "experience":
      goToSection("work-experience");
      return experience.flatMap((job) => [
        { text: `${job.title} @ ${job.org} (${job.period})` },
        ...job.bullets.map((b) => ({ text: `  - ${b}` }))
      ]);
    case "projects":
      goToSection("projects");
      return projects.flatMap((p) => [{ text: `${p.name} — ${p.tagline}` }, { text: `  stack: ${p.stack.join(", ")}` }]);
    case "education":
      goToSection("education");
      return education.map((e) => ({ text: `${e.degree} — ${e.org} (${e.period})` }));
    case "skills":
      goToSection("skills");
      return [{ text: skills.map((s) => s.name).join(" · ") }];
    case "contact":
      goToSection("contact");
      return [
        { text: `email:    ${profile.email}` },
        { text: `linkedin: ${profile.linkedin}` },
        { text: `github:   ${profile.github}` }
      ];
    case "resume":
      window.open(profile.resumeUrl, "_blank", "noreferrer");
      return [{ text: "Opening resume in a new tab..." }];
    case "theme": {
      const html = document.documentElement;
      const next = arg === "dark" || arg === "light" ? arg : html.getAttribute("data-theme") === "light" ? "dark" : "light";
      html.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch {}
      return [{ text: `Theme set to ${next}.` }];
    }
    case "explore":
      window.portfolioSetMode?.("explore");
      return [{ text: "Launching Explore Mode..." }];
    case "site":
      window.portfolioSetMode?.("site");
      return [{ text: "Back to the classic site." }];
    case "clear":
      return [];
    case "sudo":
      if (arg === "make-coffee") {
        return [{ text: "Error: coffee.exe not found. Try tea instead. ☕", kind: "err" }];
      }
      return [{ text: `sudo: ${arg || "??"}: permission denied. Nice try.`, kind: "err" }];
    case "ls":
      return [{ text: Object.keys(SECTION_IDS).join("  ") }];
    case "cd":
      if (SECTION_IDS[arg]) {
        goToSection(SECTION_IDS[arg]);
        return [{ text: `Navigating to ${arg}...` }];
      }
      return [{ text: `cd: no such section: ${arg}`, kind: "err" }];
    default:
      return [{ text: `command not found: ${cmd}. Type "help" for a list.`, kind: "err" }];
  }
}

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>(BANNER.map((text) => ({ text })));
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [lines]);

  useEffect(() => {
    const handler = (e: Event) => {
      const mode = (e as CustomEvent).detail?.mode;
      if (mode === "terminal") {
        requestAnimationFrame(() => inputRef.current?.focus());
      }
    };
    window.addEventListener("portfolio:mode", handler);
    return () => window.removeEventListener("portfolio:mode", handler);
  }, []);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const cmd = value;
    setValue("");
    if (cmd.trim().toLowerCase() === "clear") {
      setLines([]);
      return;
    }
    setHistory((h) => [...h, cmd]);
    setHistoryIndex(null);
    const output = runCommand(cmd);
    setLines((prev) => [...prev, { text: cmd, kind: "cmd" }, ...output]);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!history.length) return;
      const nextIndex = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setValue(history[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === null) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(null);
        setValue("");
      } else {
        setHistoryIndex(nextIndex);
        setValue(history[nextIndex]);
      }
    }
  }

  return (
    <div className="terminal-window" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-titlebar">
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span>guest@firzok:~</span>
      </div>
      <div className="terminal-body" ref={bodyRef}>
        {lines.map((line, i) => (
          <p key={i} className={`terminal-line ${line.kind ?? ""}`}>
            {line.text}
          </p>
        ))}
      </div>
      <form className="terminal-inputrow" onSubmit={submit}>
        <span className="prompt">guest@firzok:~$</span>
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          aria-label="Terminal input"
        />
      </form>
    </div>
  );
}
