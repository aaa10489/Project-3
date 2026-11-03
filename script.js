const clickSound = document.getElementById('click-sound');

//start button
const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('mouseenter', function() {
  clickSound.currentTime = 0.10; 
  clickSound.play().catch(error => {
  });
});
startBtn.addEventListener('click', function() {
  clickSound.currentTime = 0.10;
  clickSound.play();
  document.querySelector('.container').style.display = 'none';
  document.getElementById('page2').style.display = 'flex';
});

//page 2
const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('mouseenter', function() {
  clickSound.currentTime = 0.1;
  clickSound.play().catch(() => {});
});
nextBtn.addEventListener('click', function() {
  clickSound.currentTime = 0.1;
  clickSound.play();
  document.getElementById('page2').style.display = 'none';
  document.getElementById('page3').style.display = 'block';
});

//page 3
const nextBtn2 = document.getElementById('next-btn2');
nextBtn2.addEventListener('click', function() {
  document.getElementById('page3').style.display = 'none';
  document.getElementById('page4').style.display = 'flex';
});
