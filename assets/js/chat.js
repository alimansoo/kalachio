var myInterval;
//status 600 ===> یک پیام جدید وجود دارد
//       500 ===> پیام شما ثبت شد.
//       100 ===> هنوز لاگین نکردی
//       550 ===> پیام جدیدی نیست
var chat_icon = document.querySelector("section.chat .chat_icon");
if (chat_icon) {
    chat_icon.addEventListener('click',showChat)
}
function showChat(e) {
    let chat_container = document.querySelector('section.chat .chat_container');
    chat_container.classList.toggle('show');
}
var formChat = document.querySelector("#Chatform");
if (formChat) {
    formChat.addEventListener('submit',sendMessage)
    var url = formChat.action;
}

function sendMessage(e) {
    e.preventDefault();
    let message = formChat.querySelector("#Chatmessage").value;
    var formData = new FormData();
    formData.append('submit', 'submit');
    formData.append('chatmessage', message);
    console.log(url);
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
            switch (data.status) {
                case 500:
                    myChat(data.chatmessage);
                    if (!myInterval) {
                        myInterval = setInterval(resiverMessage, 1000)
                    }
                    break;
                case 100:
                    messageBoxSmall(false,data.message)
                    break;
            }
            console.log(data);
        }
    )
    .catch(
        function (error) {
            console.log(error);
        }
    )
    
}
function resiverMessage() {
    fetch(url)
    .then(
        function (response) {
            return response.json();
        }
    )
    .then(
        function (data) {
            
            // console.log(data);
            switch (data.status) {
                case 600:
                    anyChat(data.chatmessage);
                    break;
            }
        }
    )
    .catch(
        function (error) {
            console.log(error);
        }
    )
}

function myChat(message) {
    let chat_container = document.querySelector("#chat_container");
    chat_container.appendChild
    var parentnode = document.createElement("div");
    parentnode.className = "my";
    var chatnode = document.createElement("div");
    chatnode.className = "chat-element mychat";
    chatnode.innerHTML = message

    parentnode.appendChild(chatnode);
    chat_container.appendChild(parentnode);
}
function anyChat(message) {
    let chat_container = document.querySelector("#chat_container");
    chat_container.appendChild
    var parentnode = document.createElement("div");
    parentnode.className = "any";
    var chatnode = document.createElement("div");
    chatnode.className = "chat-element anychat";
    chatnode.innerHTML = message

    parentnode.appendChild(chatnode);
    chat_container.appendChild(parentnode);
}