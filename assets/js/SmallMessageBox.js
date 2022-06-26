
function messageBoxSmall(status,message) {
    let small_modal_message = document.querySelector("#Small_modal_Message");
    let messageElement = small_modal_message.querySelector('span');
    messageElement.innerText = message;
    small_modal_message.classList.add('show');

    if (status) {
        small_modal_message.classList.add('success');
    }else{
        small_modal_message.classList.add('failed');
    }
}
let small_modal_message = document.querySelector("#Small_modal_Message");
small_modal_message.querySelector('i').addEventListener('click',ClosemessageBoxSmall);

function ClosemessageBoxSmall(e) {
    let small_modal_message = document.querySelector("#Small_modal_Message");
    small_modal_message.classList.remove('show');
}
