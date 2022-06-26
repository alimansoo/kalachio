let ajaxWorkerLinkElementList = document.querySelectorAll(".ajaxWorkerLink");
if (ajaxWorkerLinkElementList.length > 0) {
    for (let ajaxWorkerLinkElement of ajaxWorkerLinkElementList) {
        ajaxWorkerLinkElement.addEventListener('click',linkRequest)
    }
}
function linkRequest(e) {
    e.preventDefault();
    let url = this.href;
    fetch(url)
    .then(
        function (response) {
            return response.json();
        }
    )
    .then(
        function (data) {
            if(data.status === 200){
                if (data.message) {
                    messageBoxSmall(true,data.message)
                }
            }else{
                if (data.message) {
                    messageBoxSmall(false,data.message)
                }
            }
        }
    )
    .catch(
        function (error) {
            console.log(error);
        }
    )
}