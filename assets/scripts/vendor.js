// const paymentWindow = document.getElementById('btn-payment');

// function popUpHandler(popUp) {
//   let x = document.getElementById('btn-payment');

//   showStuff();
// }

// paymentWindow.addEventListener('click', popUpHandler);

// function showStuff(id) {
//   document.getElementById(id).style.display = 'none';
// }

function popUp() {
  const paymentWindow = document.getElementById('pop-up');
  if (paymentWindow.style.display === 'none') {
    paymentWindow.style.display = 'flex';
  } else {
    paymentWindow.style.display = 'none';
  }
}

function closeWindow() {
  const closeWindow = document.getElementById('pop-up');
  if (closeWindow.style.display === 'none') {
    closeWindow.style.display = 'flex';
  } else {
    closeWindow.style.display = 'none';
  }
}
