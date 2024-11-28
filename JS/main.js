$(document).ready(function () {
  
    // $('.notice').slick({
    //   slidesToShow: 4,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   autoplaySpeed: 2000,
    //   arrows: true,
    //   dots: false,
    //   pauseOnHover: true,
    //   pauseOnDotsHover: false, 
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 4,
    //         slidesToScroll: 1,
    //         infinite: true,
    //         dots: false
    //       }
    //     },
    //     {
    //       breakpoint: 980,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 1
    //       }
    //     },
    //     {
    //       breakpoint: 767,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     }
    //   ]
    // });
  
    $('.notice').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        pauseOnHover: true,
        pauseOnDotsHover: false,
        prevArrow: '<button class="slick-prev custom-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next custom-next"><i class="fa fa-chevron-right"></i></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 980,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
      
   
  
   
   
  
  
  
  
  });