const clickSound = document.getElementById('click-sound');

function playSound() {
  clickSound.currentTime = 0.5;
  clickSound.play().catch(error => {});
}

//Start Button sound when clicked
const startBtn = document.getElementById('start-btn');
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
  playSound();
  document.getElementById('page3').style.display = 'none';
  document.getElementById('page4').style.display = 'flex';
});

//Page 4 Next Button
const nextBtn3 = document.getElementById('next-btn3');
nextBtn3.addEventListener('click', function() {
  playSound();
  document.getElementById('page4').style.display = 'none';
  document.getElementById('page5').style.display = 'flex';
});

//Page 5 Restart Button
const restartBtn = document.getElementById('restart-btn');
restartBtn.addEventListener('click', function() {
  playSound();
  document.getElementById('page5').style.display = 'none';
  document.querySelector('.container').style.display = 'block';
});


// page 4 photo interactions
const photos = document.querySelectorAll('.photo-grid img');

photos.forEach(function(photo) {
  photo.addEventListener('click', function() {
    photo.classList.toggle('enlarged');
  });
});