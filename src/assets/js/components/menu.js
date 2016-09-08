'use strict';

class Menu {
    constructor() {
        this.elems = document.querySelectorAll('.menu > .menu-tile');

        this.template = (el) => {

            var content = el.innerHTML.trim();

            return `<div class="menu-tile flex">
                      <img src="../assets/img/${content}.svg" alt="${content}">
                      <p>${content}</p>
                    </div>`;
        };

        this.render();
    }

    render() {
        this.elems.forEach((elem) => elem.innerHTML = this.template(elem));
    }
}
