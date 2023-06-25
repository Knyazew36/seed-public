(function ($) {
  'use strict';

  var parallax = function () {
    if ($().parallax) {
      $('.parallax1').parallax('50%', 0.2);
      $('.parallax2').parallax('50%', 0.4);
      $('.parallax3').parallax('50%', 0.5);
    }
  };

  //   if ($().owlCarousel) {
  //     $('.themesflat-slider').each(function () {
  //       var $this = $(this),
  //         nav = $this.data('nav'),
  //         dots = $this.data('dots'),
  //         auto = $this.data('auto'),
  //         item = $this.data('item'),
  //         item2 = $this.data('item2'),
  //         item3 = $this.data('item3'),
  //         margin = Number($this.data('margin'));

  //       $this.find('.owl-carousel').owlCarousel({
  //         margin: margin,
  //         nav: nav,
  //         navText: [
  //           "<div class='navPre-slider'></div>",
  //           "<div class='navNext-slider'></div>",
  //         ],
  //         dots: dots,
  //         autoplay: auto,
  //         loop: true,
  //         autoplayTimeout: 5000,
  //         responsive: {
  //           0: {
  //             items: item3,
  //           },
  //           600: {
  //             items: item2,
  //           },
  //           1000: {
  //             items: item,
  //           },
  //         },
  //       });
  //     });
  //   }
  // };
  var removePreloader = function () {
    $(window).on('load', function () {
      $('.preloader').css('opacity', 0);
      $('.preloader').css('display', 'none');
      setTimeout(function () {
        $('.preloader').css('display', 'none');
      }, 5000);
    });
  };
  // Dom Ready
  $(function () {
    parallax();
    removePreloader();
  });
})(jQuery);
