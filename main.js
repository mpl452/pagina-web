document.querySelector('.menu-btn').addEventListener('click,' () => {
    document.querySelector('.nav-menu').classList.toggle('show');   
});

scrollReveal().reveal('.showcase');
scrollReveal().reveal('.news-cards', { delay: 500});
scrollReveal().reveal('.cards-banner-one', { delay: 500});
scrollReveal().reveal('.cards-banner-tow', { delay: 500});
