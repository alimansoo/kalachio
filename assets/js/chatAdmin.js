var myInterval = setInterval(resiverMessage, 1000)
var chatContainerUser;
var ChatAdminLink = document.querySelector('a#ChatAdminLink').href;
//status 600 ===> یک پیام جدید وجود دارد
//       500 ===> پیام شما ثبت شد.
//       100 ===> هنوز لاگین نکردی
//       550 ===> پیام جدیدی نیست
var AllformChat = document.querySelectorAll(".Chatform");
if (AllformChat.length > 0) {
    for (let formChat of AllformChat) {
        formChat.addEventListener('submit',sendMessage)
    }
}
function sendMessage(e) {
    e.preventDefault();
    let message = this.querySelector("input[type=text]").value;
    let formData = new FormData();
    formData.append('submit', 'submit');
    formData.append('chatmessage', message);
    let url = this.action;
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
                    break;
                case 100:
                    messageBoxSmall(false,data.message)
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
function resiverMessage() {
    fetch(ChatAdminLink)
    .then(
        function (response) {
            return response.json();
        }
    )
    .then(
        function (data) {
            switch (data.status) {
                case 600:
                    anyChat(data);
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
    var parentnode = document.createElement("div");
    parentnode.className = "my";
    var chatnode = document.createElement("div");
    chatnode.className = "chat-element mychat";
    chatnode.innerHTML = message

    parentnode.appendChild(chatnode);
    chatContainerUser.appendChild(parentnode);
}
function anyChat(data) {
    
    let chat_container = document.querySelector("#chat_container"+data.sender);
    if(chat_container){
        var parentnode = document.createElement("div");
        parentnode.className = "any";
        var chatnode = document.createElement("div");
        chatnode.className = "chat-element anychat";
        chatnode.innerHTML = data.chatmessage;

        parentnode.appendChild(chatnode);
        chat_container.appendChild(parentnode);
        
        alert('New Chat User:'+data.sender)

    }else{
        newChat(data);
    }
}

let Allchat_contants = document.querySelectorAll('.chat_contant');
if (Allchat_contants.length > 0) {
    for (let chat_contant of Allchat_contants) {
        chat_contant.addEventListener('click',ShowChatContainer);
    }
}
function ShowChatContainer(e) {
    //hide All container
    let Allchat_contants = document.querySelectorAll('.chat_messages');
    for (let chat_contant of Allchat_contants) {
        chat_contant.classList.remove('show');
    }
    //find id
    let thisId = this.id.replace("chat_contant", "");
    //find container
    let thisContainerId = 'chat_container'+thisId;
    let thisContainer = document.querySelector('#'+thisContainerId);
    chatContainerUser = thisContainer;
    thisContainer.classList.add('show');
}

function newChat(data) {
    let nav_list = document.querySelector('#sidebar ul');
    nav_list.innerHTML+= `
        <li class="nav_item chat_contant" id="chat_contant`+data.sender+`">
            <i class="fas fa-user-circle"></i>`+data.sender+`
        </li>`;
    let full_container = document.querySelector('.full-container');
    full_container.innerHTML += `
    <div class="admin-chat-container chat_messages" id="chat_container`+data.sender+`">
        <div class='any'><div class='chat-element anychat'>`+data.chatmessage+`</div></div>
        <form action="../controller/adminChatController_controller.php?reciver_id=`+data.sender+`" method="post" class="Chatform">
            <input type="text" name="message" placeholder="ارسال پیام..." id="Chatmessage">
            <input type="submit" value="ارسال">
        </form>
    </div>`;
    let Allchat_contants = document.querySelectorAll('.chat_contant');
    if (Allchat_contants.length > 0) {
        for (let chat_contant of Allchat_contants) {
            chat_contant.addEventListener('click',ShowChatContainer);
        }
    }
    var AllformChat = document.querySelectorAll(".Chatform");
    if (AllformChat.length > 0) {
        for (let formChat of AllformChat) {
            formChat.addEventListener('submit',sendMessage)
        }
    }
    alert('New Chat User:'+data.sender)
}