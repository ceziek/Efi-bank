class Ajax {
    constructor({endpoint, method, data, success, error, before, complete} ) {
        this.endpoint = endpoint;
        this.method = method;
        this.data = data;
        this.success = success;
        this.error = error;
        this.before = before;
        this.complete = complete;

        this.config = {
            url: "https://efigence-camp.herokuapp.com/api/"
        };
    }

    send() {
        $.ajax({
            method: this.method,
            url: this.config.url + this.endpoint,
            data: this.data,
            beforeSend: this.before
        })
            .done((res) => this.success(res))
            .fail((error) => this.error(error))
            .always((res) => this.complete(res));
    }
}
