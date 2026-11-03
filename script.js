const clickSound = document.getElementById('click-sound');

//start sound effect
function playSound() {
  clickSound.currentTime = 0;
  clickSound.play().catch(error => {});
}

//Start Button
const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('mouseenter', function() {
  playSound();
});
startBtn.addEventListener('click', function() {
  playSound();
  document.querySelector('.container').style.display = 'none';
  document.getElementById('page2').style.display = 'flex';
});

//Page 2 Next Button
const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', function() {
  playSound();
  document.getElementById('page2').style.display = 'none';
  document.getElementById('page3').style.display = 'block';
});

//Page 3 Next Button
const nextBtn2 = document.getElementById('next-btn2');
nextBtn2.addEventListener('click', function() {
  document.getElementById('page3').style.display = 'none';
  document.getElementById('page4').style.display = 'flex';
});
