'use strict';

class List {
    constructor() {
        this.elems = document.querySelectorAll('.list');

        this.params = {
            endpoint: '/data/history',
            method: 'GET',
            data: {},
            success: (res) => {
                let response = res.content;
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
            let date = new Date(res.date);
            let amount = locale(res.amount);

            let shortDate = date.getDay() + '.' + date.getMonth();

            return `<li>
                      <div class="row flex ">
                        <div class="large-2 columns text-center">
                          <span>${shortDate}</span>
                        </div>
                        <div class="large-7 columns">
                          <div class="row">
                            <div class="large-12 columns"><p>${res.description}</p></div>
                          </div>
                          <div class="row">
                            <div class="large-12 columns"><p>choose</p></div>
                          </div>
                        </div>
                        <div class="large-3 columns text-center">
                          <span id="hist-amount">${amount}</span>
                        </div>
                      </div>
                    </li>`;
        };

        this.component = [];

        let listAjax = new Ajax(this.params);
        listAjax.send();
    }

    render() {
        this.elems.forEach((elem) => elem.innerHTML = '<ul>' + this.component.join('') + '</ul>');
    }
}
