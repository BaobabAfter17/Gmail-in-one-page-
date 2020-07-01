function Router(node, routes) {
    this.node = node;
    this.routes = routes;
}

Router.prototype.start = function () {
    this.render();
    window.addEventListener("hashchange", (event) => {
        this.render();
    });
}

Router.prototype.activeRoute = function () {
   const route = window.location.hash.slice(1);
   return this.routes[route];
}

Router.prototype.render = function () {
    this.node.innerHTML = "";
    const component = this.activeRoute();
    if (typeof component !== "undefined") {
        this.node.appendChild(component.render());
    }
}

module.exports = Router;