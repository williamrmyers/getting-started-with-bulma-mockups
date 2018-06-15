var dropdown = document.querySelector('.navbar-burger');
dropdown.addEventListener('click', function(event) {
    event.stopPropagation();
    document.querySelector('.navbar-menu').classList.toggle('is-active');
});
