const header = document.querySelector(".navbar")

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbar-light');
    }
    else {
        header.classList.remove('navbar-light');
    }
}