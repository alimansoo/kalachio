let timer2 = setInterval(Render,500)
function Render() {
    let allHumbergerSidebar = document.querySelectorAll(".sidebar.h-sidebar");
    if (allHumbergerSidebar.length > 0) {
        clearInterval(timer2);
        for (const humbergerSidebar of allHumbergerSidebar) {
            humbergerSidebar.innerHTML = '<div class="h-sidebar_back"></div>'+humbergerSidebar.innerHTML;
        }
    }
    let allSidebarIcon = document.querySelectorAll(".sidebar-icon");
    if (allSidebarIcon.length > 0) {
        for (const sidebarIcon of allSidebarIcon) {
            sidebarIcon.addEventListener('click',ShowSidebar);
        }
    }
    function ShowSidebar(e) {
        let sidebarid = this.getAttribute('data-bind');
        let sidebar = document.querySelector('#'+sidebarid);
        sidebar.classList.add('show');
        sidebar.querySelector('.h-sidebar_back').addEventListener('click',CloseSidebar);
    }
    function CloseSidebar(e) {
        this.closest('.sidebar').classList.remove('show');
    }
}
