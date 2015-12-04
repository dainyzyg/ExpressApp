$(function () {
    //$("#side-menu").metisMenu();
    $('#side-menu').metisMenu({
        onTransitionStart: function () {
            alert('onTransitionStart');
        },
        onTransitionEnd: function () {
            alert('onTransitionEnd');
        }
    });

});
//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function () {
    $(window).bind("load resize", function () {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
            setIframeHeight('mainFrame');
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            //$("#page-wrapper").css("min-height", (height) + "px");
        }

        //setIframeHeight('mainFrame');

    });

    //var url = window.location;
    //var element = $('ul.nav a').filter(function () {
    //    return this.href == url || url.href.indexOf(this.href) == 0;
    //}).addClass('active').parent().parent().addClass('in').parent();
    //if (element.is('li')) {
    //    element.addClass('active');
    //}
});

function setIframeHeight(iframeId) {
    var browserVersion = window.navigator.userAgent.toUpperCase();
    var isOpera = false;
    var isFireFox = false;
    var isChrome = false;
    var isSafari = false;
    var isIE = false;
    var iframeTime;

    function reinitIframe(iframeId, minHeight) {
        try {
            var iframe = document.getElementById(iframeId);
            var bHeight = 0;
            if (isChrome == false && isSafari == false)
                bHeight = iframe.contentWindow.document.body.scrollHeight;

            var dHeight = 0;
            if (isFireFox == true)
                dHeight = iframe.contentWindow.document.documentElement.offsetHeight + 2;
            else if (isIE == false && isOpera == false)
                dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
            else
                bHeight += 3;
            var height = Math.max(bHeight, dHeight);
            if (height < minHeight) height = minHeight;
            iframe.style.height = height + "px";
        } catch (ex) {
        }
    }

    function startInit(iframeId, minHeight) {
        isOpera = browserVersion.indexOf("OPERA") > -1 ? true : false;
        isFireFox = browserVersion.indexOf("FIREFOX") > -1 ? true : false;
        isChrome = browserVersion.indexOf("CHROME") > -1 ? true : false;
        isSafari = browserVersion.indexOf("SAFARI") > -1 ? true : false;
        if (!!window.ActiveXObject || "ActiveXObject" in window)
            isIE = true;
        reinitIframe(iframeId, minHeight);

    }

    startInit(iframeId, 560);
}

function jumpPage(e, url) {
    $('.active').removeClass('active');
    $(e).addClass('active');
    document.getElementById('mainFrame').src = '../' + url;
    if (isMobile()) {
        $('div.navbar-collapse').collapse('toggle')
    }
}
function isMobile() {
    var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
    return width < 768 ? true : false;
}