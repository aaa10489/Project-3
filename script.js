const startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', function() {
  document.querySelector('.container').style.display = 'none';
  document.getElementById('page2').style.display = 'block';
});


const nextBtn = document.getElementById('next-btn');

nextBtn.addEventListener('click', function() {
  document.getElementById('page2').style.display = 'none';
  document.getElementById('page3').style.display = 'block';
});