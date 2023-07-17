window.addEventListener("hashchange", function () {
    const url = this.window.location.href;
    const [_, section = null] = url.split("#");

    if (section === "home" || !section) {
        document.getElementById("home").style.display = "inline-table";
    } else {
        document.getElementById("home").style.display = "none";

    }
});
let isSideBarOpen = false;
document.querySelector("#checkbtn").addEventListener("click", () => {
    const sideBar = document.querySelector(".header");
    if (isSideBarOpen) {
        sideBar.style.left = "-285px"
        isSideBarOpen = false;
    } else {
        isSideBarOpen = true;
        sideBar.style.left = "-0px"
    }
})