const body = document.getElementById('body');
const colorMode = document.getElementById('color-mode');
const colorModeType = document.getElementById('color-mode-type');

colorModeType.textContent = 'Dark Mode';

function changeColorModeHandler() {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    colorModeType.textContent = 'Dark Mode';
    colorMode.setAttribute('src', 'assets/svg/toggle-right-24-regular.svg');
  } else {
    body.classList.add('dark-mode');
    colorModeType.textContent = 'Light Mode';
    colorMode.setAttribute('src', 'assets/svg/toggle-left-28-filled.svg');
  }
}

colorMode.addEventListener('click', changeColorModeHandler);
