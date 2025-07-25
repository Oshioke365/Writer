//nav bar code
$(document).ready(function(){

  //hamburger Toggle
  $('.humbarger').click(function(event){
  $('.menu-list').slideToggle(500);
  event.preventDefault();
  
  $('.menu-list li a').click(function(event) {
      if ($(window).width() < 768) {
        $('.menu-list').slideUp(500);
        event.preventDefault(); 
      }
    });
});

});



const slides = document.getElementById('slides');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;

const updateSlider = () => {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    prev.disabled = currentIndex === 0;
    next.disabled = currentIndex === slides.children.length - 1;
};

prev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

next.addEventListener('click', () => {
    if (currentIndex < slides.children.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

// Initialize slider state
updateSlider();


//TO RECIEVE EMAILS


  document.addEventListener("DOMContentLoaded", function () {
    function sendEmail(event) {
      event.preventDefault(); // Prevent form submission

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const submitButton = document.getElementById("submit-button");

      if (!name || !email || !message) {
        alert("Please fill in all fields before submitting.");
        return;
      }

      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      if (typeof emailjs === "undefined") {
        alert("EmailJS is not loaded. Please try again later.");
        return;
      }

      // Provide user feedback for sending state
      submitButton.textContent = "Sending...";
      submitButton.disabled = true;

      emailjs.init("sDMxzbRHHHcyKQA5U");

      emailjs
        .send("service_11jcmcw", "template_tyfhfx6", {
          name: name,
          email: email,
          message: message,
        })
        .then(
          function () {
            alert("Your message has been sent successfully!");
            document.querySelector(".contact-form").reset(); // Clear form
            submitButton.textContent = "Send"; // Reset button text
            submitButton.disabled = false; // Re-enable the button
          },
          function (error) {
            alert("Oops! Something went wrong. Please try again.");
            console.error("Error details:", error);
            submitButton.textContent = "Send"; // Reset button text
            submitButton.disabled = false; // Re-enable the button
          }
        );
    }

    document
      .querySelector(".contact-form")
      .addEventListener("submit", sendEmail);
  });



