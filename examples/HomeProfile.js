export default class HomeProfile {
  constructor(route) {
    this.route = route;
  }

  render() {
    this.route.routerView.innerHTML = `<h1>Home Profile</h1>`;
  }

  initialize() {
    this.render();
  }
}
