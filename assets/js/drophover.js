let dropfirstchild = document.querySelectorAll('.drophover:first-child');
if (dropfirstchild.length > 0 ) {
    for (let dropchild of dropfirstchild) {
        dropchild.addEventListener('click',toggledrop)
    }
}
function toggledrop(e) {
    let dropdown = this.closest('.drophover');
    dropdown.classList.toggle('show');
}
window.onclick = function(event) {
    console.log(event.target);
    if (!event.target.matches('.drophover_first_item')) {
        var dropdowns = document.querySelectorAll('.drophover');
        var i;
        for (const openDropdown of dropdowns) {
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                console.log('remove');
            }
        }
        
    }
}