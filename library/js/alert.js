window.addEventListener('load',function (e) {
    //set alert closabality
    let alert;
    let allAlerts ;
    allAlerts = document.querySelectorAll('.alert-closabality');
    if (allAlerts.length > 0) {
        for (alert of allAlerts) {
            alert.innerHTML += '<button class="close"><i class="fa fa-close"></i></button>';
        }
    }
    //set btn close event
    let allAlertsButton = document.querySelectorAll('.alert button.close');
    if (allAlertsButton.length > 0) {
        for (const alertsButton of allAlertsButton) {
            alertsButton.addEventListener('click',function (e) {
                let parentalert = this.closest('.alert');
                parentalert.classList.add('close');
                setTimeout(() => {
                    parentalert.remove();
                }, 400);
                
            })
        }
    }
    //set alert success
    allAlerts = document.querySelectorAll('.alert-success.alert-icon');
    if (allAlerts.length > 0) {
        for (alert of allAlerts) {
            alert.innerHTML = '<i class="fas fa-check-circle"></i>'+alert.innerHTML;
        }
    }
    // //set alert danger
    allAlerts = document.querySelectorAll('.alert-danger.alert-icon');
    if (allAlerts.length > 0) {
        for (alert of allAlerts) {
            alert.innerHTML = '<i class="fas fa-times-circle"></i>'+alert.innerHTML;
        }
    }
    //set alert info
    allAlerts = document.querySelectorAll('.alert-info.alert-icon');
    if (allAlerts.length > 0) {
        for (alert of allAlerts) {
            alert.innerHTML = '<i class="fas fa-info-circle"></i>'+alert.innerHTML;
        }
    }
    //set alert warning
    allAlerts = document.querySelectorAll('.alert-warning.alert-icon');
    if (allAlerts.length > 0) {
        for (alert of allAlerts) {
            alert.innerHTML = '<i class="fa fa-warning"></i>'+alert.innerHTML;
        }
    }
})
