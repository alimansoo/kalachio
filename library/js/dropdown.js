// let timer = setInterval(sliderRender,500)

// function sliderRender() {
//     window.addEventListener('click',function (e) {
//         if (!e.target.classList.contains('dropdown_item')) {
//             allDropdownItem = document.querySelectorAll('.dropdown .dropdown_item');
//             if (allDropdownItem.length > 0) {
//                 for (const dropdownItem of allDropdownItem) {
//                     let dropdown = dropdownItem.closest('.dropdown').classList.remove('show');
//                 }
//             }
//         }
//     })
//     window.addEventListener('load',function () {
//         let allDropdown = document.querySelectorAll('.dropdown .dropdown_item.item-icon');
//         if (allDropdown.length > 0) {
//             for (const dropdown of allDropdown) {
//                 dropdown.innerHTML += "<i class='fa fa-caret-down'></i>";
//             }
//         }
    
//         allDropdownItem = document.querySelectorAll('.dropdown .dropdown_item');
//         if (allDropdownItem.length > 0) {
//             for (const dropdownItem of allDropdownItem) {
//                 dropdownItem.addEventListener('click',function (e) {
//                     let dropdown = dropdownItem.closest('.dropdown').classList.toggle('show');
//                 })
//             }
//         }
//     })
//     window.addEventListener('click',function (e) {
//         if (!e.target.classList.contains('dropdown_item')) {
//             allDropdownItem = document.querySelectorAll('.dropdown .dropdown_item');
//             if (allDropdownItem.length > 0) {
//                 for (const dropdownItem of allDropdownItem) {
//                     let dropdown = dropdownItem.closest('.dropdown').classList.remove('show');
//                 }
//             }
//         }
//     })
// }
