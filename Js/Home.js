$(document).ready(function(){
  $('#slider-container').slick({
    lazyLoad: 'ondemand', 
    dots: true,
    infinite: true,
    speed: 3000,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: false,
    nextArrow: '<button type="button" class="slick-next"><svg fill="#000000" height="16px" width="16px" viewBox="0 0 512 512" stroke="#000000" stroke-width="20"><path d="M388.418,240.923L153.751,6.256c-8.341-8.341-21.824-8.341-30.165,0s-8.341,21.824,0,30.165L343.17,256.005 L123.586,475.589c-8.341,8.341-8.341,21.824,0,30.165c4.16,4.16,9.621,6.251,15.083,6.251c5.461,0,10.923-2.091,15.083-6.251 l234.667-234.667C396.759,262.747,396.759,249.264,388.418,240.923z"/></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg fill="#000000" height="16px" width="16px" viewBox="0 0 512 512" stroke="#000000" stroke-width="20"><path d="M388.419,475.59L168.834,256.005L388.418,36.421c8.341-8.341,8.341-21.824,0-30.165s-21.824-8.341-30.165,0 L123.586,240.923c-8.341,8.341-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251 c5.461,0,10.923-2.091,15.083-6.251C396.76,497.414,396.76,483.931,388.419,475.59z"/></svg></button>',
  });
});


$(document).ready(function(){
  $('.lazy-slider').slick({
      lazyLoad: 'ondemand', 
      infinite: false,       
      slidesToShow: 4,      
      slidesToScroll: 1,    
      dots: false,          
      arrows: true,        
      nextArrow: '<button type="button" class="slick-next"><svg fill="#000000" height="16px" width="16px" viewBox="0 0 512 512" stroke="#000000" stroke-width="20"><path d="M388.418,240.923L153.751,6.256c-8.341-8.341-21.824-8.341-30.165,0s-8.341,21.824,0,30.165L343.17,256.005 L123.586,475.589c-8.341,8.341-8.341,21.824,0,30.165c4.16,4.16,9.621,6.251,15.083,6.251c5.461,0,10.923-2.091,15.083-6.251 l234.667-234.667C396.759,262.747,396.759,249.264,388.418,240.923z"/></svg></button>',
      prevArrow: '<button type="button" class="slick-prev"><svg fill="#000000" height="16px" width="16px" viewBox="0 0 512 512" stroke="#000000" stroke-width="20"><path d="M388.419,475.59L168.834,256.005L388.418,36.421c8.341-8.341,8.341-21.824,0-30.165s-21.824-8.341-30.165,0 L123.586,240.923c-8.341,8.341-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251 c5.461,0,10.923-2.091,15.083-6.251C396.76,497.414,396.76,483.931,388.419,475.59z"/></svg></button>',
      // responsive: [
      //     {
      //         breakpoint: 768, // For smaller screens, adjust slidesToShow
      //         settings: {
      //             slidesToShow: 2
      //         }
      //     },
      //     {
      //         breakpoint: 480, // For mobile screens
      //         settings: {
      //             slidesToShow: 1
      //         }
      //     }
      // ]
  });
});

