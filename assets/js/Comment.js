let CommentForm = document.querySelector("form#CommentForm");
if (CommentForm) {
    CommentForm.addEventListener('submit',SaveComment);
}
function SaveComment(e) {
    e.preventDefault();
    let CommentForm = document.querySelector("form#CommentForm");
    let url = CommentForm.action;
    console.log(url);
    let subject = CommentForm.querySelector("#subjectComment").value;
    let message = CommentForm.querySelector("#messagComment").value;
    var formData = new FormData();
    formData.append('subject', subject);
    formData.append('message', message);
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
            if (data.status === 200) {
                messageBoxSmall(true,data.message)
            } else {
                messageBoxSmall(false,data.message)
            }
        }
    )
    .catch(
        function (error) {
            console.log(error);
        }
    )
}

//SmallmessageBox
