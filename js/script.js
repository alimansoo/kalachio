// import "render";

let mainTimer;
let mainTimer2;
let mainTimer3;
window.onload = function () {
    mainTimer = setInterval(function () {
        Initial();
    },500);
}
async function Initial(url = false) {
    var FullUrl = '';
    if (!url) {
        url = document.getElementById("url").value;
    }
    if (!isURL(url)) {
        FullUrl = "http://localhost/KalaChio/s/"+url;
    }else{
        FullUrl = url;
    }
    console.log(FullUrl);

    var data = await Fetch(FullUrl);
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
function getUrlPage() {
    return document.getElementById("url").value;
}
function ajaxWorker() {
    var elements = document.querySelectorAll('.ajaxmainContent');
    for (const element of elements) {
        element.addEventListener('click',ajaxmainEvent);
    }

    var forms = document.querySelectorAll('.ajaxForm');
    for (const form of forms) {
        if (getUrlPage() != "login") {
            form.addEventListener('submit',formEvent);
        }
        else{
            form.addEventListener('submit',loginFormEvent);
        }
        
    }
}
function ajaxmainEvent(e) {
    e.preventDefault();
    var url = getpageAddres(this.href);
    const stateObj = { foo: 'bar' };
    history.pushState(stateObj, '', this.href);
    document.getElementById('url').value = url;

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
async function loginFormEvent(e) {
    e.preventDefault();
    var formData = new FormData();
    var Input = e.target.querySelector("input[type='email']");
    formData.append("email",Input.value);
    var url = e.target.action;
    var data = await FetchPost(url,formData)

    if (data.available == true) {
        document.querySelector('#url').value = 'verif';
        mainTimer = setInterval(function () {
            Initial("verif")
        },100);
        var verifTimer = setInterval(() => {
            var passElement = document.querySelector('form.ajaxForm input[type="password"]');
            if (passElement) {
                var form = document.querySelector('form.ajaxForm');
                var emailElement = document.createElement('input');
                emailElement.type = 'hidden';
                emailElement.name = 'email';
                emailElement.id = 'email';
                emailElement.value = Input.value;
                form.appendChild(emailElement);
                form.addEventListener('submit',async(e)=>{
                    e.preventDefault();
                    var formData = new FormData();
                    var Inputemail = e.target.querySelector("input#email");
                    var Inputpass = e.target.querySelector("input#password");
                    formData.append('email',Inputemail.value);
                    formData.append('password',Inputpass.value);
                    console.log(e.target.action);
                    const response = await fetch(e.target.action,{
                        method: "POST",
                        body: formData
                    });
                    const json = await response.json();
                    if (json.available == true && json.login == true) {
                        mainTimer = setInterval(function () {
                            Initial("userpanel")
                        },100);
                        const stateObj = { foo: 'bar' };
                        history.pushState(stateObj, '', 'http://localhost/KalaChio/userpanel');
                    }
                    else{
                        alert = document.createElement('div');
                        alert.className = "alert alert-danger alert-icon mb-4";
                        alert.innerText = "رمز عبور اشتباه است.";
                        e.target.parentNode.insertBefore(alert,e.target);
                    }
                })

                clearInterval(verifTimer);
            }
        }, 200);
    }else{
        var alert = document.querySelector('div.alert')
        if (alert) {
            alert.parentNode.removeChild(alert);
        }
        
        alert = document.createElement('div');
        alert.className = "alert alert-danger alert-icon mb-4";
        alert.innerText = "کاربری با این ایمیل وجود ندارد";
        e.target.parentNode.insertBefore(alert,e.target);
    }

    
}
// function SendPostRequest(url,formData) {
//     let Result={};
    
//     return Result;
// }
function ApplyScripts() {
    ajaxWorker();
    ApplySlider();
    ApplySidebar();
    ApplyInputs();
    ApplyDropdowns();
}
