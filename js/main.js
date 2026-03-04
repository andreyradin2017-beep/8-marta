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

    // We'll update the icon based on mute state.
    // Assuming the Figma downloaded 'volume.svg' is just one state,
    // we might need to toggle its opacity or change the SVG if we had a muted version.
    // For now, let's just use CSS opacity to indicate muted/unmuted if we only have one icon.
    if (isMuted) {
      soundIcon.style.opacity = "0.5";
    } else {
      soundIcon.style.opacity = "1";
    }
  });
});
