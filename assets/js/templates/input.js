let input_blockList = document.querySelectorAll(".input_material_block input");
for (let input_block of input_blockList) {
    input_block.addEventListener("focus",addclass)
    input_block.addEventListener("blur",removeclass)
    input_block.addEventListener("keyup",addclass)
}
let textarea_blockList = document.querySelectorAll(".input_material_block textarea");
for (let textarea_block of textarea_blockList) {
    textarea_block.addEventListener("focus",addclass)
    textarea_block.addEventListener("blur",removeclass)
    textarea_block.addEventListener("keyup",addclass)
}
let select_blockList = document.querySelectorAll(".input_material_block select");
for (let select_block of select_blockList) {
    select_block.addEventListener("focus",addclass)
    select_block.addEventListener("blur",removeclass)
    select_block.addEventListener("keyup",addclass)
}
function addclass(e) {
        let blockElement = this.closest(".input_material_block");
        blockElement.classList.add("focus");
        blockElement.classList.add("active");
}
function removeclass(e) {
    let blockElement = this.closest(".input_material_block");
    blockElement.classList.remove("focus");
    if (this.value == "") {    
        blockElement.classList.remove("active");
    }
}