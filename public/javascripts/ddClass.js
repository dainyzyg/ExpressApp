/**
 * Created by Baggio on 2015/12/8.
 */
var dd = dd || {};
dd.addListenerClick = function(ddElement, fn)
{
    var isTouch = ('ontouchstart' in document.documentElement) ? 'touchstart' : 'click';
    $(ddElement).on(isTouch, fn);
}