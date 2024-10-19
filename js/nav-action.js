//NAVIGATION BAR ACTIONS

//DISPLAY MOBILE DROPDOWN NAV
function displayNav(){
    const mobileDropDown = document.getElementById("mobile-nav");
    mobileDropDown.classList.toggle('active')
}

function clicktoDropDesigns(){
    const mobileDropDown = document.getElementById("mobileDesignsDropdown-con");
    const arrowIcon = document.getElementById("designsArrow-icon");

    mobileDropDown.classList.toggle('active')
    arrowIcon.classList.toggle('active')
}

function clicktoDropOtherWorks(){
    const mobileDropDown = document.getElementById("mobileOtherWorksDropdown-con");
    const arrowIcon = document.getElementById("otherWorksArrow-icon");

    mobileDropDown.classList.toggle('active')
    arrowIcon.classList.toggle('active')
}




//GENERAL PAGE
function scrolltoTop(){
    const element = document.getElementById("hero-section");

    element.scrollIntoView({
        behavior: "smooth"
    });
}



//LANDING PAGE
function scrolltoWorks(){
    const element = document.getElementById("works-section");
    const offset = 118;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

function scrolltoMobileWorks(){
    const element = document.getElementById("works-section");
    const offset = 76;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

function scrolltoCredentials(){
    const element = document.getElementById("credentials-section");
    const offset = 118;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

function scrolltoMobileCredentials(){
    const element = document.getElementById("credentials-section");
    const offset = 76;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

function scrolltoContact(){
    const element = document.getElementById("contact-section");
    const offset = 118;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

function scrolltoMobileContact(){
    const element = document.getElementById("contact-section");
    const offset = 76;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}



//PRODUCT PAGE
function scrolltoRole(){
    const element = document.getElementById("role-section");
    const offset = 118;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

function scrolltoMobileRole(){
    const element = document.getElementById("role-section");
    const offset = 76;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

function scrolltoDesigns(){
    const element = document.getElementById("designs-section");
    const offset = 118;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

function scrolltoMobileDesigns(){
    const element = document.getElementById("designs-section");
    const offset = 76;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

function scrolltoOtherWorks(){
    const element = document.getElementById("otherWorks-section");
    const offset = 118;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

function scrolltoMobileOtherWorks(){
    const element = document.getElementById("otherWorks-section");
    const offset = 76;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}