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
 *
 * Example 3:
 *
 *      $("ul.tabify").tabify(function() {
 *          console.log("Tabify callback triggered.");
 *      });
 */
(function($) {
    /**
     * Add our plugin to the jQuery.fn object
     */
    $.fn.tabify = function() {
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
            "trigger": "click",
            "callback": function() {
                console.log("Tabify callback triggered.");
            }
        };
        var options = {};
        // tabify( /* object */ options, /* string */ "selector", /* function */ callback );
        // tabify( /* object */ options, /* string */ "selector" );
        // tabify( /* object */ options, /* function */ callback );
        // tabify( /* string */ "selector" );
        // tabify( /* function */ callback );
        // tabify( /* object */ options );

        if (arguments.length == 1) {
            if (typeof(arguments[0] == "string" )) {
                options["tabSelector"] = arguments[0];
            }
            else if (typeof(arguments[0]) == "function") {
                options["callback"] = arguments[0];
            }
            else if (typeof(arguments[0]) == "object") {
                options = arguments[0];
            }
        }
        else if (arguments.length == 2) {
            options = arguments[0];
            if (typeof(arguments[1] == "string" )) {
                options["tabSelector"] = arguments[1];
            }
            else if (typeof(arguments[1]) == "function") {
                options["callback"] = arguments[1];
            }
        }
        else if (arguments.length == 3) {
            options                = arguments[0];
            options["tabSelector"] = arguments[1];
            options["callback"]    = arguments[2];
        }
        /**
         * If the 'options' argument is a string, then a selector
         * was passed instead of an options object. Normalize
         * the selector into the options object.
         */
        if (typeof(arguments[0]) == "string") {
            options["tabSelector"] = arguments[0];
        }
        /**
         * If the type of the passed argument is a function,
         * then a callback was passed. Add it to the options object.
         */
        if (typeof(arguments[0]) == "function") {
            options["callback"] = arguments[0];
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

                if (typeof(options.callback) == "function") {
                    $tab.on("click", options.callback);
                }
            });
        });
    };
})(jQuery);