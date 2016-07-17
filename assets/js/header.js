$(document).ready(function() {

    if ($('#endpoint-index').length != 0) {
        $("header").addClass("index-header");
    }

    $(document).on("scroll", function(){
        if($(document).scrollTop() > 50) {
            $("header").attr("id", "shrink");
            if ($('#endpoint-index').length != 0) {
                $("#about-bar").parent().addClass("active-link");
            }
        }
        else {
            $("header").removeAttr("id", "shrink");
            $("#about-bar").parent().removeClass("active-link");
        }
    });

    $('#navbar a').each(function() {
        if ($(this).attr('href') === window.location.pathname) {
            $(this).parent().addClass('active-link');
        }
        else {
            $(this).parent().removeClass('active-link');
        }
    });

    $('a').click(function(evt) {
        var $target = $(evt.target.hash);
            if ($target.length === 1) {
                if($('#endpoint-index').length != 0) {
                    $("#navbar").removeClass("in");
                    $("#toggle-button").addClass("collapsed");
                }
                if($(document).scrollTop() < 50) {
                    $('html, body').animate({
                        scrollTop: $target.offset().top
                    }, 500);
                }
                else {
                    $('html, body').animate({
                        scrollTop: $target.offset().top+38
                    }, 500);
                }

                evt.preventDefault();
                evt.stopImmediatePropagation();
            }
    });
});
