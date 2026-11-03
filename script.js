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



const photos = document.querySelectorAll('.photo-grid img');
// page 4 photo interactions

photos.forEach(function(photo) {
  photo.addEventListener('click', function(event) {
    event.stopPropagation();

    // Close any previously enlarged photo
    photos.forEach(function(p) {
      p.classList.remove('enlarged');
    });

    // Enlarge the selected photo
    photo.classList.add('enlarged');

if (photo.alt === 'Deer') {
  const deerSound = document.getElementById('deer-sound');
  deerSound.currentTime = 0;
  deerSound.play();
}
  });
});

// Click anywhere else to close the enlarged photo
document.addEventListener('click', function() {
  photos.forEach(function(photo) {
    photo.classList.remove('enlarged');
  });
  const deerSound = document.getElementById('deer-sound');
deerSound.pause();
deerSound.currentTime = 0;
});
