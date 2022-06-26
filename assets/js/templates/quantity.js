let AllquantityElement = document.querySelectorAll('.quantity');
for (const quantityElement of AllquantityElement) {
    let quantityElementButtons = quantityElement.querySelectorAll('.quantity_btn');
    for (const quantityElementButton of quantityElementButtons) {
        quantityElementButton.addEventListener('click',quantity_btnClick);
    }
}
function quantity_btnClick(e) {
    e.preventDefault();
    let href = this.href;
    let quantityElement = this.closest('.quantity');
    let quantityValue = quantityElement.querySelector('.quantity_value');
    fetch(this.href)
    .then(
        function (response) {
            return response.json();
        }
    )
    .then(
        function (data) {
            if (data.subject === "changed") {
                quantityValue.innerText = data.qty;
            }else if(data.subject === "delete"){
                deleterowTable(thisElement);
            }
        }
    )
    .catch(
        function (error) {
            console.log(error);
        }
    )
}