class Project {
  constructor(name, imagePath, link, description) {
    this.name = name;
    this.imagePath = imagePath;
    this.link = link;
    this.description = description;
  }
}

const games = [
  new Project("Pixlock", "/resources/gameThumb/pixlock.jpeg", "link", `
    Pixlock is a challenging puzzle game where every move matters.
        Strategically slide blocks to clear the path and guide the main block through the hole at the bottom.
        Careful thinking and precise planning are key. Only logic and skill will lead you to victory.
    `),
  new Project("LRR", "/resources/gameThumb/random.png", "niasdfg", "description")
];

const apps = [
  new Project("Loiha", "/resources/gameThumb/pixlock.jpeg", "link", `
    Pixlock is a challenging puzzle game where every move matters.
        Strategically slide blocks to clear the path and guide the main block through the hole at the bottom.
        Careful thinking and precise planning are key. Only logic and skill will lead you to victory.
    `),
  new Project("ARR", "/resources/gameThumb/random.png", "niasdfg", "description")
];

function addProjects(projects) {
  let output = "";
  for (let i = 0; i < projects.length; i++){
    output += `
    <div class="game_listing">
        <img src="${projects[i].imagePath}">
        <div class="title-and-desc">
            <h2>${projects[i].name}</h2>
            <p>${projects[i].description}</p>
        </div>
        <div class="game-links">

        </div>
    </div>
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
