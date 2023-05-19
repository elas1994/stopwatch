
const timerDivElement = document.querySelector('#timer')

const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')

let startTime = 0
let elapseTime = 0
let timeInterval;



function startTimer(){
  startTime = Date.now() - elapseTime


  timeInterval = setInterval(()=>{
    elapseTime = Date.now() - startTime

    timerDivElement.textContent = formatTime(elapseTime)
  } , 10)

  startBtn.disabled = true
  stopBtn.disabled = false
}

function formatTime(elapseTime){
  const milliSeconds = Math.floor((elapseTime % 1000) / 10);

  const seconds = Math.floor((elapseTime % (1000 * 60)) / 1000);

  const minutes = Math.floor((elapseTime % (1000 * 60 *60)) / (1000 * 60))

  const hours = Math.floor(elapseTime / (1000 * 60 * 60))

  return (
    (hours ? (hours > 9 ? hours : '0' + hours) : '00')
    + ':' +
    (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00')
    + ':' +
    (seconds ? (seconds > 9 ? seconds : '0' + seconds) : '00') + ':' +
    (milliSeconds > 9 ? milliSeconds : '0' + milliSeconds)
  );
}

function stopTimer(){
   clearInterval(timeInterval)
   startBtn.disabled = false
   stopBtn.disabled = true
}

function resetTimer(){
  clearInterval(timeInterval)

  elapseTime = 0
  timerDivElement.textContent = '00:00:00'
  startBtn.disabled = false
  stopBtn.disabled = false
}



startBtn.addEventListener('click' , ()=>{
  startTimer()
})

stopBtn.addEventListener('click' , () =>{
  stopTimer()
})

resetBtn.addEventListener('click' , () =>{
  resetTimer()
})