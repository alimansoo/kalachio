let searchInput = document.querySelector('input[type=search]');
var Searchlink = document.querySelector('#Searchlink').href;
if (searchInput) {
    searchInput.addEventListener('keyup',SearchProduct)
}
function SearchProduct(e) {
    fetch(Searchlink+this.value)
    .then(
        function (response) {
            return response.json();
        }
    )
    .then(
        function (data) {
            if (data.status === 1) {
                RenderSearchResut(data);
            }else{
                let searchdata = document.querySelector('#searchdata');
                searchdata.classList.remove('show');
            }
        }
    )
    .catch(
        function (error) {
            console.log(error);
        }
    )
}

function RenderSearchResut(jsonObject) {
    let searchdata = document.querySelector('#searchdata');
    searchdata.classList.add('show');
    searchdata.innerHTML = "";
    for (let product of jsonObject.data) {
        let option = document.createElement('div')

        let linkElement = document.createElement('a')
        linkElement.href = product.link;
        linkElement.innerText = product.name;

        let image = document.createElement('img')
        image.src = product.image;

        option.appendChild(image);
        option.appendChild(linkElement);
        searchdata.appendChild(option);
    }
}