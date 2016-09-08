'use strict';

class Products {
    constructor() {
        this.elems = document.querySelectorAll('.products');

        this.params = {
            endpoint: '/data/products',
            method: 'GET',
            data: {},
            success: (res) => {
                let response = res.content;
                console.log(response,'success');
                response.forEach((res) => {
                    this.component.push(this.template(res))
                });
                this.render();
            },
            error: (res) => console.log(res,'error'),
            before: () => {},
            complete: () => {}
        };

        this.template = (res) => {

            let amount = locale(res.amount);

            return `<div class="product flex">
                      <div class="icon"><img src="../assets/img/${res.type.toLowerCase()}.svg" alt=""></div>
                       <div>
                        <p>${res.type} [${res.elements}]</p>
                        <span>${amount}</span>
                       </div>
                     </div>`;
        };

        this.component = [];

        console.log('Instrument init');

        let instrumentAjax = new Ajax(this.params);
        instrumentAjax.send();
    }



    render() {
        this.elems.forEach((elem) => elem.innerHTML =  this.component.join(''));
    }
}
