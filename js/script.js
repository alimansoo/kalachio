// import "render";

let mainTimer;
let mainTimer2;
let mainTimer3;
window.onload = function () {
    mainTimer = setInterval(Initial,500);
}
function Initial() {
    let url = document.getElementById("url").value;
    fetch("http://localhost/KalaChio/s/"+url)
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
                mainTimer2 = setInterval(RenderMain,500);
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
function RenderMain() {
    let url = document.getElementById("url").value;
    fetch("http://localhost/KalaChio/b/"+url)
    .then(
        function (response) {
            return response.json();
        }
    )
    .then(
        function (data) {
            let mainElement = document.querySelector("main.content");
            if (mainElement) {
                var template = data.template;
                var startIndex = 0;
                var endIndex = 0;
                var substring ='';
                var id ='';
                var spiner = ''
                while (template.indexOf('{') != -1) {
                    startIndex = template.indexOf('{'); 
                    endIndex = template.indexOf('}',startIndex);
                    substring = template.substring(startIndex,endIndex+1);
                    id = substring.replace("{","");
                    id = id.replace("}","");
                    spiner = '<div id="'+id+'" class="snipper snipper-grow snipper-secondary w-center"></div>';
                    template = template.replace(substring,spiner);

                    
                }
                mainElement.innerHTML = template;
                
                clearInterval(mainTimer2);
                mainTimer3 = setInterval(RenderData,500);
            }
            
        }
    )
    .catch(
        function (error) {
            console.log(error);
        }
    )
}
function RenderData() {
    let url = document.getElementById("url").value;
    // console.log("http://localhost/KalaChio/d/"+url);
    fetch("http://localhost/KalaChio/d/"+url)
    .then(
        function (response) {
            return response.json();
        }
    )
    .then(
        function (data) {
            if (data) {
                var element;
                var children;
                for (const item in data) {
                    element = document.getElementById(item);
                    children = stringToHTML(RenderSection(data[item]));
                    for (const child of children) {
                        console.log(child);
                        element.parentNode.insertBefore(child,element);
                    }
                    element.parentNode.removeChild(element);
                }
                           
            }
            clearInterval(mainTimer3);
        }
    )
    .catch(
        function (error) {
            console.log(error);
        }
    )
}
function json2array(json){
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function(key){
        result.push(json[key]);
    });
    return result;
}
function RenderPage(data) {
    var Structor = data.structor.split(' ');
    var Result="";
    for (const item of Structor) {
        if (data[item] == undefined) {
            continue;
        }
        Result += data[item];
    }
    return Result;
}
function RenderSection(item) {
    var Result='';
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
function stringToHTML (str) {
	// if (support) {
		var parser = new DOMParser();
		var doc = parser.parseFromString(str, 'text/html');
		return doc.body.childNodes;
	// }

	// var dom = document.createElement('div');
	// dom.innerHTML = str;
	// return dom;
};
