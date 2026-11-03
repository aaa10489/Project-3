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

    //deer sound
    if (photo.alt === 'Deer') {
      const deerSound = document.getElementById('deer-sound');
      deerSound.currentTime = 0;
      deerSound.play();
    }

     // Broken radio sound (top-left photo)
    if (photo.alt === 'Car radio') {
      const radioSound = document.getElementById('radio-sound');
      radioSound.currentTime = 0;
      radioSound.play();
    } 
    
    //car stuck sound
    if (photo.alt === 'Car stuck in sand') {
    const stuckSound = document.getElementById('stuck-sound');
    stuckSound.currentTime = 0;
    stuckSound.play();


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

const stuckSound = document.getElementById('stuck-sound');
  stuckSound.pause();
  stuckSound.currentTime = 0;

});


// PAGE 3 INTERACTIVE CAR

const engineBtn = document.getElementById('engine-btn');
const radioBtn = document.getElementById('radio-btn');
const honkBtn = document.getElementById('honk-btn');

const engineSound = document.getElementById('engine-sound');
const radioSound = document.getElementById('radio-sound');
const honkSound = document.getElementById('honk-sound');

const carMessage = document.getElementById('car-message');

// START ENGINE
engineBtn.addEventListener('click', function() {
  playSound();
  engineSound.currentTime = 0;
  engineSound.play();
  carMessage.textContent = 'Engine started...';
});

// PLAY OR STOP RADIO
radioBtn.addEventListener('click', function() {
  playSound();

  if (radioSound.paused) {
    radioSound.play();
    radioBtn.textContent = 'STOP RADIO';
    radioBtn.classList.add('playing');
    carMessage.textContent = 'Radio connected...';
  } else {
    radioSound.pause();
    radioSound.currentTime = 0;
    radioBtn.textContent = 'PLAY RADIO';
    radioBtn.classList.remove('playing');
    carMessage.textContent = 'Radio disconnected...';
  }
});

// HONK
honkBtn.addEventListener('click', function() {
  playSound();
  honkSound.currentTime = 0;
  honkSound.play();
  carMessage.textContent = 'BEEP BEEP!';
});

// STOP MUSIC WHEN CLICKING NEXT
nextBtn2.addEventListener('click', function() {
  radioSound.pause();
  radioSound.currentTime = 0;
  radioBtn.textContent = 'PLAY RADIO';
  radioBtn.classList.remove('playing');
});

// RESET PAGE 3 WHEN RESTARTING
restartBtn.addEventListener('click', function() {
  radioSound.pause();
  radioSound.currentTime = 0;
  radioBtn.textContent = 'PLAY RADIO';
  radioBtn.classList.remove('playing');
  carMessage.textContent = 'Click to interact with the car';
});


