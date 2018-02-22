myAudio = new Audio("http://stream.basso.fi:8000/stream");

myAudio.volume = 0.5;


function audioRangeChange(event) {
  myAudio.volume = event.target.value;
}
