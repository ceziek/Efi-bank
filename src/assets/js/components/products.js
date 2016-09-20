'use strict';

class Products {
    constructor() {
        this.elems = document.querySelector('.products');

        this.params = {
            endpoint: '/data/products',
            data: {},
            success: (res) => {
                let response = res.content;
                response.forEach((res) => this.component.push(this.template(res)));
                this.render();
            },
        };

        this.template = (res) => {
            let amount = locale(res.amount);

            return `
                        <div class="product flex">
                            <div>
                                <img src="../assets/img/${res.type.toLowerCase()}.svg" alt="">
                            </div>
                            <div>
                                <p>${res.type} [${res.elements}]</p>
                                <span>${amount} ${res.currency}</span>
                            </div>
                        </div>`;
        };
        this.component = [];

        Ajax.send(this.params);
    }

    render() {
        this.elems.innerHTML = this.component.join('');
    }
}
