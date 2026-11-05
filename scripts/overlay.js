function showProjectSheet(project, tagBar, externalLinks) {
  document.body.append(`
    <div class="_dialog" id="${project.name}">
        <h2>${project.name}</h2>
        ${tagBar}
        <img src="${project.imagePath}">
        <div class="projectlinks">${externalLinks}</div>
        <button onclick="removeProjectSheet(${project.name})">Close</button>
    </div>
    `);
}

function removeProjectSheet(id) {
  const element = document.getElementById(id);
  element.parentNode.removeChild(element);
}
