const showClock = () => {
  let m = document.getElementsByClassName("mn")[0];
  let h = document.getElementsByClassName("hr")[0];
  let s = document.getElementsByClassName("ss")[0];

  time = new Date();

  seconds = time.getSeconds();
  minutes = time.getMinutes();
  hours = time.getHours() % 12 || 12;

  //   console.log(seconds, minutes, hours);

  s.style.rotate = `${6 * seconds}deg`;
  m.style.rotate = `${6 * minutes}deg`;
  h.style.rotate = `${30 * hours + minutes / 2}deg`;

  let audio = new Audio("sound.mp3");
  audio.play();
};

setInterval(showClock, 1000);

// showClock();
