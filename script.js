const showClock = () => {
  let minute = document.getElementsByClassName("mn")[0];
  let hour = document.getElementsByClassName("hr")[0];
  let second = document.getElementsByClassName("ss")[0];

  time = new Date();

  seconds = time.getSeconds();
  minutes = time.getMinutes();
  hours = time.getHours() % 12 || 12;

  second.style.rotate = `${6 * seconds}deg`;
  minute.style.rotate = `${6 * minutes}deg`;
  hour.style.rotate = `${30 * hours + minutes / 2}deg`;

  let audio = new Audio("sound.mp3");
  audio.play();
};

setInterval(showClock, 1000);
