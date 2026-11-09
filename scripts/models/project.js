export class Project {
  constructor({name, imagePath, description, tags = [], externalLinks = [], openLinkDirectly=false}) {
    this.name = name;
    this.imagePath = imagePath;
    this.description = description;
    this.tags = tags;
    this.externalLinks = externalLinks;
    this.openLinkDirectly = openLinkDirectly;
  }
}
