document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("bg-video");
  const soundToggle = document.getElementById("sound-toggle");
  const soundIcon = document.getElementById("sound-icon");

  // Make sure the video is muted initially (browser autoplay policy)
  video.muted = true;
  let isMuted = true;

  // Toggle sound on click
  soundToggle.addEventListener("click", () => {
    isMuted = !isMuted;
    video.muted = isMuted;

    if (isMuted) {
      soundIcon.style.opacity = "0.5";
    } else {
      soundIcon.style.opacity = "1";
    }
  });

  // Parallax Effect
  const parallaxElements = document.querySelectorAll(".js-parallax");
  let ticking = false;

  function applyParallax() {
    const scrollY = window.scrollY;
    parallaxElements.forEach((el) => {
      const speed = parseFloat(el.getAttribute("data-speed")) || 0;
      const yOffset = scrollY * speed;
      // Using CSS custom property avoids conflicts with CSS animations
      el.style.setProperty("--parallax-y", `${yOffset}px`);
    });
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(applyParallax);
      ticking = true;
    }
  });

  // Apply parallax immediately on load in case the page is already scrolled
  applyParallax();
});
