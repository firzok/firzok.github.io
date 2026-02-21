const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const themeLabel = document.querySelector(".theme-label");
const customCursor = document.getElementById("custom-cursor");
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d", { alpha: true });
const skillGrid = document.getElementById("skills-icon-grid");
const skillMarqueeTrack = document.getElementById("skills-marquee-track");
const skillsSection = document.getElementById("skills");
const experienceTimeline = document.querySelector("#work-experience .timeline");
const timelineItems = experienceTimeline ? Array.from(experienceTimeline.querySelectorAll(".timeline-item")) : [];

let timelineTicking = false;
let timelineAsteroid = null;
let timelineDotOffsets = [];
let timelineStartPx = 0;
let timelineTravelPx = 0;
let timelineEndPx = 0;
let timelineProgressTarget = 0;
let timelineProgressCurrent = 0;
let timelineImpactTarget = 0;
let timelineImpactCurrent = 0;

const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const pointer = {
  x: window.innerWidth * 0.5,
  y: window.innerHeight * 0.5,
  active: false
};

const stars = [];
const shootingStars = [];

let nextShootingStarAt = performance.now() + randomRange(1000, 2600);

const settings = {
  minStarCount: isTouch ? 110 : 180,
  maxStarCount: isTouch ? 190 : 320,
  interactionRadius: isTouch ? 120 : 170,
  interactionPower: isTouch ? 0.18 : 0.28,
  settleStrength: 0.0022,
  damping: 0.92
};

const SKILLS = [
  { name: "TypeScript", iconClass: "devicon-typescript-plain", color: "#3178c6" },
  { name: "JavaScript", iconClass: "devicon-javascript-plain", color: "#f7df1e" },
  { name: "ReactJS", iconClass: "devicon-react-original", color: "#61dafb" },
  { name: "ethers.js", iconClass: "devicon-web3js-plain", color: "#f16822" },
  { name: "React Query", iconClass: "fa-solid fa-magnifying-glass-chart", color: "#ff4154" },
  { name: "Web3", iconClass: "devicon-web3js-plain", color: "#f16822" },
  { name: "Solana", iconClass: "fa-solid fa-satellite", color: "#14f195" },
  { name: "Python", iconClass: "devicon-python-plain", color: "#3776ab" },
  { name: "C++", iconClass: "devicon-cplusplus-plain", color: "#00599c" },
  { name: "Go", iconClass: "devicon-go-plain", color: "#00add8" },
  { name: "UX/UI", iconClass: "fa-solid fa-pen-ruler", color: "#f5f5f5" },
  { name: "HTML", iconClass: "devicon-html5-plain", color: "#e34f26" },
  { name: "CSS", iconClass: "devicon-css3-plain", color: "#1572b6" },
  { name: "Vercel", iconClass: "devicon-vercel-plain", color: "#ffffff" },
  { name: "Supabase", iconClass: "devicon-supabase-plain", color: "#3ecf8e" },
  { name: "Claude Code", iconClass: "fa-solid fa-wand-magic-sparkles", color: "#ff8a3d" },
  { name: "ChatGPT", iconClass: "fa-solid fa-robot", color: "#74aa9c" },
  { name: "AWS", iconClass: "devicon-amazonwebservices-plain", color: "#ff9900" },
  { name: "CloudWatch", iconClass: "fa-solid fa-chart-line", color: "#ff9900" },
  { name: "Lambda", iconClass: "fa-solid fa-bolt", color: "#ff9900" },
  { name: "DynamoDB", iconClass: "devicon-dynamodb-plain", color: "#4053d6" },
  { name: "CloudFormation", iconClass: "fa-solid fa-cubes", color: "#ff9900" },
  { name: "AI - LLM", iconClass: "fa-solid fa-brain", color: "#d1d5db" },
  { name: "Redux", iconClass: "devicon-redux-original", color: "#764abc" },
  { name: "Figma", iconClass: "devicon-figma-plain", color: "#f24e1e" },
  { name: "Tailwind", iconClass: "devicon-tailwindcss-plain", color: "#38bdf8" },
  { name: "Context API", iconClass: "fa-solid fa-diagram-project", color: "#61dafb" },
  { name: "RESTful API", iconClass: "fa-solid fa-plug-circle-bolt", color: "#7dd3fc" },
  { name: "GraphQL", iconClass: "devicon-graphql-plain", color: "#e535ab" },
  { name: "ECharts", iconClass: "devicon-chartjs-plain", color: "#ff6384" },
  { name: "Electron", iconClass: "devicon-electron-original", color: "#9feaf9" },
  { name: "VueJS", iconClass: "devicon-vuejs-plain", color: "#41b883" },
  { name: "Node.js", iconClass: "devicon-nodejs-plain", color: "#339933" },
  { name: "NPM", iconClass: "devicon-npm-plain", color: "#cb3837" },
  { name: "Jest", iconClass: "devicon-jest-plain", color: "#c21325" },
  { name: "Selenium", iconClass: "devicon-selenium-original", color: "#43b02a" },
  { name: "GitHub", iconClass: "devicon-github-original", color: "#a9a9a9" },
  { name: "Swagger", iconClass: "devicon-swagger-plain", color: "#85ea2d" },
  { name: "SQL", iconClass: "devicon-mysql-plain", color: "#4479a1" },
  { name: "NoSQL", iconClass: "devicon-mongodb-plain", color: "#47a248" }
];

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getThemePalette() {
  const dark = root.getAttribute("data-theme") === "dark";

  if (dark) {
    return {
      star: "255, 255, 255",
      dimStar: "175, 175, 175",
      haloStart: "rgba(255, 255, 255, 0.22)",
      haloMid: "rgba(255, 255, 255, 0.10)",
      haloEnd: "rgba(255, 255, 255, 0)",
      shooting: "255, 255, 255"
    };
  }

  return {
    star: "26, 26, 26",
    dimStar: "90, 90, 90",
    haloStart: "rgba(0, 0, 0, 0.16)",
    haloMid: "rgba(0, 0, 0, 0.07)",
    haloEnd: "rgba(0, 0, 0, 0)",
    shooting: "20, 20, 20"
  };
}

