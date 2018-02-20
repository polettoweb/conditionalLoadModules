/*
 *   Simple toggle script
 *
 *   Toggles 'active' class on the element on click.
 *
 *   Use: apply 'js-toggle' class to element.
 *   To set initial state as open, apply both 'js-toggle' and 'active'
 *   classes on the element.
 *
 *   Can be used with CSS sibling selector to show/hide sections.
 *
 */

var MgResponsive = MgResponsive || {};

MgResponsive.ActiveToggle = (function ($, Modernizr) {
    "use strict";
    return {
        init: function () {
            $('.js-toggle').click(function() {
                var $this = $(this);

                // Prevents accordion items from being open at the same time
                // to remain consistent with the jQuery UI accordions
                if (!$this.hasClass('active')) {
                    $('.js-toggle.active').removeClass('active');
                }

                $this.toggleClass('active');
            });
        }
    }
}(window.jQuery, Modernizr));