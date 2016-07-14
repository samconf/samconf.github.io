$(document).ready(function() {
    if ($('#endpoint-index').length === 0) {
        return;
    }

    $(document).on("scroll", function(){
        if($(document).scrollTop() > 100)
          $("header").addClass("shrink");
        else
            $("header").removeClass("shrink");
    });

    $('a').click(function(evt) {
    var $target = $(evt.target.hash);

    if ($target.length === 1) {
        $('html, body').animate({
            scrollTop: $target.offset().top
        }, 500);

        evt.preventDefault();
        evt.stopImmediatePropagation();
    }
});

});
