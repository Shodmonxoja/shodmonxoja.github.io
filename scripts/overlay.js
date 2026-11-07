import { Project } from "./models/project.js";

export function showProjectSheet(project, tagBar, externalLinks) {
  const overlay = document.createElement('div');
  overlay.className = 'overlay';

  const sheetContent = document.createElement('div');
  sheetContent.className = 'sheet-content';

  let linkbar = '';
  if (externalLinks.length !== 0) {
      for (let i = 0; i < externalLinks.length; i++){
          linkbar += externalLinks[i];
      }
  }
  sheetContent.innerHTML = `
    <h2 style="margin-top: 0;">${project.name}</h2>
    <p>${project.description}</p>
    <div class="projectlinkholder">
      ${linkbar}
    </div>
    <button class="dynamic-close-btn">Close</button>
  `;

  overlay.appendChild(sheetContent);
  document.body.appendChild(overlay);

  const destroyOverlay = () => {
    overlay.remove();
  };

  const closeBtn = sheetContent.querySelector('.dynamic-close-btn');
  closeBtn.addEventListener('click', destroyOverlay);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      destroyOverlay();
    }
  });
}

window.showProjectSheet = showProjectSheet;
