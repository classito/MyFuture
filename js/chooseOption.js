$l = $('.left');
$r = $('.right');

$l.mouseenter(function() {
 $('.container').addClass('left-is-hovered');
}).mouseleave(function() {
 $('.container').removeClass('left-is-hovered');
});

$r.mouseenter(function() {
 $('.container').addClass('right-is-hovered');
}).mouseleave(function() {
 $('.container').removeClass('right-is-hovered');
});