class Project {
  constructor(name, imagePath, description, {tags = []} = {}) {
    this.name = name;
    this.imagePath = imagePath;
    this.description = description;
    this.tags = tags;
  }
}

const games = [
  new Project("Pixlock", "/resources/gameThumb/pixlock.jpeg", `
    Pixlock is a challenging puzzle game where every move matters.
        Strategically slide blocks to clear the path and guide the main block through the hole at the bottom.
        Careful thinking and precise planning are key. Only logic and skill will lead you to victory.
    `, {tags: ["free", "android", "web"]}),
  new Project("LRR", "/resources/gameThumb/random.png", "description"),
];

const apps = [
  new Project("Loiha", "/resources/gameThumb/pixlock.jpeg", `
    Pixlock is a challenging puzzle game where every move matters.
        Strategically slide blocks to clear the path and guide the main block through the hole at the bottom.
        Careful thinking and precise planning are key. Only logic and skill will lead you to victory.
    `),
  new Project("ARR", "/resources/gameThumb/random.png", "description")
];

const assets_tools = [
  new Project("Car AI for Unity", "https://img.itch.zone/aW1nLzE0NzU0MzU3LnBuZw==/315x250%23c/gW7g1%2F.png", `
    Pixlock is a challenging puzzle game where every move matters.
        Strategically slide blocks to clear the path and guide the main block through the hole at the bottom.
        Careful thinking and precise planning are key. Only logic and skill will lead you to victory.
    `),
  new Project("ARR", "/resources/gameThumb/random.png", "description")
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
    <a class="project_listing" href="javascript:void(0);" onclick="showProjectSheet(${projects[i]}, '', '')">
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
}

function addApps() {
  const projectsContainer = document.getElementById('page-content');
  projectsContainer.innerHTML = addProjects(apps);
}

function addAssetsAndTools() {
  const projectsContainer = document.getElementById('page-content');
  projectsContainer.innerHTML = addProjects(assets_tools);
}
