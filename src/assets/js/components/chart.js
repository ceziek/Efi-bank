$(function () {
    let chartContainer = $('#container');

    let data = {
        day: [],
        amount: []
    };
    const params = {
        endpoint: '/data/history',
        data: {},
        success: (res) => {
            let response = res.content;
            response.forEach((res) => {
                res.amount = res.status === 'income' ? res.amount : -res.amount;
                data.day.push(moment(res.date).format('DD.MM'));
                data.amount.push(res.amount);
            });
            for (let i = 0; i < data.amount.length - 1; i++) {
                data.amount[i + 1] = data.amount[i] + data.amount[i + 1]
            }
            chart(data);
        }
    };

    Ajax.send(params);

    function chart(data) {
        chartContainer.highcharts({
            chart: {
                type: 'areaspline'
            },
            title: {
                text: 'Transaction History Chart'
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 150,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
            },
            xAxis: {
                categories: data.day
            },
            yAxis: {
                title: {
                    text: 'Hajs'
                }
            },
            tooltip: {
                shared: true,
                valueSuffix: ' PLN'
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    fillColor: 'rgba(0, 0, 0, .2)',
                    negativeColor: '#DA2120',
                    negativeFillColor: 'rgba(255, 69, 0, 0.5)'
                }
            },
            series: [{
                name: 'Balance',
                data: data.amount
            }]
        });
    }

    $('.switch').on('change', () => {
        chartContainer.slideToggle();
    });


});