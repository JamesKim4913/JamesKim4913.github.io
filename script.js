$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Software Developer", "C# Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["C# Developer", "Software Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    // owl carousel script
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
    });       


    // Attach a submit event handler to the contact form
    $("#contact-form").submit(function(event) { 
        // Prevent the default form submission
        event.preventDefault();

        // Get the form data
        var formData = $(this).serialize();

        // Send an Ajax request to the server
        $.ajax({
          url: "http://jamesoft.kr/band/autowrite_band_portfolio.php", // Replace with the URL to your server-side processing script
          type: "POST",
          data: formData,
          success: function(response) {
            // Handle the response from the server
            if (response.success) {
              // Message sent successfully
              alert("Message sent!");
              // Clear the form fields
              $("#contact-form")[0].reset();
            } else {
              // Error occurred while sending the message
              // alert("Error: " + response.message);
            }
          },
          error: function() {
            // Error occurred during the Ajax request
            // alert("Error: Unable to send the message.");
          }
          
        });
    });


});