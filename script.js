const clickSound = document.getElementById('click-sound');

function playSound() {
  clickSound.currentTime = 0.3;
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
  document.getElementById('new-page4').style.display = 'flex';
});

// New Page 4 Next Button
const newPage4Next = document.getElementById('new-page4-next');

newPage4Next.addEventListener('click', function() {
  playSound();
  document.getElementById('new-page4').style.display = 'none';
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

     // Stop all Page 4 sounds before playing another
    ['radio-sound', 'stuck-sound', 'deer-sound', 'exterior-engine-sound'].forEach(function(id) {
      const sound = document.getElementById(id);
      if (sound) {
        sound.pause();
        sound.currentTime = 0;
      }
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

    
    // Car exterior engine sound
    if (photo.alt === 'Car in desert') {
      const exteriorEngineSound = document.getElementById('exterior-engine-sound');
      exteriorEngineSound.currentTime = 0;
      exteriorEngineSound.play();
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

  //stop deer sound
  const deerSound = document.getElementById('deer-sound');
deerSound.pause();
deerSound.currentTime = 0;

// Stop stuck car  sound 
const stuckSound = document.getElementById('stuck-sound');
  stuckSound.pause();
  stuckSound.currentTime = 0;

    // Stop car exterior engine sound
  const exteriorEngineSound = document.getElementById('exterior-engine-sound');
  exteriorEngineSound.pause();
  exteriorEngineSound.currentTime = 0;


  // Stop broken radio sound 
  const brokenRadioSound = document.getElementById('radio-sound');
  brokenRadioSound.pause();
  brokenRadioSound.currentTime = 0;

});



// PAGE 3 - INTERACTIVE DASHBOARD

const hornArea = document.getElementById('horn-area');
const engineArea = document.getElementById('engine-area');
const recordArea = document.getElementById('record-area');
const playArea = document.getElementById('play-area');
const pauseArea = document.getElementById('pause-area');

const hornSound = document.getElementById('honk-sound');
const engineSound = document.getElementById('engine-sound');

// HORN - click steering wheel
hornArea.addEventListener('click', function() {
  hornSound.currentTime = 0;
  hornSound.play().catch(function() {});
});

// ENGINE - click green button
engineArea.addEventListener('click', function() {
  engineSound.currentTime = 0;
  engineSound.play().catch(function() {});
});

 // PAGE 3 RADIO SOUND
const page3Radio = document.getElementById('page3-radio');

// Play radio when clicking the play image
playArea.addEventListener('click', function() {
  page3Radio.play();
});

// Pause radio when clicking the pause image
pauseArea.addEventListener('click', function() {
  page3Radio.pause();
});

// Stop radio when leaving Page 3
nextBtn2.addEventListener('click', function() {
  page3Radio.pause();
  page3Radio.currentTime = 0;

  hornSound.pause();
  hornSound.currentTime = 0;

  engineSound.pause();
  engineSound.currentTime = 0;
});

// Page 2 click to hear the story
const hearBtn = document.getElementById('hear-btn');
const page2Audio = document.getElementById('page2-audio');

hearBtn.addEventListener('click', function() {
  page2Audio.currentTime = 0;
  page2Audio.play();
});

// Stop Page 2 audio when clicking next
document.getElementById('next-btn').addEventListener('click', function() {
  page2Audio.pause();
  page2Audio.currentTime = 0;
});

// new page 4 click to hear the story
const hearBtn4 = document.getElementById('hear-btn4');
const page4Audio = document.getElementById('page4-audio');

hearBtn4.addEventListener('click', function() {
  page4Audio.currentTime = 0;
  page4Audio.play();
});

// Stop audio when leaving the new Page 4
document.getElementById('new-page4-next').addEventListener('click', function() {
  page4Audio.pause();
  page4Audio.currentTime = 0;
});

// Last page click to hear the story
const hearBtn5 = document.getElementById('hear-btn5');
const page5Audio = document.getElementById('page5-audio');

hearBtn5.addEventListener('click', function() {
  page5Audio.currentTime = 0;
  page5Audio.play();
});

// Stop the recording when restarting
document.getElementById('restart-btn').addEventListener('click', function() {
  page5Audio.pause();
  page5Audio.currentTime = 0;
});
