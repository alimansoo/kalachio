function ApplyModal() {
    let modalItems = document.querySelectorAll('.modal-item');
    if (modalItems.length > 0) {
        for (const modalItem of modalItems) {
            modalItem.addEventListener('click',function(){
                let modalId = this.getAttribute('data-bind');
                let modal = document.getElementById(modalId);
                modal.classList.toggle('hide');
                modal.querySelector('.close-btn').addEventListener('click',function () {
                    this.closest('.modal').classList.add('hide');
                })
            });
        }
    }
}