// Set the date we're counting down to
var countDownDate = new Date("Feb 20, 2025 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



let lastScrollTop = 0; // Keep track of the last scroll position

window.onscroll = function() {
    const navbar = document.getElementById("navbar");

    // Check if the user is scrolling down or up
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        navbar.classList.add("navbar-hidden"); // Hide navbar
    } else {
        // Scrolling up
        navbar.classList.remove("navbar-hidden"); // Show navbar
    }

    // Add transparency to the navbar when scrolling down more than 50px
    if (currentScroll > 50) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }

    // Update lastScrollTop to current scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
};






// Initialize AOS
AOS.init();






function flipCard(cardElement) {
    const isFlipped = cardElement.style.transform === "rotateY(180deg)";
    cardElement.style.transform = isFlipped ? "rotateY(0deg)" : "rotateY(180deg)";
}



document.addEventListener("contextmenu", function(e) {
    if (e.target.tagName === "IMG") {
        e.preventDefault();
    }
});

