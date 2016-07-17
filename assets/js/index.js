$(document).ready(function() {

    if ($('#endpoint-index').length === 0) {
        return;
    }

    $('.animate1').each(function(index, element) {
        setTimeout(function(){
            element.classList.remove('loading');
        }, 300);
    });
    
    $('.animate2').each(function(index, element) {
        setTimeout(function(){
            element.classList.remove('loading');
        }, 600);
    });
});
