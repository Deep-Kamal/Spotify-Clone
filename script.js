console.log("Welcome to spotify");

let audioElement = new Audio('song.mp3','Shape of You.mp3');
let myProgressBar = document.getElementById('myProgressBar');
let masterPlay = document.getElementById('masterPlay');

  masterPlay.addEventListener('click',() =>{
  if(audioElement.paused ||audioElement.currentTime <= 0){
      audioElement.play(); 
  }else{
    audioElement.pause();
  }
})

audioElement.addEventListener('timeupdate',()=>{
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
  audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
