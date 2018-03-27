/**
 * Create an anonymous function to avoid library conflicts
 */
(function($) {
    /**
     * Add our plugin to the jQuery.fn object
     */
    $.fn.swapClass = function(firstClass, secondClass) {
        /**
         * Iterate through the collection of elements and
         * return the object to preserve method chaining
         */
        return this.each(function(i) {
            /**
             * Wrap the current element in an instance of jQuery
             */
            var $this = $(this);
            /**
             * Do the thing.
             */
            if ($this.hasClass(firstClass)) {
                $this.removeClass(firstClass);
                $this.addClass(secondClass);
            }
            else {
                $this.removeClass(secondClass);
                $this.addClass(firstClass);
            }
        });
    };
})(jQuery);