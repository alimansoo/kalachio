// import "render";

let mainTimer;
let mainTimer2;
let mainTimer3;
window.onload = function () {
    mainTimer = setInterval(function () {
        Initial();
    },500);
}
function Initial(url = false) {
    var FullUrl = '';
    if (!url) {
        url = document.getElementById("url").value;
    }

    if (!isURL(url)) {
        FullUrl = "http://localhost/KalaChio/s/"+url;
    }else{
        FullUrl = url;
    }

    fetch(FullUrl)
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
                mainTimer2 = setInterval(function () {
                    RenderMain(url)
                },500);
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
function RenderMain(url = false) {
    var FullUrl = '';
    if (!url) {
        url = document.getElementById("url").value;
    }

    if (!isURL(url)) {
        FullUrl = "http://localhost/KalaChio/b/"+url;
    }else{
        FullUrl = url;
    }
    fetch(FullUrl)
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
                mainElement.innerHTML = ReplaceSection(template);
                clearInterval(mainTimer2);
                if (data.data) {
                    mainTimer3 = setInterval(function () {
                        RenderData(url)
                    },500);
                }
                else{
                    ApplyScripts();
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
function RenderData(url = false) {
    var FullUrl = '';
    if (!url) {
        url = document.getElementById("url").value;
    }

    if (!isURL(url)) {
        FullUrl = "http://localhost/KalaChio/d/"+url;
    }else{
        FullUrl = url;
    }
    fetch(FullUrl)
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
                    children = RenderSection(data[item]);
                    for (const child of children) {
                        element.parentNode.insertBefore(child,element);
                    }
                    element.parentNode.removeChild(element);
                }
                           
            }
            clearInterval(mainTimer3);
            ApplyScripts();
        }
    )
    .catch(
        function (error) {
            console.log(error);
        }
    )
}
function ReplaceSection(template) {
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
    return template;
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
    var Result=[];
    for (const dataitem of item.data) {
        var template = item.template;
        if (template != undefined) {
            Result.push(
                string2Element(
                    ReplaceData(template,dataitem)
                )
            );
        }
        
    }
    return Result;
}
function ReplaceData(template,data) {
    for (const dataitem in data) {
        var key = "{-"+dataitem+"-}";
        template = template.replace(key, data[dataitem]);
    }
    return template;
}
function string2Element(str) {
    return string2HTML(str)[0];
}
function string2HTML (str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    return doc.body.childNodes;
};
function ajaxWorker() {
    var elements = document.querySelectorAll('.ajaxmainContent');
    for (const element of elements) {
        element.addEventListener('click',ajaxmainEvent);
    }

    var forms = document.querySelectorAll('.ajaxForm');
    for (const form of forms) {
        form.addEventListener('submit',formEvent);
    }
}
function ajaxmainEvent(e) {
    e.preventDefault();
    var url = getpageAddres(this.href);
    const stateObj = { foo: 'bar' };
    history.pushState(stateObj, '', this.href);

    mainTimer = setInterval(function () {
        Initial(url)
    },500);
}
function formEvent(e) {
    e.preventDefault();
    var formData = new FormData();
    var Inputs = e.target.querySelectorAll("input:not([type='submit'])");
    for (const input of Inputs) {
        formData.append(input.name,input.value);
        console.log(input.name,input.value);
    }
    var url = e.target.action;
    fetch(url,{
        method: "POST",
        body: formData
    })
    .then(
        function (response) {
            return response.json();
        }
    )
    .then(
        function (data) {
            console.log(data);
        }
    )
    .catch(
        function (error) {
            console.log(error);
        }
    )
}
function getpageAddres(url) {
    return url.replace("http://localhost/KalaChio/","");
}
function isURL(str) {
    if (str.indexOf("http://") != -1 || str.indexOf("https://") != -1) {
        return true;
    }
    return false;
}
function ApplyScripts() {
    ajaxWorker();
    ApplySlider();
    ApplySidebar();
    ApplyInputs();
    ApplyDropdowns();
}