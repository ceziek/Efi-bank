(function() {
    let date = new Date();
    let dateMoment = moment(date);

    $("#fwd").on('click' , function () {
        dateMoment.add(1, 'months');
        $('#date').html(dateMoment.format("MMMM YYYY"));
    });

    $("#rwd").on('click' , function () {
        dateMoment.add(-1, 'months');
        $('#date').html(dateMoment.format("MMMM YYYY"));
    });
})();
