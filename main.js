// drop-down -profile-menu//

let profileMenu = document.getElementById("profileMenu");

function toggleMenu() {
    profileMenu.classList.toggle("openMenu");
}

//sidebar activity open and close sidebar in mobile//

let sidebarActivity = document.getElementById("sidebarActivity");
let moerLink = document.getElementById("showMoreLink");

function toggleActivity() {
    sidebarActivity.classList.toggle("open-activity");

    if (sidebarActivity.classList.contains("open-activity")) {
        moerLink.innerHTML = "Show Less <b>-</b>";
    } else {
        moerLink.innerHTML = "Show More <b>+</b>";
    }
}

