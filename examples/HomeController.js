export default class HomeController {
  constructor(route) {
    this.route = route;
  }

  render() {
    this.route.routerView.innerHTML = `<h1>Home Controller</h1>`;
  }

  initialize() {
    this.render();
  }
}
