/*"use strict";
$(document).ready(function() {


        // preload the image for each link
        $("#image_list a").each( (index, link) => {
                const image = new Image();
                image.src = link.href;
        });

        // set up the event handlers for each link
        $("#image_list a").click( evt => {
                const link = evt.currentTarget;

                // get the image URL and caption for each image and animate the caption
                $("#image").fadeOut(3000, function() {
                        $("#image").attr("src", link.href).fadeIn(3000);
                });

                $("#caption").fadeOut(3000, function() {
                        $("#caption").text("src", link.href).fadeIn(3000);
                });

        
                // cancel the default action of each link
                evt.preventDefault();
                
        });
    	
        // move the focus to the first link
        $("li:first-child a").focus();

}); // end ready
*/

//JQuery from the book pg. 273
"use strict"
$(document).ready(() => {
    $("a").each ( (index, link) => {
        const image = new Image();
        image.src = link.href;
    });

    $("a").click(evt => {
        const link = evt.currentTarget;
        $("#main-image").attr("src", link.href);
        $("#caption").text(link.title);
        console.log("test");
        evt.preventDefault();
    });
    $("li:first-child a").focus();

});

