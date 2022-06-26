// import './progress';
document.querySelector('#btn-progress').addEventListener('click',function (e) {
    progress = this.getAttribute('data-bind');
    progress = document.querySelector('#'+progress);
    updateProgress(progress,30);
})

document.querySelector('#btn-progress-percent').addEventListener('click',function (e) {
    progress = this.getAttribute('data-bind');
    progress = document.querySelector('#'+progress);
    updateProgressPercent(progress,30);
})

document.querySelector('#btn-badge').addEventListener('click',function (e) {
    badge = this.getAttribute('data-bind');
    badge = document.querySelector('#'+badge);
    changeBadge(badge,30);
})