function getPreferredTheme() {
  const stored = localStorage.getItem("portfolio-theme");

  if (stored === "dark" || stored === "light") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio-theme", theme);
  themeLabel.textContent = theme === "dark" ? "Dark" : "Light";
}

function toggleTheme() {
  const current = root.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
}

function resizeCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(window.innerWidth * dpr);
  canvas.height = Math.floor(window.innerHeight * dpr);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function createStars() {
  stars.length = 0;

  const area = window.innerWidth * window.innerHeight;
  const estimated = Math.floor(area / (isTouch ? 12000 : 8400));
  const count = clamp(estimated, settings.minStarCount, settings.maxStarCount);

  for (let i = 0; i < count; i += 1) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    stars.push({
      x,
      y,
      baseX: x,
      baseY: y,
      vx: 0,
      vy: 0,
      size: randomRange(0.4, 1.8),
      depth: randomRange(0.8, 1.45),
      twinklePhase: randomRange(0, Math.PI * 2),
      twinkleSpeed: randomRange(0.0013, 0.0038)
    });
  }
}

function spawnShootingStar() {
  const fromLeft = Math.random() > 0.35;
  const x = fromLeft ? -80 : randomRange(window.innerWidth * 0.2, window.innerWidth * 0.8);
  const y = randomRange(20, window.innerHeight * 0.36);
  const angle = fromLeft ? randomRange(0.33, 0.56) : randomRange(0.62, 0.85);
  const speed = randomRange(7.5, 12.5);

  shootingStars.push({
    x,
    y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    size: randomRange(1.1, 1.9),
    trail: randomRange(85, 170),
    life: 0,
    maxLife: Math.floor(randomRange(26, 54))
  });
}

