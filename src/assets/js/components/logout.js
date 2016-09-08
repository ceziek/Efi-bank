'use strict';

class Logout {
    constructor() {
        this.elems = document.querySelectorAll('.logout');

        this.config = ['search', 'exit'];

        this.template = (cfg) => {

            return `<button class="logout-button">
                      <img src="../assets/img/${cfg}.svg" alt="${cfg}">
                    </button>`;
        };

        this.component = [];

        this.build();

        this.render();
    }

    build() {
        this.config.forEach((cfg) => {
            this.component.push(this.template(cfg));
        });
    }

    render() {
        this.elems.forEach((elem) => elem.innerHTML = this.component.join(''));
    }
}
