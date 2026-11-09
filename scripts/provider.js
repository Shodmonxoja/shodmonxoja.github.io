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
      `<a class="projectlink crazygames_link" href="https://www.crazygames.com/game/pixlock" target="_blank">
         <img src="/resources/assets/crazygames.jpg">
      </a>
      `,
      `<a class="projectlink privacypolicy_link" href="/privacy-policies/pixlock/PixlockPrivacyPolicy.xml" target="_blank">
         <p>Open Privacy Policy</p>
      </a>
      `
    ]
  }),
  new Project({
    name: 'Other games from itch.io',
    imagePath: '/resources/projects/games/othergames/othergames.jpg',
    description: 'Some other games from Itch.io from around 2020. That are not worth mentioning individually.',
    tags: ['arcade', 'endless', 'unity'],
    externalLinks: [
      `<a class="projectlink itchiio_link" href="https://xoja-games.itch.io/save-ball" target="_blank">
        <img src="/resources/others/itchio.png">
        <p>Save Ball</p>
      </a>
      `,
      `<a class="projectlink itchiio_link" href="https://xoja-games.itch.io/save-ball-2" target="_blank">
        <img src="/resources/others/itchio.png">
        <p>Save Ball 2</p>
      </a>`,
      `<a class="projectlink itchiio_link" href="https://xoja-games.itch.io/dino-go" target="_blank">
        <img src="/resources/others/itchio.png">
        <p>Dino Go</p>
      </a>`,
      `<a class="projectlink itchiio_link" href="https://xoja-games.itch.io/racer-from-future" target="_blank">
        <img src="/resources/others/itchio.png">
        <p>Racer From Future</p>
      </a>`,
      `<a class="projectlink itchiio_link" href="https://xoja-games.itch.io/skiing" target="_blank">
        <img src="/resources/others/itchio.png">
        <p>Skiing</p>
      </a>`,
      `<a class="projectlink itchiio_link" href="https://xoja-games.itch.io/lightspeed-run-race" target="_blank">
        <img src="/resources/others/itchio.png">
        <p>Lightspeed Run Race</p>
      </a>`,
      `<a class="projectlink itchiio_link" href="https://xoja-games.itch.io/fly-forever" target="_blank">
        <img src="/resources/others/itchio.png">
        <p>Fly Forever</p>
      </a>`,
      `<a class="projectlink itchiio_link" href="https://xoja-games.itch.io/dino-go-3d" target="_blank">
        <img src="/resources/others/itchio.png">
        <p>Dino Go 3D</p>
      </a>`,
      `<a class="projectlink itchiio_link" href="https://xoja-games.itch.io/save-the-ball-3d" target="_blank">
        <img src="/resources/others/itchio.png">
        <p>Save the Ball 3D</p>
      </a>`,
    ]
  })
];

const apps = [
  new Project({
    name: "Loiha",
    imagePath: "/resources/projects/apps/loiha.svg",
    description:`
    Loiha is free, open source app that helps you manage your projects
    `,
    tags: ["open source", "flutter", "linux", "windows"],
    externalLinks: [`
      <a class="projectlink codeberg_link" href="https://codeberg.org/shodmonxoja/loiha" target="_blank">
         <img src="/resources/others/codeberg.svg">
         <p>Open Repo</p>
      </a>
    `]
  }),
];

const assets_tools = [
  new Project({
    name: "Car AI for Unity",
    imagePath: "/resources/projects/assetstools/carai.jpg",
    description:`
    Car AI which follows the pre-determined path for racing games.
    `,
    tags: ["unity", "script"],
    externalLinks: ['https://xoja-games.itch.io/car-ai-unity'],
    openLinkDirectly: true
  }),
  new Project({
    name: "Savior of the planet",
    imagePath: "/resources/projects/assetstools/sop.png",
    description: "A template of a roguelike game Savior of the planet for Unity",
    tags: ["unity", "project template"],
    externalLinks: ['https://xoja-games.itch.io/save-ball-3d-template'],
    openLinkDirectly: true
  }),
  new Project({
    name: "Shattered Ice Source code",
    imagePath: "/resources/projects/assetstools/shatteredice_sc.png",
    description: "Source code of a game Shattered Ice (Game jam entry).",
    tags: ["unity", "project source code"],
    externalLinks: ['https://xoja-games.itch.io/shattered-ice-source-code'],
    openLinkDirectly: true
  }),
];

const experimental = [
  new Project({
    name: "Image to ASCII",
    imagePath: "/resources/projects/experimental/imagetoascii.webp",
    description:`
    A Java project that converts .png images into ASCII image
    `,
    tags: ["open source", "java", "github"],
    externalLinks: ['https://github.com/Shodmonxoja/Image-To-TextImage'],
    openLinkDirectly: true
  }),
  new Project({
    name: "Mp4 to PNG encryptor",
    imagePath: "/resources/projects/experimental/mp4topng.webp",
    description:`
    A Java project that encrypts .mp4 videos into .png images
    `,
    tags: ["open source", "java", "github"],
    externalLinks: ['https://github.com/Shodmonxoja/MP4-To-PNG-compressor'],
    openLinkDirectly: true
  }),
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
  attachEventListeners(apps);
}

function addAssetsAndTools() {
  const projectsContainer = document.getElementById('page-content');
  projectsContainer.innerHTML = addProjects(assets_tools);
  attachEventListeners(assets_tools);
}

function addExperimental() {
  const projectsContainer = document.getElementById('page-content');
  projectsContainer.innerHTML = addProjects(experimental);
  attachEventListeners(experimental);
}

function attachEventListeners(currentProjectsArray) {
  const links = document.querySelectorAll('.project_listing');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const index = e.currentTarget.getAttribute('data-index');
      const selectedProject = currentProjectsArray[index];
      if (selectedProject.openLinkDirectly) {
        window.open(selectedProject.externalLinks[0], '_blank');
        return;
      }
      showProjectSheet(selectedProject, '', selectedProject.externalLinks);
    });
  });
}

window.addApps = addApps;
window.addGames = addGames;
window.addAssetsAndTools = addAssetsAndTools;
window.addExperimental = addExperimental;
