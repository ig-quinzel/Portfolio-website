var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function toggleProjects() {
    const moreProjects = document.getElementById("more-projects");
    const btn = document.getElementById("showMoreBtn");

    if (moreProjects.style.display === "none") {
        moreProjects.style.display = "grid";
        btn.innerText = "Show Less";
    } else {
        moreProjects.style.display = "none";
        btn.innerText = "Show More";
    }
}
