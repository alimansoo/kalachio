function updateCardPrice() {
    let allRow = document.querySelectorAll('tr');
    let sumofProduct = 0;
    for (let row of allRow) {
        let priceElement= row.querySelector('td.priceProduct span');
        let quantityProduct= row.querySelector('td.quantityProduct .productQty');
        if (priceElement && quantityProduct) {
            sumofProduct += priceElement.innerText * quantityProduct.innerText;
        }
    }
    
    let Card_deatail = document.querySelector(
        'section.Card_deatail .PriceAll .Card_deatail_row_value');
    
    Card_deatail.innerHTML = sumofProduct + '<span class="price_componant">ریال</span>';
}