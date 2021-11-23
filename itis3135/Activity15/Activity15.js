$(document).ready(function(){
    $.getJSON("facultyList.json", function(data) {
        $.each(data, function() {
            $.each(this, function(key, value) {
                $("main").append(
                    "<img src='" + value.image + "'>" +
                    "<h2>"+ value.full_name + "</h2>" +                   
                    "<h3>" + value.department + "</h3>" +
                    "<p>" + value.bio + "</p>"
                );
            });
        });
    });
});
