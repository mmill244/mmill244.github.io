$(document).ready(function() {
    $("#nav_list a").click(function() {
        $.getJSON("json_files/" + $(this).attr("title") + ".json", function(data) {
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("main").html("");
                    $("main").append(
                        "<h1>" + value.title + "</h1>" +
                        "<h2>"+ value.month + "</h2>" +                   
                        "<h3>" + value.speaker + "</h3>" +
                        "<img src='" + value.image + "'>" +
                        "<p>" + value.text + "</p>"
                    );
                });
            });
        });
    });
}); // end ready