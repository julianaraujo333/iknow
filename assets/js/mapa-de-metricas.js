// MAPA DE METRICAS

$(document).ready(function(e) {

    $(".mtr-site").click(function() {
        var category = $(this).data("category");
        var label = $(this).data("label");

        if (!category || !label) return;

        if (!(location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
            gtag('event', 'click', {
                'event_category': category,
                'event_label': label
            });
        }
    });

});