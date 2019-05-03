$(document).ready(function() {
    
    // secion2 - tabs
    $('.js-tabs-switch-btn').on('click', function (e) {
        e.preventDefault();
        $('.tabs-block').removeClass('active');
        $('.js-tabs-switch-btn').removeClass('active');
        $(this).addClass('active');
        var elementClick = $(this).attr("href");
        var screenJs = $('.tabs-block[data-id="' + elementClick + '"]');
        screenJs.addClass('active');
    });
    
    // secion3 - smooth scroll 
    $(".js-menu-link").on("click", function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body, html').animate({
            scrollTop: top
        }, 1500);
    });
    
    // secion4 - accordeon
    $(".js-accordeon-title").on("click", function (e) {
        e.preventDefault();
        $('.accrodeon-item-content').removeClass('active');
        $(this).siblings('.accrodeon-item-content').toggleClass('active');
    });
    
});

