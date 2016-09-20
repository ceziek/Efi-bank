'use strict';

class List {
    constructor() {
        this.element = document.querySelector('.list');

        this.params = {
            endpoint: '/data/history',
            data: {},
            success: (res) => {
                let response = res.content;
                response.forEach((res) => this.component.unshift(this.template(res)));
                this.render();
            }
        };

        this.template = (res) => {
            let date = new Date(res.date);
            let dateMoment = moment(date);
            let style = "";

            if (res.status === "income") {
                style = "color:#00d400"
            } else {
                res.amount = -res.amount
            }

            return `<li class="list-element flex">
                        <span>${dateMoment.format("DD.MM")}</span>
                        <div>
                            <p>${res.description}</p>
                            <select name="choose" id="choose">
                                <option value="gas">Gas</option>
                                <option value="cash">Cash</option>
                                <option value="salary">Salary</option>
                                <option value="food">Food</option>
                            </select>
                        </div>
                        <span><b style=${style}>${res.amount.toLocaleString('pl')}</b> ${res.currency}</span>
                    </li>`;
        };
        this.component = [];

        Ajax.send(this.params);
    }

    render() {
        this.element.innerHTML = '<ul>' + this.component.join('') + '</ul>';
    }
}
