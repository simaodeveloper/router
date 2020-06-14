export default class Router {
  constructor(options = {}) {
    const { baseUrl = "/", routes = [], notRender = false } = options;

    this.baseUrl = baseUrl;
    this.routes = routes;
    this.notRender = notRender;
    this.routerView = document.querySelector("[data-router-view]");

    this.init();
  }

  static getBaseUrlByRootPath(rootPath = "/") {
    const { protocol, hostname, port } = location;
    return `${protocol}//${hostname}${port ? `:${port}` : ``}${rootPath}`;
  }

  add(route = {}) {
    this.routes.push(route);
  }

  redirectTo(path = "/") {
    const route = this.routes.find((route) => route.path === path);

    if (route) {
      history.replaceState(null, null, this.baseUrl + route.path);
    }

    route.redirectTo = this.redirectTo.bind(this);
    route.routerView = this.routerView;

    const template = route.handler(route);

    if (template && !this.notRender) this.render(template);
  }

  render(template) {
    this.routerView.innerHTML = template;
  }

  loadEvents() {
    document.addEventListener("click", (event) => {
      event.preventDefault();

      const linkEl = event.target;
      const { routerLink } = linkEl.dataset;

      if (routerLink !== undefined) {
        event.stopPropagation();
        const path = linkEl.getAttribute("href");
        this.redirectTo(path);
      }
    });

    document.addEventListener("DOMContentLoaded", () => {
      this.redirectTo();
    });
  }

  init() {
    this.loadEvents();
  }
}
