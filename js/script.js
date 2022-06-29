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
                    contentElement.innerHTML = RenderPage(data);
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
function json2array(json){
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function(key){
        result.push(json[key]);
    });
    return result;
}
function RenderData(item) {
    var Result;
    for (const dataitem of item.data) {
        var template = item.template;
        for (const dataitem2 in dataitem) {
            var key = "{-"+dataitem2+"-}";
            template = template.replace(key, dataitem[dataitem2]);
        }
        if (template != undefined) {
            Result += template;
        }
        
    }
    return Result;
}
function RenderPage(data) {
    var mainTemplate = data.maintemplate;

    var ArrayData = data.data;
    for (const item in ArrayData) {
        mainTemplate = mainTemplate.replace("{--"+item+"--}",RenderData(ArrayData[item]))
    }
    return mainTemplate;
}