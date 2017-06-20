// $('.particles').particleground({
//     dotColor: '#293f72',
//     lineColor: '#182550',
//     density: 10000
// });
// 

AOS.init({
  duration: 1200,
})

// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(400);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(400);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 400);
});