let radioButton = document.getElementsByName('who');
let loginButton = document.querySelector(".login-button");
let userName = document.querySelector('input[type="text"]');
let password = document.querySelector('input[type="password"]');
let checkedRadio;

loginButton.addEventListener("click", () => {
    for (let i = 0; i < radioButton.length; i++) {
        if (radioButton[i].checked) {
            checkedRadio = radioButton[i].value;
        }
    }

    let userNameIsTrue = userName.value.trim() != "";
    let passwordIsTrue = password.value.trim() != "";


    if (checkedRadio=="patient")
        window.open("patientPage/index.html","_self")
    else if(checkedRadio=="admin")
        window.open("adminDashboard/index.html","_self")
    else if(checkedRadio=="Doctor")
        window.open("doctorDashboard/index.html","_self")

});