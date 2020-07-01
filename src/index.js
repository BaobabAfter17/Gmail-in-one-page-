const Router = require("./router");

document.addEventListener("DOMContentLoaded", (event) => {
    const sidebarEls = document.querySelectorAll(".sidebar-nav li");
    sidebarEls.forEach((el) => {
        el.addEventListener("click", (event) => {
            const location = el.innerText;
            window.location.hash = location.toLowerCase();
        });
    });
    const content = document.querySelector(".content");
    const router = new Router(content);
    router.start();
});


//test