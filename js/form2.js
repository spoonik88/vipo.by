var showmsg = new TimelineMax();

showmsg.add(TweenMax.to(".msg", 0.7, {opacity: 1,y: -40,ease: Expo.easeOut}));
showmsg.add(TweenMax.to(".msg", 0.7, {opacity: 0,y: 0,ease: Expo.easeOut,delay: 2.5}));
showmsg.pause();


var loadanim = TweenLite.to(".loading", 1, {autoAlpha: 0.8});
loadanim.pause();

$('#required_comment').trigger('reset');

$(function() {
    'use strict';
    $('#required_comment').on('submit', function(e) {
        $('.msg').removeClass('error success');
        $('input').removeClass('inputerror');
        loadanim.play();
        e.preventDefault();
        $.ajax({
            url: 'send.php',
            type: 'POST',
            contentType: !1,
            processData: !1,
            data: new FormData(this),
            success: function(msg) {
                console.log(msg);                
                if (msg == 'ok') {
                    $('#required_comment').trigger('reset');
                    $('label').removeClass('active');
                    $('.msg').text('Спасибо, ваше сообщение отправлено.').addClass('success');
                    showmsg.restart();
                    loadanim.duration(0.3).reverse()
                } else {
                    if (msg == 'mailerror') {}
                    $('.msg').text('Ошибка. Сообщение не отправлено').addClass('error');
                    showmsg.restart();
                    loadanim.duration(0.3).reverse()
                }
            }
        })
    })
});



