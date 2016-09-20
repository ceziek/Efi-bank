"use strict";

class Ajax {
    static send({endpoint, data, success, before} ) {
        $.get({
            url: "https://efigence-camp.herokuapp.com/api/" + endpoint,
            data: data,
            beforeSend: before
        })
            .done((res) => success(res))
            .fail((err) => console.log('Ajax send error !', err))
    }
}
