jQuery('#anatomi-list').on('mouseover mouseout', 'li', function () {
    jQuery('#' + jQuery(this).data('content')).toggle();
    jQuery('#' + jQuery(this).data('glow')).toggle();
    jQuery('.anatomi-std-text').toggle();
});

var glower = jQuery('.glow');
window.setInterval(function() {  
    glower.toggleClass('active');
}, 500);