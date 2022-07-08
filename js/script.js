// import "render";
// import "./event.js";
let mainTimer;
let mainTimer2;
let mainTimer3;
window.onload = async function (e) { 
    var href = window.location.href;
    var pageAddress = getpageAddres(href);
    var linkhref = getLinkUrl(pageAddress);

    const response = await fetch(linkhref);
    const json = await response.json();

    for (const key in json.do) {
        Dojson(json.do[key],e.target);
    }
}
function getLinkUrl(url) {
    return 'http://localhost/KalaChio/l/'+url;
}
async function LoadPage(url = false) {
    var FullUrl = '';
    if (!url) {
        url = document.getElementById("url").value;
    }
    if (!isURL(url)) {
        FullUrl = "http://localhost/KalaChio/s/"+url;
    }else{
        FullUrl = url;
    }

    var data = await Fetch(FullUrl);
    // console.log(data);

    changeWindowsHref("http://localhost/KalaChio/"+url);
    changeWindowsTitle(data.title);

    let contentElement = document.getElementById("content");
    if (contentElement) {
        contentElement.innerHTML = RenderPage(data);
        mainTimer2 = setInterval(function () {
            RenderMain(url)
        },500);
    }
    clearInterval(mainTimer);
}
async function RenderMain(url = false) {
    var FullUrl = '';
    if (!url) {
        url = document.getElementById("url").value;
    }

    if (!isURL(url)) {
        FullUrl = "http://localhost/KalaChio/b/"+url;
    }else{
        FullUrl = url;
    }
    var data = await Fetch(FullUrl);

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
async function RenderData(url = false) {
    var FullUrl = '';
    if (!url) {
        url = document.getElementById("url").value;
    }

    if (!isURL(url)) {
        FullUrl = "http://localhost/KalaChio/d/"+url;
    }else{
        FullUrl = url;
    }
    var data = await Fetch(FullUrl);
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
// function json2array(json){
//     var result = [];
//     var keys = Object.keys(json);
//     keys.forEach(function(key){
//         result.push(json[key]);
//     });
//     return result;
// }
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
}
function changeWindowsHref(href) {
    const stateObj = { foo: 'bar' };
    history.pushState(stateObj, '', href);
}
function changeWindowsTitle(title) {
    document.querySelector('title').innerText = title;
}
function ajaxWorker() {
    var elements = document.querySelectorAll('a');
    for (const element of elements) {
        if (element.href != "" && element.href != "#") {
            element.addEventListener('click',linkEvent);
        }
    }

    var forms = document.querySelectorAll('form');
    for (const form of forms) {
        form.addEventListener('submit',formEvent);
    }
}
async function linkEvent(e) {
    e.preventDefault();
    var url = getpageAddres(this.href);

    url = getLinkUrl(url);

    var data = await Fetch(url);
    for (const key in data.do) {
        await Dojson(data.do[key],e.target);
    }
}
async function formEvent(e) {
    e.preventDefault();
    var formData = new FormData();
    var Inputs = e.target.querySelectorAll("input:not([type='submit'])");
    for (const input of Inputs) {
        formData.append(input.name,input.value);
    }
    var url = getpageAddres(e.target.action);
    url = getLinkUrl(url);
    var data = await FetchPost(url,formData);
    for (const key in data.do) {
        await Dojson(data.do[key],e.target);
    }
}
async function Dojson(json,element) {
    switch (json.type) {
        case 'loadpage':
            mainTimer =  setInterval(function () {
                LoadPage(json.name)
            },100);
            break;
        case 'addElement':
            var verifTimer = setInterval(() => {
                var parent = document.querySelector(json.to);
                if (parent) {
                    clearInterval(verifTimer);
                    var element = document.createElement(json.element.tagname);
                    for (const key in json.element) {
                        element.setAttribute(key,json.element[key])
                    }
                    parent.appendChild(element);
                }
            })
            break;
        case 'erorre':
            var errore = document.createElement('div');
            var parentNode = element.parentNode;
            //remove befor alert
            var alertElement = parentNode.querySelector('.alert');
            if (alertElement) {
                parentNode.removeChild(alertElement);
            }
            errore.className = 'alert alert-danger alert-icon  mb-4';
            errore.innerText = json.message;
            element.parentNode.insertBefore(errore,element);
            break;
        case "alerterrore":
            iziToast.error({
                title: 'خطا',
                message: json.message
            });
            break;
        case "alertsuccess":
            iziToast.success({
                title: 'پیام موفقیت امیز',
                message: json.message
            });
            break;
        default:
            break;
    }
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
async function Fetch(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}
async function FetchPost(url,formData) {
    const response = await fetch(url,{
        method: "POST",
        body: formData
    });
    const json = await response.json();
    return json;
}
function ApplyScripts() {
    ajaxWorker();
    ApplySlider();
    ApplySidebar();
    ApplyInputs();
    ApplyDropdowns();
}
