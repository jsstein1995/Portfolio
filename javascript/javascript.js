// $(window).on("load", function () {
//     //not working properly
//     $('div').removeClass('hidden');

// });
// // $('#sidebar').hide();
// $(document).scroll(function () {
//     //Show element after user scrolls 200px

//     var y = $(this).scrollTop();
//     if (y > 300) {
//         $('#sidebar').fadeIn();
//     } else {
//         $('#sidebar').fadeOut();
//     }
//     // $('#sidebar').show();
// });

// $(window).scroll(function () {
//     var windowBottom = $(this).scrollTop() + $(this).innerHeight();
//     $(".work").each(function () {
//         /* Check the location of each desired element */
//         var objectBottom = $(this).offset().top + $(this).outerHeight() - 200;

//         /* If the element is completely within bounds of the window, fade it in */
//         if (objectBottom < windowBottom) { //object comes into view (scrolling down)
//             if ($(this).css("opacity") == 0) { $(this).fadeTo(200, 1); }
//         } else { //object goes out of view (scrolling up)
//             if ($(this).css("opacity") == 1) { $(this).fadeTo(100, 0); }
//         }
//     });
// }).scroll(); //invoke scroll-handler on page-load

// // Sliding Hamburger menu function
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animiate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.8s ease forwards ${index / 4 + .5}s`;
                
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });

}

navSlide();

var $animation_elements = $('.animation-element');
var $window = $(window);

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
// EXAMPLE CODE FOR ANIMATED GIF............

// $.ajax({
//     url: queryURL,
//     method: "GET"
// })

//     .then(function (response) {

//         var results = response.data;

//         for (var i = 0; i < results.length; i++) {
//             var gifDiv = $('<div>');
//             var rating = results[i].rating;
//             var title = results[i].title;
//             var r = $('<p>').text("Rating: " + rating);
//             var t = $('<p>').text("Title: " + title);
//             var gif = $('<img>');
//             gif.addClass('gif');

//             gif.attr('data-state', 'still');
//             gif.attr('src', results[i].images.original_still.url);
//             gif.attr('data-still', results[i].images.original_still.url);
//             gif.attr('data-animate', results[i].images.original.url);
//             gif.addClass('img-thumbnail');
//             gif.attr('style', 'width:500px, height:250px');
//             gifDiv.prepend(r);
//             gifDiv.prepend(t);
//             gifDiv.prepend(gif);
//             gifDiv.addClass('col-4');
//             $('#gifs').prepend(gifDiv);
//         }
//     });

// function animateGif() {
//     $('#gifs').on('click', 'img', function () {

//         var state = $(this).attr('data-state');

//         if (state === "still") {
//             $(this).attr("src", $(this).attr("data-animate"));
//             $(this).attr("data-state", "animate");
//         } else {
//             $(this).attr("src", $(this).attr("data-still"));
//             $(this).attr("data-state", "still");
//         }

//     });


// }

// animateGif();