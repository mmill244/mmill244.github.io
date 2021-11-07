"use strict";
$(document).ready(function() {


        // preload the image for each link
        $("a").each( (index, link) => {
                const image = new Image();
                image.src = link.href;
        });

        // set up the event handlers for each link
        $("a").click( evt => {
                const link = evt.currentTarget;

                // get the image URL and caption for each image and animate the caption
                $("image").fadeOut(3000);
                $("caption").fadeOut(3000);

                $("image").attr("src", link.href);
                $("caption").text(link.title);

                $("image").fadeIn(3000);
                $("caption").fadeIn(3000);
                

                // cancel the default action of each link
                evt.preventDefault();
                
        });
    	
        // move the focus to the first link
        $("li:first-child a").focus();

}); // end ready