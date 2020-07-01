const Router = require("./router");
const Inbox = require("./inbox");
const Sent = require("./sent");
const Compose = require("./compose");


document.addEventListener("DOMContentLoaded", (event) => {
    const sidebarEls = document.querySelectorAll(".sidebar-nav li");
    sidebarEls.forEach((el) => {
        el.addEventListener("click", (event) => {
            const location = el.innerText;
            window.location.hash = location.toLowerCase();
        });
    });
    const content = document.querySelector(".content");
    const routes = {inbox: Inbox, sent: Sent, compose: Compose};
    const router = new Router(content, routes);
    router.start();
    window.location.hash = "#inbox";
});




//test
