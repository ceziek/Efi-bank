'use strict';

class Finance {
    constructor() {
        this.handler = document.querySelector('.finance-stream');
        this.params = {
            endpoint: '/data/summary',
            data: {},
            success: (res) => {
                let response = res.content[0];
                this.component = this.template(response);
                this.render();
            }
        };

        this.template = (res) => {
            let balance = locale(res.balance),
                funds = locale(res.funds),
                payments = locale(res.payments);

            return `
                    <h1>Finance life stream</h1>
                    <div class="flex">
                        <div class="finance-stream-element">
                            <h3>Balance</h3>
                            <p><b>${balance}</b> PLN</p>
                        </div>
                        <div class="finance-stream-element">
                            <h3>Available funds</h3>
                            <p><b>${funds}</b> PLN</p>
                        </div>
                        <div class="finance-stream-element">
                            <h3>Scheduled payments</h3>
                            <p><b>${payments}</b> PLN</p>
                        </div>
                    </div>
                  
                    `;
        };
        Ajax.send(this.params);
    }

    render() {
        this.handler.innerHTML = this.component;
    }
}
