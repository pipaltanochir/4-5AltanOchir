// Your provided code is already plain JavaScript + Tailwind compatible.
// Here is a cleaned, structured, and ready-to-use version for a Tailwind project.

// --- DATA SECTIONS ---
const personalInfo = {
  name: "Таны Нэр",
  title: "Вэб Хөгжүүлэгч & Дизайнер",
  bio: "Би орчин үеийн вэб технологи ашиглан хэрэглэгчдэд ээлтэй, үзэмжтэй дижитал бүтээгдэхүүн урлах дуртай.",
  email: "email@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};

const skills = [
  { name: "React / Next.js", level: 90, iconName: "code" },
  { name: "JavaScript / TypeScript", level: 85, iconName: "terminal" },
  { name: "Tailwind CSS", level: 95, iconName: "palette" },
  { name: "Node.js", level: 75, iconName: "database" },
  { name: "UI/UX Design", level: 80, iconName: "globe" },
  { name: "Git / Github", level: 85, iconName: "github" },
];

const projects = [
  {
    title: "Онлайн Дэлгүүр",
    description: "Цахим худалдааны платформ.",
    tags: ["React", "Firebase", "Stripe"],
    link: "#",
    color: "from-blue-500 to-cyan-400",
  },
];

// --- ICON + UTILS ---
function getIconSVG(name) {
  const template = document.getElementById(`icon-${name}`);
  if (!template) return null;

  const svg = template.content.cloneNode(true).children[0];
  return { element: svg, size: svg.getAttribute("width") || "20" };
}

function insertIcon(element, name, size = 20) {
  const icon = getIconSVG(name);
  if (!icon) return;
  icon.element.setAttribute("width", size);
  icon.element.setAttribute("height", size);
  element.appendChild(icon.element);
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth" });

  const mobileMenu = document.getElementById("mobile-menu");
  const toggle = document.getElementById("menu-toggle");

  if (!mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.add("hidden");
    toggle.textContent = "Цэс";
  }
}

// --- RENDERERS ---
function renderSkills() {
  const container = document.getElementById("skills-container");
  container.innerHTML = "";

  skills.forEach((skill) => {
    const div = document.createElement("div");
    div.className =
      "bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-teal-500/50 transition-all group";

    div.innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-3">
          <div class="p-2 bg-slate-800 rounded-lg text-teal-400 skill-icon-container"></div>
          <span class="font-semibold text-lg">${skill.name}</span>
        </div>
        <span class="text-slate-400 font-mono text-sm">${skill.level}%</span>
      </div>
      <div class="w-full bg-slate-800 h-2 rounded-full">
        <div class="bg-teal-500 h-full rounded-full" style="width: ${skill.level}%"></div>
      </div>
    `;

    insertIcon(div.querySelector(".skill-icon-container"), skill.iconName, 20);
    container.appendChild(div);
  });
}

function renderProjects() {
  const container = document.getElementById("projects-container");
  container.innerHTML = "";

  projects.forEach((project) => {
    const div = document.createElement("div");
    div.className =
      "group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 transition-all hover:-translate-y-2";

    div.innerHTML = `
      <div class="h-48 bg-gradient-to-br ${project.color} opacity-80 flex items-center justify-center">
        <span class="icon-code" style="width:48px;height:48px"></span>
      </div>

      <div class="p-6">
        <h3 class="text-xl font-bold mb-2">${project.title}</h3>
        <p class="text-slate-400 text-sm mb-4">${project.description}</p>

        <div class="flex flex-wrap gap-2 mb-6">
          ${project.tags
            .map(
              (t) => `<span class="text-xs px-2 py-1 bg-slate-700 text-teal-300 rounded-full">${t}</span>`
            )
            .join("")}
        </div>

        <a href="${project.link}" class="inline-flex items-center gap-2 text-sm font-semibold">
          Дэлгэрэнгүй <span class="icon-external-link"></span>
        </a>
      </div>
    `;

    insertIcon(div.querySelector(".icon-code"), "code", 48);
    insertIcon(div.querySelector(".icon-external-link"), "external-link", 16);

    container.appendChild(div);
  });
}

function renderContact() {
  document.getElementById("hero-name").textContent = personalInfo.name;
  document.getElementById("hero-title").textContent = personalInfo.title;
  document.getElementById("hero-bio").textContent = personalInfo.bio;
}

// --- INIT ---
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  renderContact();

  insertIcon(document.querySelector(".icon-chevron-down"), "chevron-down", 32);
});
