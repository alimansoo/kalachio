let SidebarIcon = document.querySelector("#SidebarIcon");
if(SidebarIcon){
    SidebarIcon.addEventListener('click',showSidebar)
}
let backsidebar = document.querySelector("#backsidebar");
if(backsidebar){
    backsidebar.addEventListener('click',hideSidebar)
}

function showSidebar(e) {
    let sidebar = document.querySelector("#sidebar");
    let backsidebar = document.querySelector("#backsidebar");
    backsidebar.classList.add("show");
    sidebar.classList.add("show");
}

function hideSidebar(e) {
    let sidebar = document.querySelector("#sidebar");
    let backsidebar = document.querySelector("#backsidebar");
    backsidebar.classList.remove("show");
    sidebar.classList.remove("show");
}