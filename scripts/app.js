/*!
 * Vikasparashar.in Scripts
 * Author: Vikas Parashar
 * Email: hi@vikasparashar.in
 */

(function($) {
  'use strict';

  $(document).ready(function(){
  	  $('a[href^="#"]').on('click', function(event) {

  	      var target = $( $(this).attr('href') );

  	      if( target.length ) {
  	          event.preventDefault();
  	          $('html, body').animate({
  	              scrollTop: target.offset().top - 100
  	          }, 1000);
  	      }

  	  });
  	});
})(jQuery);
