$(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    function startCountdown(durationInSeconds) {
        let timerElement = document.getElementById('timer');
        let countdown = durationInSeconds;
  
        function updateTimer() {
          const hours = Math.floor(countdown / 3600);
          const minutes = Math.floor((countdown % 3600) / 60);
          const seconds = countdown % 60;
  
          timerElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  
          if (countdown <= 0) {
            clearInterval(timerInterval);
            timerElement.textContent = "00:00:00"; // Optional: Show a specific message when the countdown reaches zero
          } else {
            countdown--;
          }
        }
  
        // Initial call to set up the timer
        updateTimer();
  
        // Update the timer every second
        let timerInterval = setInterval(updateTimer, 1000);
      }
  
      // Start the countdown with a duration of 72 hours (72 * 60 * 60 seconds)
      startCountdown(72 * 60 * 60);
    // const similarElements = document.querySelectorAll('.product');

    // // Calculate the width based on the number of similar elements
    // const containerWidth = document.querySelector('.products').offsetWidth;
    // const calculatedWidth = containerWidth / similarElements.length;
  
    // // Set the width for each similar element
    // similarElements.forEach(element => {
    //   element.style.width = `${calculatedWidth}px`;
    // });
})