var Page = (function () {
    var $container = $('#container'),
        $bookBlock = $('#bb-bookblock'),
        $items = $bookBlock.children(),
        itemsCount = $items.length,
        current = 0,
        bb = $('#bb-bookblock').bookblock({
            speed: 800,
            perspective: 2000,
            shadowSides: 0.8,
            shadowFlip: 0.4,

            onBeforeFlip: function (old, page, isLimit) {
                return false;
            },

            onEndFlip: function (old, page, isLimit) {
                current = page;
                updateTOC();
                updateNavigation(isLimit);
                setJSP('init'); // jScrollPane
                setJSP('destroy', old);
            }
        }),
        $navNext = $('#bb-nav-next'),
        $navPrev = $('#bb-nav-prev').hide(),
        $menuItems = $container.find('ul.menu-toc > li'),
        $tblcontents = $('#tblcontents'),
        transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
        transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
        supportTransitions = Modernizr.csstransitions;


        // ---------------------------------------------------------------------------------------------
    function initEvents() {
        // add navigation events
        $navNext.on('click', function () {
            bb.next();
            return false;
        });

        $navPrev.on('click', function () {
            bb.prev();
            return false;
        });

        // add swipe events
        $items.on({
            'swipeleft': function (event) {
                if ($container.data('opened')) {
                    return false;
                }
                bb.next();
                return false;
            },
            'swiperight': function (event) {
                if ($container.data('opened')) {
                    return false;
                }
                bb.prev();
                return false;
            }
        });

        // show table of contents
        $tblcontents.on('click', toggleTOC);

        // click a menu item
        $menuItems.on('click', function () {

            var $el = $(this),
                idx = $el.index(),
                jump = function () {
                    bb.jump(idx + 1);
                };

            current !== idx ? closeTOC(jump) : closeTOC();

            return false;

        });

        // reinit jScrollPane on window resize
        $(window).on('debouncedresize', function () {
            // reinitialise jScrollPane on the content div
            setJSP('reinit');
        });

    } // initEvents function


    // ---------------------------------------------------------------------------------------------
    function setJSP(action, idx) {
        var idx = idx === undefined ? current : idx,
            $content = $items.eq(idx).children('div.page'),
            apiJSP = $content.data('jsp');

        if (action === 'init' && apiJSP === undefined) {
            $content.jScrollPane({ verticalGutter: 0, hideFocus: true });
        }
        else if (action === 'reinit' && apiJSP !== undefined) {
            apiJSP.reinitialise();
        }
        else if (action === 'destroy' && apiJSP !== undefined) {
            apiJSP.destroy();
        }

    } // setJSP


    // ---------------------------------------------------------------------------------------------
    function toggleTOC() {
        var opened = $container.data('opened');
        opened ? closeTOC() : openTOC();
    }


    // ---------------------------------------------------------------------------------------------
    function openTOC() {
        $navNext.hide();
        $navPrev.hide();
        $container.addClass('slideRight').data('opened', true);
    }


    // ---------------------------------------------------------------------------------------------
    function closeTOC(callback) {
        updateNavigation(current === itemsCount - 1);
        $container.removeClass('slideRight').data('opened', false);
        if (callback) {
            if (supportTransitions) {
                $container.on(transEndEventName, function () {
                    $(this).off(transEndEventName);
                    callback.call();
                });
            }
            else {
                callback.call();
            }
        }

    }


    // ---------------------------------------------------------------------------------------------
    function updateTOC() {
        $menuItems.removeClass('menu-toc-current').eq(current).addClass('menu-toc-current');
    }


    // ---------------------------------------------------------------------------------------------
    function updateNavigation(isLastPage) {
        if (current === 0) {
            $navNext.show();
            $navPrev.hide();
        }
        else if (isLastPage) {
            $navNext.hide();
            $navPrev.show();
        }
        else {
            $navNext.show();
            $navPrev.show();
        }
    }


    // ---------------------------------------------------------------------------------------------
    function updateStyles() {
        const elements = $('.page-image, .page-text');

        if (window.innerWidth > 768) {
            elements.removeClass('page-narrow');
            elements.addClass('page-wide');
        } else {
            elements.removeClass('page-wide');
            elements.addClass('page-narrow');
        }
    }

    
    // =============================================================================================
    function init() {
        updateStyles(); // NOTE: needs to execute before JSP init so initial scroll height (if needed) is accurate
        window.addEventListener('DOMContentLoaded', updateStyles);
        window.addEventListener('resize', updateStyles);

        // initialize jScrollPane on the content div of the first item
        setJSP('init');
        initEvents();
    }

    return { init: init };
})();