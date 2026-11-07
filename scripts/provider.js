import { Project } from "./models/project.js";
import { showProjectSheet } from "./overlay.js";

const games = [
  new Project({
    name: "Pixlock",
    imagePath: "/resources/projects/games/pixlock/pixlock.jpeg",
    description:`
    Pixlock is a challenging puzzle game where every move matters.
        Strategically slide blocks to clear the path and guide the main block through the hole at the bottom.
        Careful thinking and precise planning are key. Only logic and skill will lead you to victory.
    `,
    tags: ["free", "android", "web"],
    externalLinks: [
      `<a class="projectlink" id="crazygames" href="https://www.crazygames.com/game/pixlock" target="_blank">
         <img src="/resources/assets/crazygames.jpg">
      </a>
      `
    ]
  }),
  new Project({
    name: "LRR",
    imagePath: "/resources/projects/random.png",
    description: "description"
  })
];

const apps = [
  new Project({
    name: "Pixlock",
    imagePath: "/resources/gameThumb/pixlock.jpeg",
    description:`
    Pixlock is a challenging puzzle game where every move matters.
        Strategically slide blocks to clear the path and guide the main block through the hole at the bottom.
        Careful thinking and precise planning are key. Only logic and skill will lead you to victory.
    `,
    tags: ["free", "android", "web"]
  }),
  new Project({
    name: "LRR",
    imagePath: "/resources/gameThumb/random.png",
    description: "description"
  })
];

const assets_tools = [
  new Project({
    name: "Pixlock",
    imagePath: "/resources/gameThumb/pixlock.jpeg",
    description:`
    Pixlock is a challenging puzzle game where every move matters.
        Strategically slide blocks to clear the path and guide the main block through the hole at the bottom.
        Careful thinking and precise planning are key. Only logic and skill will lead you to victory.
    `,
    tags: ["free", "android", "web"]
  }),
  new Project({
    name: "LRR",
    imagePath: "/resources/gameThumb/random.png",
    description: "description"
  })
];

function addProjects(projects) {
  let output = "";
  for (let i = 0; i < projects.length; i++){
    let projectTag = "";
    if (projects[i].tags.length !== 0) {
      let taglist = "";
      for (let j = 0; j < projects[i].tags.length; j++){
        taglist += `<p class="projectTag">${projects[i].tags[j]}</p>`;
      }
      projectTag = `
        <div class="tagbar">
          ${taglist}
        </div>
        `;
    }
    output += `
    <a class="project_listing" href="javascript:void(0);" data-index="${i}">
        <img src="${projects[i].imagePath}">
        <div class="title-and-desc">
            <h2>${projects[i].name}</h2>
            <p>${projects[i].description}</p>
            ${projectTag}
        </div>
    </a>
    <p></p>
    `;
  }
  return output;
}

function addGames() {
  const projectsContainer = document.getElementById('page-content');
  projectsContainer.innerHTML = addProjects(games);
  attachEventListeners(games);
}

function addApps() {
  const projectsContainer = document.getElementById('page-content');
  projectsContainer.innerHTML = addProjects(apps);
}

function addAssetsAndTools() {
  const projectsContainer = document.getElementById('page-content');
  projectsContainer.innerHTML = addProjects(assets_tools);
}

function attachEventListeners(currentProjectsArray) {
  const links = document.querySelectorAll('.project_listing');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const index = e.currentTarget.getAttribute('data-index');
      const selectedProject = currentProjectsArray[index];
      showProjectSheet(selectedProject, '', selectedProject.externalLinks);
    });
  });
}

window.addApps = addApps;
window.addGames = addGames;
window.addAssetsAndTools = addAssetsAndTools;
