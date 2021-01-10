$(document).ready(function(){    
    
    
      /*--------------------STICKY NAVI--------------------*/
      var waypoint = new Waypoint({
          element: document.getElementById('js--section-features'),
          handler: function(direction) {
              if(direction == 'down'){
                //add sticky class
                $('header nav').addClass('sticky') 
              }else {
                //remove sticky class
                $('header nav').removeClass('sticky')
              }
          },
          offset: '60px'
      })
      
      /*--------------------MOBILE NAVI--------------------*/
      var navIsOpen = false
      
      $('.js--mobile-nav-icon').click(function(){  
          var nav = $('.js--main-nav')
          var icon = $('.js--mobile-nav-icon ion-icon')
          nav.slideToggle(200)
          navIsOpen = !navIsOpen
          
          if(navIsOpen){
            $('.js--mobile-nav-icon').empty().append('<ion-icon name="close"></ion-icon>')

          }else{
            $('.js--mobile-nav-icon').empty().append('<ion-icon name="reorder-three-outline"></ion-icon>')
          }

      })
    
     /*--------------------SCROLL ON BUTTONS--------------------*/
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
    })
    
    $('.js--scroll-to-features').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
    })
    
    /*--------------------SCROLL ON BUTTONS--------------------*/
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
    
})