const startBtn = document.getElementById('start-btn');

startBtn.addEventListener('click', function() {
  document.querySelector('.container').style.display = 'none';
  document.getElementById('page2').style.display = 'block';
});
