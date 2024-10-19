
function changeTextToEmail(){
    document.getElementById("contact-text").innerHTML = "franchesfae.eulogio@gmail.com";

    document.getElementById("mail-logo").src = "images/icons/mail-active.svg";
    document.getElementById("phone-logo").src = "images/icons/phone-inactive.svg";
}

function changeTextToPhone(){
    document.getElementById("contact-text").innerHTML = "(+63) 926 552 0621";

    document.getElementById("mail-logo").src = "images/icons/mail-inactive.svg";
    document.getElementById("phone-logo").src = "images/icons/phone-active.svg";
}