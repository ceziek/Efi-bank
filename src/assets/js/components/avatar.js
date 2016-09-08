'use strict';

class Avatar {
    constructor() {
        this.elems = document.querySelectorAll('.avatar');

        this.template = (el) => {
            var content = el.innerHTML.trim();
            return `<img src="../assets/img/${content}.png" alt="${content}">`;
        };

        this.render();
    }

    render() {
        this.elems.forEach((elem) => elem.innerHTML = this.template(elem));
    }
}