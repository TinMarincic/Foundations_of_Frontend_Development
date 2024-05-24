$(document).ready(function () {

    var app = $.spapp({ pageNotFound: "error_404" });
    app.route({
        view: "bella",
        load: "bella.html",
    });

    app.route({
        view: "about_us",
        load: "about_us.html",
    });

    app.route({
        view: "services",
        load: "services.html",
    });

    app.route({
        view: "our_clients",
        load: "our_clients.html",
    });

    app.route({
        view: "contact",
        load: "contact.html",
    });

    app.run();
})