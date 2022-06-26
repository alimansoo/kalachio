window.addEventListener('load',function () {
    let allProgressPercent = document.querySelectorAll('.progress.progress-percent');
    if (allProgressPercent.length > 0) {
        for (const ProgressPercent of allProgressPercent) {
            ProgressPercent.innerHTML += "<span class='percent'>70%</span>";
        }
    }
})

function updateProgress(Element,number) {
    Element.querySelector('.progress-bar').style.width = number+"%";
}
function updateProgressPercent(Element,number) {
    Element.querySelector('.progress-bar').style.width = number+"%";
    if (Element.querySelector('.percent')) {
        Element.querySelector('.percent').innerText = number+"%";
    }
}