function updateAndDrawShootingStars(now, palette) {
  if (!prefersReducedMotion && now >= nextShootingStarAt) {
    spawnShootingStar();
    nextShootingStarAt = now + randomRange(1300, 3400);
  }

  for (let i = shootingStars.length - 1; i >= 0; i -= 1) {
    const star = shootingStars[i];
    star.life += 1;
    star.x += star.vx;
    star.y += star.vy;

    if (
      star.life > star.maxLife ||
      star.x > window.innerWidth + 140 ||
      star.y > window.innerHeight + 80
    ) {
      shootingStars.splice(i, 1);
      continue;
    }

    const fade = 1 - star.life / star.maxLife;
    const tailX = star.x - star.vx * (star.trail / 12);
    const tailY = star.y - star.vy * (star.trail / 12);

    const gradient = ctx.createLinearGradient(tailX, tailY, star.x, star.y);
    gradient.addColorStop(0, `rgba(${palette.shooting}, 0)`);
    gradient.addColorStop(0.55, `rgba(${palette.shooting}, ${0.24 * fade})`);
    gradient.addColorStop(1, `rgba(${palette.shooting}, ${0.95 * fade})`);

    ctx.strokeStyle = gradient;
    ctx.lineWidth = star.size;
    ctx.beginPath();
    ctx.moveTo(tailX, tailY);
    ctx.lineTo(star.x, star.y);
    ctx.stroke();
  }
}

function updateAndDrawStars(now, palette) {
  const radius = settings.interactionRadius;

  for (const star of stars) {
    if (!prefersReducedMotion && pointer.active) {
      const dx = star.x - pointer.x;
      const dy = star.y - pointer.y;
      const distance = Math.hypot(dx, dy);

      if (distance < radius && distance > 0) {
        const force = ((radius - distance) / radius) * settings.interactionPower;
        const angle = Math.atan2(dy, dx);
        star.vx += Math.cos(angle) * force * star.depth;
        star.vy += Math.sin(angle) * force * star.depth;
      }
    }

    star.vx += (star.baseX - star.x) * settings.settleStrength * star.depth;
    star.vy += (star.baseY - star.y) * settings.settleStrength * star.depth;
    star.vx *= settings.damping;
    star.vy *= settings.damping;

    star.x += star.vx;
    star.y += star.vy;

    const twinkle = 0.56 + Math.sin(now * star.twinkleSpeed + star.twinklePhase) * 0.35;
    const alpha = clamp(twinkle, 0.16, 1);
    const tone = star.size > 1.2 ? palette.star : palette.dimStar;

    ctx.fillStyle = `rgba(${tone}, ${alpha})`;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawPointerHalo(palette) {
  if (!pointer.active || prefersReducedMotion) {
    return;
  }

  const halo = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 180);
  halo.addColorStop(0, palette.haloStart);
  halo.addColorStop(0.45, palette.haloMid);
  halo.addColorStop(1, palette.haloEnd);

  ctx.fillStyle = halo;
  ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
}

function renderFrame(now) {
  const palette = getThemePalette();
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  updateAndDrawStars(now, palette);
  drawPointerHalo(palette);
  updateAndDrawShootingStars(now, palette);
  animateTimelineState();

  requestAnimationFrame(renderFrame);
}

function createSkillIcon(skill) {
  const icon = document.createElement("i");
  icon.className = `skill-icon ${skill.iconClass}`;
  icon.setAttribute("aria-hidden", "true");
  return icon;
}

function renderSkills() {
  if (!skillGrid) return;

  skillGrid.innerHTML = "";

  SKILLS.forEach((skill, index) => {
    const card = document.createElement("article");
    card.className = "skill-icon-card";
    card.style.setProperty("--hover-color", skill.color);
    card.style.setProperty("--skill-stagger", String(index));
    card.tabIndex = 0;

    const icon = createSkillIcon(skill);

    const name = document.createElement("p");
    name.className = "skill-name";
    name.textContent = skill.name;

    card.append(icon, name);
    skillGrid.appendChild(card);
  });
}

function renderSkillsMarquee() {
  if (!skillMarqueeTrack) return;

  skillMarqueeTrack.innerHTML = "";

  const marqueeSkills = SKILLS.slice(0, 20);
  const looped = [...marqueeSkills, ...marqueeSkills];

  looped.forEach((skill) => {
    const pill = document.createElement("div");
    pill.className = "skills-marquee-pill";
    pill.style.setProperty("--pill-color", skill.color);

    const icon = createSkillIcon(skill);
    icon.classList.remove("skill-icon");

    const label = document.createElement("span");
    label.textContent = skill.name;

    pill.append(icon, label);
    skillMarqueeTrack.appendChild(pill);
  });
}

function initSkillsEntranceAnimation() {
  if (!skillsSection) return;

  skillsSection.classList.add("skills-pending");

  if (prefersReducedMotion) {
    skillsSection.classList.remove("skills-pending");
    skillsSection.classList.add("skills-animated");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        skillsSection.classList.remove("skills-pending");
        skillsSection.classList.add("skills-animated");
        observer.unobserve(skillsSection);
        return;
      }
    },
    { threshold: 0.28 }
  );

  observer.observe(skillsSection);
}

