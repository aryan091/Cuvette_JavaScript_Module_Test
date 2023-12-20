const toggleBtn = document.querySelector('.btn');
const toggleDiv = document.getElementById('ruleList');
const cross = document.getElementById('cross');

toggleBtn.addEventListener('click', () => {
    console.log('clicked');
    toggleDiv.classList.remove('hidden');
    cross.classList.remove('hidden');
  });
  
  cross.addEventListener('click', () => {
    toggleDiv.classList.add('hidden');
    cross.classList.add('hidden');
  });