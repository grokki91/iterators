export default class Team {
  constructor() {
    this.members = new Set();
  }

  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
  }
}
