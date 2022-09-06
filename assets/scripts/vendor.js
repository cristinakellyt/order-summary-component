const cta = document.getElementById('cta');
const popUp = document.getElementById('pop-up');
const btnPayment = document.getElementById('btn-payment');
const btnBack = document.getElementById('btn-back');

function showPopUp() {
  popUp.classList.remove('slideout-animation');
  cta.classList.add('slidein-animation');
  popUp.style.display = 'flex';
}

function closePopUp() {
  cta.classList.remove('slidein-animation');
  popUp.classList.add('slideout-animation');

  setTimeout(delayClosePopUp, 320);
}

function delayClosePopUp() {
  popUp.style.display = 'none';
}

btnPayment.addEventListener('click', showPopUp);
btnBack.addEventListener('click', closePopUp);
