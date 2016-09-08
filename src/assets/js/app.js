
$(document).foundation();

function locale(num) {
    return num.toLocaleString('pl', {style: 'currency', currency: 'PLN'})
}

let userPanels = new UserPanel();
let avatars = new Avatar();
let menus = new Menu();
let logout = new Logout();
let finance = new Finance();
let list = new List();
let products = new Products();

