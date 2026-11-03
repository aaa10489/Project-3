const startBtn = document.getElementById('start-btn');
const clickSound = document.getElementById('click-sound');

startBtn.addEventListener('mouseenter', function() {
  clickSound.currentTime = 0.5; 
  clickSound.play().catch(error => {
  });
});

startBtn.addEventListener('click', function() {
  clickSound.currentTime = 0.5;
  clickSound.play();
  
  document.querySelector('.container').style.display = 'none';
  document.getElementById('page2').style.display = 'block';
});


const nextBtn = document.getElementById('next-btn');

nextBtn.addEventListener('click', function() {
  document.getElementById('page2').style.display = 'none';
  document.getElementById('page3').style.display = 'block';
});


const nextBtn2 = document.getElementById('next-btn2');

nextBtn2.addEventListener('click', function() {
  document.getElementById('page3').style.display = 'none';
  document.getElementById('page4').style.display = 'flex';
});
