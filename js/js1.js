/**/ 
var typed3 = new Typed('#type', {
    strings: [' imitation jewellery ', 'free skin/Giftcards', 'ORISSA JEWELLERY'],
    typeSpeed:70,
    backSpeed: 60,
    smartBackspace: true, // this is a default
    loop: true
  });
    
/**/ 
          /*start owl craousel*/
          $(document).ready(function(){
            $('.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                autoplay:true,
                autoplayTimeout:1000,
               autoplayHoverPause:true,
               nav:true,
                responsiveClass:true,
                responsive:{
                    0:{
                      items:1, 
                    },
                    600:{
                     items:2, 
                    },
                    1000:{
                        items:3,
                    
                    }
                }
            })
          });
          /*end carousel*/     
              
        