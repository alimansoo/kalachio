//Like Product
let ElementsHeart = document.querySelectorAll('i.fa-heart');
for (let Element of ElementsHeart) {
    let ParentElement = Element.closest('a');
    ParentElement.addEventListener("click",LikeProduct);
}
function LikeProduct(e) {
    e.preventDefault();
    let IconElement = this.querySelector('i.fa-heart');

    fetch(this.href)
    .then(
        function (response) {
            return response.json();
        }
    )
    .then(
        function (data) {
            if (data.status === 200) {
                if(IconElement.classList.contains('fas')){
                    IconElement.classList.remove('fas');
                    IconElement.classList.add('far');
                }else if(IconElement.classList.contains('far')){
                    IconElement.classList.remove('far');
                    IconElement.classList.add('fas');
                }
                messageBoxSmall(true,data.message);
            } else {
                messageBoxSmall(false,data.message);
            }
            
        }
    )
    .catch(
        function (error) {
            console.log(error);
        }
    )
}

//Bookmark Product
let ElementsMarks = document.querySelectorAll('i.fa-bookmark');
for (let Element of ElementsMarks) {
    let ParentElement = Element.closest('a');
    ParentElement.addEventListener("click",BookmarkProduct);
}
function BookmarkProduct(e) {
    e.preventDefault();
    let IconElement = this.querySelector('i.fa-bookmark');
    
    fetch(this.href)
    .then(
        function (response) {
            return response.json();
        }
    )
    .then(
        function (data) {
            if (data.status === 200) {
                if(IconElement.classList.contains('fas')){
                    IconElement.classList.remove('fas');
                    IconElement.classList.add('far');
                }else if(IconElement.classList.contains('far')){
                    IconElement.classList.remove('far');
                    IconElement.classList.add('fas');
                }
                messageBoxSmall(true,data.message)
            } else {
                messageBoxSmall(false,data.message)
            }
            
        }
    )
    .catch(
        function (error) {
            console.log(error);
        }
    )
}

//Add Product To Card
let ElementsCard = document.querySelectorAll('a.card_btn');
for (let Element of ElementsCard) {
    Element.addEventListener("click",AddProductCard);
}
function AddProductCard(e) {
    e.preventDefault();
    let Element = this;

    fetch(this.href)
    .then(
        function (response) {
            return response.json();
        }
    )
    .then(
        function (data) {
            if (data.status === 200) {
                if(Element.classList.contains('add')){
                    Element.classList.remove('add');
                    Element.classList.add('remove');
                    Element.innerText  = "حذف از سبد";
                }else if(Element.classList.contains('remove')){
                    Element.classList.remove('remove');
                    Element.classList.add('add');
                    Element.innerText  = "افزودن به سبد";
                }
                messageBoxSmall(true,data.message);
            } else {
                messageBoxSmall(false,data.message);
            }
            
            
        }
    )
    .catch(
        function (error) {
            console.log(error);
        }
    )
}