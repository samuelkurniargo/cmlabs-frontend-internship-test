"use strict";
import Utils from "./services/Utils.js";

import Home from "./views/pages/Home.js";
import Category from "./views/pages/Category.js";
import Meal from "./views/pages/Meal.js";

const routes = {
  "/": Home,
  "/category/:id": Category,
  "/category/:id/:id": Meal,
};

const router = async () => {
  const content = null || document.getElementById("main-content");

  // Get parsed URL from addressbar
  let request = Utils.parseRequestURL();

  // Parse the URL and if it has an id part, change it with the string "id"
  let parsedURL =
    (request.resource ? "/" + request.resource : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? "/:id" : "");

  // Get the page from our hash of supported routes
  // If the parsed URL is not in our list of supported routes, select the 404 page instead
  let page = routes[parsedURL] ? routes[parsedURL] : routes["/404"];
  content.innerHTML = await page.render();
  await page.afterRender();
};
// Listen on hash change
window.addEventListener("hashchange", router);

// Listen on page load
window.addEventListener("load", router);
