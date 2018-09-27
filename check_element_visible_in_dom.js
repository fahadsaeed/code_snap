(() => {
    const $window = $(window);

    $window.on('scroll', function (e) {
        $(".section-content").each(function (){
            const eleIsVisibleOnScreen = isVisible(this);
            console.log('eleIsVisibleOnScreen............' ,eleIsVisibleOnScreen);
        });
    });

    function isVisible(ele) {
        const
            $ele = $(ele),

            elementTop = $ele.offset().top,
            elementBottom = elementTop + $ele.outerHeight(),

            viewportTop = $window.scrollTop(),
            viewportBottom = viewportTop + ($window.height()  / 2 );

        return elementBottom > viewportTop && elementTop < viewportBottom;
    }

})();
