window.onload = () => {
  const actor = document.querySelector('.actor');
  const stepWidth = 20;
  let step = 0;

  const startBtn = document.querySelector('#startBtn');

  startBtn.addEventListener('click', () => {
    step += 1;
    if (step > 3) step = 0;
    setTimeout(() => actor.style.marginLeft = `${stepWidth * step}vw`, 3);
  });


};
