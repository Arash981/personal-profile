// JavaScript
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".mobile-menu-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const videoContainer = document.querySelector('.video-container');
const video = document.getElementById('background-video');

// Delay in milliseconds before starting the video
const delayBeforeStart = 2000; // 2 seconds

// Manually start video playback after a delay
setTimeout(function() {
  videoContainer.style.opacity = '1'; // Make the video container visible
  video.play();
}, delayBeforeStart);

// Add event listener to handle end of video playback
video.addEventListener('ended', function() {
  // Pause the video when it ends
  this.pause();
});