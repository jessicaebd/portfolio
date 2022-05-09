// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector("header");
    const fixednav = header.offsetTop;
    const toTop = document.querySelector("#to-top");

    if (window.pageYOffset > fixednav) {
        header.classList.add("navbar-fixed");
        toTop.classList.remove("hidden");
        toTop.classList.add("flex");
    } else {
        header.classList.remove("navbar-fixed");
        toTop.classList.remove("flex");
        toTop.classList.add("hidden");
    }
};

//  Darkmode Toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
    if (darkToggle.checked) {
        html.classList.add("dark");
    } else {
        html.classList.remove("dark");
    }
});

// Portfolio Gallery Filter
const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio-gallery").children;

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active");
            filterButtons[j].classList.add("filter-hover");
        }
        this.classList.add("active");
        this.classList.remove("filter-hover");
        const target = this.getAttribute("data-target");

        for (let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if (target == items[k].getAttribute("data-id")) {
                items[k].style.display = "block";
            }
            if (target == "all") {
                items[k].style.display = "block";
            }
        }
    });
}
