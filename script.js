function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function to reveal each word in sequence and then reset
function revealText() {
  const words = document.querySelectorAll('.reveal');
  let delay = 500; // Initial delay of 500ms

  // Reveal words with delay
  words.forEach((word, index) => {
      setTimeout(() => {
          word.style.opacity = 1; // Make the word visible
      }, delay);
      delay += 700; // Increase delay for each word
  });

  // Reset the opacity of the words after the animation completes
  setTimeout(() => {
      words.forEach(word => {
          word.style.opacity = 0; // Hide all words again
      });
  }, delay + 1000); // Reset after all words have been shown
}

// Make the animation repeat every 5 seconds (or adjust timing as needed)
setInterval(revealText, 5000);

// Start the animation when the page loads
window.onload = revealText;

// Carousel
let currentSlideIndex = 0;

function openModal() {
  document.getElementById('thumbnailModal').style.display = 'flex'; // Display modal only when the button is clicked
}

function closeModal() {
  document.getElementById('thumbnailModal').style.display = 'none'; // Close modal when the close button is clicked
}

function changeSlide(n) {
  currentSlideIndex += n;
  showSlide(currentSlideIndex);
}

function showSlide(index) {
  let slides = document.getElementsByClassName('slide');
  if (index >= slides.length) {
    currentSlideIndex = 0;
  }
  if (index < 0) {
    currentSlideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[currentSlideIndex].style.display = 'block';
}

// Close
window.onclick = function(event) {
  let modal = document.getElementById('thumbnailModal');
  if (event.target == modal) {
    closeModal();
  }
}