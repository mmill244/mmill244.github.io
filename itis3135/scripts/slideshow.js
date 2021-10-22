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


/*
//JQuery code from the book pg. 287
"use strict"
$(document).ready( () => {

    $("#slide li").each( (index, elem) => {
        let nextSlide = $("slides img: first-child");

    setInterval( () => {
        $("#caption").fadeOut(1000);
        $("#slide").fadeOut(1000,
            () => {
                if (nextSlide.next().length == 0) {
                    nextSlide = $("#slides img:first-child");
                } else {
                    nextSlide = nextSlide.next();
                }
                const nextSlideSource = nextSlide.attr("src");
                const nextCaption = nextSlide.attr("alt");
                $("#slide").attr("src", nextSlideSource).fadeIn(1000);
                $("caption").text(nextCaption).fadeIn(1000);
             }); //end of fadeOut()
    }, 3000); //end of setInterval()
    });

    
});
*/
