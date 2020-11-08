$(window).scroll(function () {

    $('.animacija-prva').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight*1 ) {
            $(this).addClass("slideRight");
            if ($(this).hasClass("slideLeft"))   $(this).removeClass("slideLeft");

        } else {

        if ($(this).hasClass("slideRight"))   $(this).addClass("slideLeft");

            $(this).removeClass("slideRight");

        }
    });

    $('.animacija-druga').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight*1 ) {

            $(this).addClass("fadeIn");
              if ($(this).hasClass("fadeOut"))   $(this).removeClass("fadeOut");


        } else {

       if ($(this).hasClass("fadeIn"))   $(this).addClass("fadeOut");

            $(this).removeClass("fadeIn");

        }
    });

    $('.animacija-treca').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight*1.15 ) {
            $(this).addClass("vrti");

        } else {

            $(this).removeClass("vrti");

        }
    });

});
