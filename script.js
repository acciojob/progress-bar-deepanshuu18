//your JS code here. If required.
let currentIndex = 1;
const circles = document.querySelectorAll('.circle');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

function updateProgress() {
  // Reset the circles' active class
  circles.forEach(circle => circle.classList.remove('active'));

  // Add active class to the current circle
  for (let i = 0; i < currentIndex; i++) {
    circles[i].classList.add('active');
  }

  // Disable previous button if we're at the first circle
  if (currentIndex === 1) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  // Disable next button if we're at the last circle
  if (currentIndex === circles.length) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

// Set event listener for Next button
nextButton.addEventListener('click', () => {
  if (currentIndex < circles.length) {
    currentIndex++;
    updateProgress();
  }
});

// Set event listener for Previous button
prevButton.addEventListener('click', () => {
  if (currentIndex > 1) {
    currentIndex--;
    updateProgress();
  }
});

// Initialize the progress bar
updateProgress();
