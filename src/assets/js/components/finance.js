'use strict';

class Finance {
    constructor() {
        this.params = {
            endpoint: '/data/summary',
            method: 'GET',
            data: {},
            success: (res) => {
                let response = res.content[0];
                this.build(response);
                this.render();
            },
            error: (res) => console.log(res, 'error'),
            before: () => {
            },
            complete: () => {
            }
        };

        this.elems = document.querySelectorAll('.finance');

        this.template = (res) => {

            let balance = locale(res.balance),
                funds = locale(res.funds),
                payments = locale(res.payments);

            return `
                    <div class="finance-element">
                      <h3>Balance</h3>
                      <p>${balance}</p>
                    </div>
                    <div class="finance-element">
                      <h3>Available funds</h3>
                      <p>${funds}</p>
                    </div>
                    <div class="finance-element">
                      <h3>Scheduled payments</h3>
                      <p>${payments}</p>
                    </div>`;
        };

        let financeAjax = new Ajax(this.params);
        financeAjax.send();

        this.component = [];
    }

    build(res) {
        this.component.push(this.template(res))
    }


    render() {
        this.elems.forEach((elem) => elem.innerHTML = this.component.join(''));
    }
}
