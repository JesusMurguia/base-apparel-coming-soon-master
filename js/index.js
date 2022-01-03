window.onload = function() {

    let email = document.getElementById('email');
    let button = document.getElementById('button');
    let error = document.getElementById('error');
    
    button.addEventListener('click', function() {
        if(!validateEmail(email.value)) {
            email.classList.toggle('invalid-email-border');
            error.classList.toggle('hidden');
        }
    });
};


function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }