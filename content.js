

  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });


// Smooth Scrolling
  // Select all links with hashes
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

$("#subscribebutton").click(function(){
  if ($('#email').val().indexOf('@') < 1){
    alert('Please enter a valid e-mail');$('#email').val(''); return false
} else{alert('Thanks for subscribing!'); $('#email').val('');return false}

});


  // if( /(.+)@(.+){2,}\.(.+){2,}/.test(booking_email) ){
  //   // valid email
  // } else { alert("Invalid Email, try again!")
  //   // invalid email
  // }var email = $("#email").val();