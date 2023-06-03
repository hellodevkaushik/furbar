$(".slider-outer-box").slick({
    arrows: false,
    dots: true,
    Infinity: true,
    autoplay: true,
    autoplayspeed: 5000,
    fade: true,
});

// scroll top addclass 

$(window).scroll(function(){
    if ($(window).scrollTop() >= 50) {
        $('.page-header-section').addClass('fixed-header');
        $('nav div').addClass('visible-title');
    }
    else {
        $('.page-header-section').removeClass('fixed-header');
        $('nav div').removeClass('visible-title');
    }
});

$(".new-slider-inner-box").slick({
    dots: false,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 441,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

$(".page-brand-logo-outer-box").slick({
    dots: false,
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: false,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
            }
        },
    ]
});

// back to top

var $backToTop = $(".back-to-top");
$backToTop.hide();

$(window).on('scroll', function() {
  if ($(this).scrollTop() > 700) {
    $backToTop.fadeIn();
  } else {
    $backToTop.fadeOut();
  }
});

$backToTop.on('click', function(e) {
  $("html, body").animate({scrollTop: 0}, 100);
});

$(".best-sale-products-outer-box").slick({
    dots: false,
    arrows: true,
    slidesToScroll: 1,
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 441,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

$(".page-drawing-banner-outer").slick({
    dots: false,
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$(".page-blog-section-bottom").slick({
    dots: false,
    arrows: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

// counter section

if($('#counter').length) {
var counted = 0;
  $(window).scroll(function () {

    var oTop = $("#counter").offset().top-window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
      $(".counter-value").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 1000,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
              //alert('finished');
            },
          }
        );
      });
      counted = 1;
    }
  });
}


// about-page-slider

$(".about-page-slider-inner").slick({
    dots: true,
    arrows: false,
});


// -----JS for Price Range slider-----

// $(function() {
// 	$( "#slider-range" ).slider({
// 	  range: true,
// 	  min: 16,
// 	  max: 500,
// 	  values: [ 130, 250 ],
// 	  slide: function( event, ui ) {
// 		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
// 	  }
// 	});
// 	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
// 	  " - $" + $( "#slider-range" ).slider( "values", 1 ) );
// });

// $(document).ready(function(){
//     $('.header-search').on('click',function(){
//         $('.search-bar-outer').slideToggle();
//     });
// });

// product-details page

$(".product-img-slider-header").slick({
    infinite: false,
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.product-img-slider-bottom-click',
});

$(".product-img-slider-bottom-click").slick({
    infinite: false,
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product-img-slider-header',
    focusOnSelect: true,
});
