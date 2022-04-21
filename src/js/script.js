// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;
    const toTop = document.querySelector('#to-top')

    if(window.pageYOffset > fixednav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else{
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

//  Darkmode Toggle
const darkToggle = document.querySelector('#dark-toggle')
const html = document.querySelector('html')

darkToggle.addEventListener('click', function() {
    if (darkToggle.checked){
        html.classList.add('dark');
    }else {
        html.classList.remove('dark')
    }
})


