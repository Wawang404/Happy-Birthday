  const startTime = 13;
  const endTime = 42;
  const audio = new Audio("music/hbd.mp3");
  audio.muted = false;

  document.body.addEventListener("click", () => {
    audio.currentTime = startTime;
    audio.play();

    audio.addEventListener("timeupdate", () => {
      if (audio.currentTime >= endTime) {
        audio.currentTime = startTime;
        audio.play();
      }
    });
  }, { once: true });

