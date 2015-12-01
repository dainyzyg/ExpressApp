/**
 * Created by ad on 2015/11/16.
 */
$(document).ready(function () {
    var isTouch = ('ontouchstart' in document.documentElement) ? 'touchstart' : 'click';
    $(".ddToolButton").on(isTouch, function () {
        $(".ddToolButton").css("color", "black");
        $(this).css("color", "rgb(66, 139, 202)");
        if ($('.ddtrans').css('left') == '0px') {
            $('.ddtrans').css('left', '100%');
        } else {
            $('.ddtrans').css('left', 0);
        }

    });
});