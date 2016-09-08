'use strict';

class UserPanel {
    constructor() {
        this.elems = document.querySelectorAll('.user-panel');

        this.template = (el) => {

            var content = el.innerHTML.trim();

            return `<h4>${content}</h4>
            <div class="buttons">
              <button>
                <img src="../assets/img/mail.svg" alt="">
              </button>
              <button>
                <img src="../assets/img/wrench.svg" alt="">
              </button>
            </div>`;
        };

        this.render();
    }

    render() {
        this.elems.forEach((elem) => elem.innerHTML = this.template(elem));
    }
}
