
$(document).foundation();

function locale(num) {
    return num.toLocaleString('pl')
}

let list = new List();
let products = new Products();
let finance = new Finance();

$('#mobile-menu').on('click', () => {
    $('.mobile-menu').toggleClass('active');
    $('.header').slideToggle();
});

