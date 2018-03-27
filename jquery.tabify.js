/**
 * Create an anonymous function to avoid library conflicts
 *
 * Example 1:
 *
 *      $("ul.tabify").tabify({"tabElement": "li"});
 *
 * Example 2:
 *
 *      $("ul.tabify").tabify(".tabify li");
 */
(function($) {
    /**
     * Add our plugin to the jQuery.fn object
     */
    $.fn.tabify = function(options) {
        /**
         * Define some default settings
         */
        var defaults = {
            "collectionElement": "ul",
            "tabElement": "li",
            "collectionSelector": ".tabify",
            "tabSelector": ".tabify li",
            "activeClass": "active",
            "inactiveClass": "",
            "trigger": "click"
        };
        /**
         * If the 'options' argument is a string, then a selector
         * was passed instead of an options object. Normalize
         * the selector into the options object.
         */
        if (typeof(options) == "string") {
            options = {"tabSelector": options};
        }
        /**
         * Merge the runtime options with the default settings
         */
        var options = $.extend({}, defaults, options);
        /**
         * Iterate through the collection of elements and
         * return the object to preserve method chaining
         */
        return this.each(function(i) {
            /**
             * Wrap the current element in an instance of jQuery
             */
            var $collection = $(this);

            if (! $collection.hasClass("tabify")) {
                $collection.addClass("tabify");
            }
            /**
             * Do the thing.
             */
            $(options.tabSelector, $collection).on(options.trigger, function(e) {
                e.preventDefault();

                var $tab = $(this);

                $(options.tabElement, $collection).removeClass(options.activeClass);
                $tab.addClass(options.activeClass);
            });
        });
    };
})(jQuery);