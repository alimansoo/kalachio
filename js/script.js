window.onload = function () {
    let mainTimer = setInterval(Initial,200);
    function Initial() {
        let url = document.getElementById("url").value;
        fetch("http://localhost/KalaChio/b/"+url)
        .then(
            function (response) {
                return response.json();
            }
        )
        .then(
            function (data) {
                let contentElement = document.getElementById("content");
                if (contentElement) {
                    contentElement.innerHTML = data.content;
                    console.log(data);
                }
                clearInterval(mainTimer);
            }
        )
        .catch(
            function (error) {
                console.log(error);
            }
        )
    }
}
