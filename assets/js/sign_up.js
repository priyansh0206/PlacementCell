var password = document.getElementById('pswrd');
var confirmPassword = document.getElementById('confirm-pswrd');
var passwordCheck = document.getElementById('password-check');
var submitButton = document.getElementById('submit-button');

confirmPassword.addEventListener('input', function(){
    if(password.value === confirmPassword.value){
        passwordCheck.innerText = "Password matched"
        submitButton.disabled = false;
    }
    else{
        passwordCheck.innerText = "Password doesn't matched"
        submitButton.disabled = true;
    }
    if(confirmPassword.value === ""){
        passwordCheck.innerText = ""
        submitButton.disabled = true;
    }
});
confirmPassword.addEventListener('input', function(){
    if(password.value === ""){
        passwordCheck.innerText = ""
        submitButton.disabled = true;
    }
});