function initCursor() {
  if (isTouch) {
    customCursor.style.display = "none";
    return;
  }

  window.addEventListener("mousemove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
    customCursor.style.left = `${event.clientX}px`;
    customCursor.style.top = `${event.clientY}px`;
  });

  window.addEventListener("mousedown", () => {
    customCursor.style.transform = "translate(-50%, -50%) scale(1.45)";
  });

  window.addEventListener("mouseup", () => {
    customCursor.style.transform = "translate(-50%, -50%) scale(1)";
  });

  window.addEventListener("mouseleave", () => {
    pointer.active = false;
  });

  window.addEventListener("mouseenter", () => {
    pointer.active = true;
  });
}

function ensureTimelineAsteroid() {
  if (!experienceTimeline || timelineAsteroid) return;

  timelineAsteroid = document.createElement("div");
  timelineAsteroid.className = "timeline-asteroid";
  timelineAsteroid.setAttribute("aria-hidden", "true");
  experienceTimeline.appendChild(timelineAsteroid);
}

function getItemCheckpointOffset(item) {
  const meta = item.querySelector(".timeline-meta");

  if (meta) {
    return item.offsetTop + meta.offsetTop + Math.min(24, meta.offsetHeight * 0.5);
  }

  return item.offsetTop + Math.min(28, item.offsetHeight * 0.22);
}

function getItemCheckpointViewport(item) {
  const meta = item.querySelector(".timeline-meta");

  if (meta) {
    const rect = meta.getBoundingClientRect();
    return rect.top + Math.min(24, rect.height * 0.5);
  }

  const rect = item.getBoundingClientRect();
  return rect.top + Math.min(28, rect.height * 0.22);
}

function getTimelineEndOffset() {
  const lastItem = timelineItems[timelineItems.length - 1];
  return lastItem.offsetTop + lastItem.offsetHeight - 18;
}

function getTimelineEndViewport() {
  const lastItem = timelineItems[timelineItems.length - 1];
  const rect = lastItem.getBoundingClientRect();
  return rect.top + rect.height - 18;
}

function updateTimelineGeometry() {
  if (!experienceTimeline || timelineItems.length < 2) return;

  timelineDotOffsets = timelineItems.map((item) => getItemCheckpointOffset(item));

  timelineStartPx = timelineDotOffsets[0];
  timelineEndPx = getTimelineEndOffset();
  timelineTravelPx = Math.max(0, timelineEndPx - timelineStartPx);

  experienceTimeline.style.setProperty("--timeline-start", `${timelineStartPx}px`);
  experienceTimeline.style.setProperty("--timeline-travel", `${timelineTravelPx}px`);
}

function updateTimelineProgress() {
  if (!experienceTimeline || timelineItems.length < 2) return;

  const viewportAnchor = window.innerHeight * 0.46;
  const firstY = getItemCheckpointViewport(timelineItems[0]);
  const endY = getTimelineEndViewport();

  const distance = Math.max(1, endY - firstY);
  const progress = clamp((viewportAnchor - firstY) / distance, 0, 1);
  const markerY = timelineStartPx + progress * timelineTravelPx;

  timelineProgressTarget = progress;

  const nearestDistance = timelineDotOffsets.reduce(
    (min, dotY) => Math.min(min, Math.abs(markerY - dotY)),
    Number.POSITIVE_INFINITY
  );

  const proximity = clamp(1 - nearestDistance / 104, 0, 1);
  timelineImpactTarget = Math.pow(proximity, 1.75);
}

function animateTimelineState(force = false) {
  if (!experienceTimeline || timelineItems.length < 2 || !timelineAsteroid) return;

  const progressEase = force ? 1 : 0.14;
  const impactEase = force ? 1 : 0.09;

  timelineProgressCurrent += (timelineProgressTarget - timelineProgressCurrent) * progressEase;
  timelineImpactCurrent += (timelineImpactTarget - timelineImpactCurrent) * impactEase;

  if (Math.abs(timelineProgressTarget - timelineProgressCurrent) < 0.0002) {
    timelineProgressCurrent = timelineProgressTarget;
  }

  if (Math.abs(timelineImpactTarget - timelineImpactCurrent) < 0.0002) {
    timelineImpactCurrent = timelineImpactTarget;
  }

  const markerY = timelineStartPx + timelineProgressCurrent * timelineTravelPx;
  const impact = timelineImpactCurrent;
  const scale = 0.9 + impact * 0.8;
  const darkTheme = root.getAttribute("data-theme") === "dark";
  const glowRgb = darkTheme ? "255, 255, 255" : "18, 18, 18";
  const brightness = darkTheme ? 1.08 + impact * 1.9 : 0.94 + impact * 0.92;
  const nearGlowAlpha = clamp((darkTheme ? 0.56 : 0.44) + impact * 0.58, 0, 1);
  const midGlowAlpha = clamp((darkTheme ? 0.34 : 0.26) + impact * 0.46, 0, 1);
  const farGlowAlpha = clamp((darkTheme ? 0.18 : 0.14) + impact * 0.36, 0, 1);

  experienceTimeline.style.setProperty("--timeline-progress", timelineProgressCurrent.toFixed(4));

  timelineAsteroid.style.top = `${markerY}px`;
  timelineAsteroid.style.transform = `translate(-50%, -50%) scale(${scale.toFixed(3)})`;
  timelineAsteroid.style.setProperty("--impact", impact.toFixed(4));
  timelineAsteroid.style.filter = `brightness(${brightness.toFixed(3)})`;
  timelineAsteroid.style.boxShadow = `0 0 ${Math.round(22 + impact * 74)}px rgba(${glowRgb}, ${nearGlowAlpha.toFixed(3)}), 0 0 ${Math.round(52 + impact * 132)}px rgba(${glowRgb}, ${midGlowAlpha.toFixed(3)}), 0 0 ${Math.round(100 + impact * 206)}px rgba(${glowRgb}, ${farGlowAlpha.toFixed(3)})`;
}

function requestTimelineProgressUpdate() {
  if (timelineTicking) return;

  timelineTicking = true;
  requestAnimationFrame(() => {
    updateTimelineProgress();
    timelineTicking = false;
  });
}

function initTimelineProgress() {
  if (!experienceTimeline || timelineItems.length < 2) return;

  ensureTimelineAsteroid();
  updateTimelineGeometry();
  updateTimelineProgress();
  animateTimelineState(true);
  window.addEventListener("scroll", requestTimelineProgressUpdate, { passive: true });
}

function setupReveal() {
  const revealItems = document.querySelectorAll(".reveal");

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 80, 260)}ms`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function handleResize() {
  resizeCanvas();
  createStars();
  updateTimelineGeometry();
  updateTimelineProgress();
  animateTimelineState(true);
}

window.addEventListener("resize", handleResize);
themeToggle.addEventListener("click", toggleTheme);

setTheme(getPreferredTheme());
renderSkills();
renderSkillsMarquee();
initCursor();
resizeCanvas();
createStars();
setupReveal();
initSkillsEntranceAnimation();
initTimelineProgress();
requestAnimationFrame(renderFrame);
