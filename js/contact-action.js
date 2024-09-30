
function changetoEmailContact(){
    document.getElementById("contact-text").innerHTML = "franchesfae.eulogio@gmail.com";

    document.getElementById("contact-emaillogo").src = "images/icons/mail-active.svg";
    document.getElementById("contact-phonelogo").src = "images/icons/phone-inactive.svg";
}

function changetoNumberContact(){
    document.getElementById("contact-text").innerHTML = "(+63) 926 552 0621";

    document.getElementById("contact-emaillogo").src = "images/icons/mail-inactive.svg";
    document.getElementById("contact-phonelogo").src = "images/icons/phone-active.svg";
}