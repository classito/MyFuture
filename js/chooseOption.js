$l = $('.left');
$r = $('.right');



var code = document.cookie.split('');
document.getElementById('showMeCode').innerHTML = code[0] + ' ' + code[1] + ' ' + code[2] //eg R I A

document.getElementById('pathBoxInfoElem').innerHTML = code[0] + ' ' + code[1] + ' ' + code[2] //eg R I A
$('.box').hide();
//left
$l.mouseenter(function () {
    $('.container').addClass('left-is-hovered');
    $('.box').show();
    console.log("oof");
    $('#PathBox').addClass('animated fadeInUp');
    $('#PathBoxInfo').addClass('animated flipInX');
    $('#PathBox1').hide();
    $('#PathBoxInfo1').hide();
}).mouseleave(function () {
    $('.container').removeClass('left-is-hovered');
    $('#PathBox1').show();
    $('#PathBoxInfo1').show();
});


//right
$r.mouseenter(function () {
    $('.container').addClass('right-is-hovered');
    $('.box').show();
    console.log("oof2");
    $('#PathBox1').addClass('animated fadeInUp');
    $('#PathBoxInfo1').addClass('animated flipInX');
    $('#PathBox').hide();
    $('#PathBoxInfo').hide();
}).mouseleave(function () {
    $('.container').removeClass('right-is-hovered');
    $('#PathBox').show();
    $('#PathBoxInfo').show();
});

$('#whatsNext').click(function() {
    $('html, body').animate({
        scrollTop: 1200
    }, 1000);
});