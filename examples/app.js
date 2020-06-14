import Router from "../src/index.js";

import HomeController from "./HomeController.js";
import HomeProfile from "./HomeProfile.js";
import HomeContact from "./HomeContact.js";

class App {
  static initialize() {
    new Router({
      baseUrl: Router.getBaseUrlByRootPath("/examples"),
      notRender: true,
      routes: [
        {
          name: "home",
          path: "/",
          handler: (route) => new HomeController(route).initialize(),
        },
        {
          name: "profile",
          path: "/profile",
          handler: (route) => new HomeProfile(route).initialize(),
        },
        {
          name: "contact",
          path: "/contact",
          handler: (route) => new HomeContact(route).initialize(),
        },
      ],
    });
  }
}

App.initialize();
