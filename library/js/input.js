function ApplyInputs() {
    let allInputs = document.querySelectorAll('.form-outline .form-controll');
    if (allInputs.length > 0) {
        for (const Input of allInputs) {
            Input.addEventListener('focus',focusInput);
            Input.addEventListener('blur',blurInput);
        }
    }
    
    if (allInputs.length > 0) {
        for (const Input of allInputs) {
            let parent = Input.closest('.form-outline');
            if (Input.value !== "") {
                parent.classList.add('focus');
            }
        }
    }
    let allInputpassword = document.querySelectorAll('.form-outline input[type=password].password-visabality');
    if (allInputpassword.length > 0) {
        for (const Inputpassword of allInputpassword) {
            let parent = Inputpassword.closest('.form-outline');
            parent.innerHTML += "<i class='fa fa-eye'></i>";
            parent.querySelector('i.fa-eye').addEventListener('click',show_hide_password);
        }
    }
}

function focusInput(e) {
    let parent = this.closest('.form-outline');
    parent.classList.add('focus');
    parent.classList.add('active');
}
function blurInput(e) {
    let parent = this.closest('.form-outline');
    if (this.value === "") {
        parent.classList.remove('focus');
    }
    parent.classList.remove('active');
}
function show_hide_password(e) {
    let parent = this.closest('.form-outline');
    let input = parent.querySelector('input');
    if (this.classList.contains('fa-eye')) {
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
        input.type = "text";
    }else{
        this.classList.add('fa-eye')
        this.classList.remove('fa-eye-slash');
        input.type = "password";
    }
}