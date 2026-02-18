document.getElementById("year").textContent = new Date().getFullYear();

const highlights = [
  {
    title: "Experience",
    body: "Placement Student at QUB",
    pills: ["Adaptability", "Teamwork", "Communication", "Time Management"]
  },
  {
    title: "Projects",
    body: "Building web and software projects that show clean UI, practical features, and solid fundamentals.",
    pills: ["HTML", "CSS", "JavaScript", "GitHub Pages"]
  },
  {
    title: "Education",
    body: "BSc Computer Science — focused on strengthening foundations and building a portfolio with real-world projects and experience.",
    pills: ["Computer Science", "Data & AI interest", "Software engineering"]
  },
  {
    title: "Strengths",
    body: "I like working as part of a team and collaboration. I am always happy to help with what I can.",
    pills: ["Reliable", "Detail-oriented", "Fast learner"]
  },
  {
    title: "Links",
    body: "GitHub, LinkedIn, and a downloadable CV can live here (we’ll wire these up next).",
    pills: ["GitHub", "LinkedIn", "CV PDF"]
  }
];

let index = 0;

const card = document.getElementById("card");
const dotsWrap = document.getElementById("dots");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

function renderDots() {
  dotsWrap.innerHTML = "";
  highlights.forEach((_, i) => {
    const d = document.createElement("button");
    d.className = "dot" + (i === index ? " active" : "");
    d.setAttribute("aria-label", `Go to slide ${i + 1}`);
    d.addEventListener("click", () => {
      index = i;
      render();
    });
    dotsWrap.appendChild(d);
  });
}

function render() {
  const h = highlights[index];
  card.innerHTML = `
    <div>
      <h3>${h.title}</h3>
      <p class="muted">${h.body}</p>
    </div>
    <div class="pill-row">
      ${h.pills.map(p => `<span class="pill">${p}</span>`).join("")}
    </div>
  `;
  renderDots();
}

prev.addEventListener("click", () => {
  index = (index - 1 + highlights.length) % highlights.length;
  render();
});

next.addEventListener("click", () => {
  index = (index + 1) % highlights.length;
  render();
});

// Keyboard support
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") prev.click();
  if (e.key === "ArrowRight") next.click();
});

render();
