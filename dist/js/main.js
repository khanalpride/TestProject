/* ==========================================================================

    Project: Test Proj
    Author: XHTMLized
    Last updated: Thu Nov 26 2015 18:17:20

   ========================================================================== */

'use strict';


var TestProj = {

  /**
   * Init function
   */
  init: function() {
    TestProj.galleryFn();
  },

  /**
   * Example function
   */
  galleryFn: function() {
    var galleryImg = jQuery('.article-block').find('.img');
    galleryImg.last().addClass('last-el');
    galleryImg.colorbox({
      loop: false,
      rel: 'group01',
      width: 300,
      height: 300,
      closeButton: false
    });
    galleryImg.first().click();
  }

};

jQuery(document).on('cbox_complete', function() {
  var colorboxTime = setTimeout(jQuery.colorbox.next, 2000);
  if (jQuery.colorbox.element().hasClass('last-el')) {
    clearTimeout(colorboxTime);
    setTimeout(function() {
      jQuery.colorbox.close()
    }, 2000);
  }
});

document.addEventListener('DOMContentLoaded', function() {
  TestProj.init();
});
