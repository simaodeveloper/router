export default class HomeContact {
  constructor(route) {
    this.route = route;
  }

  render() {
    this.route.routerView.innerHTML = `<h1>Contact</h1>`;
  }

  initialize() {
    this.render();
  }
}
