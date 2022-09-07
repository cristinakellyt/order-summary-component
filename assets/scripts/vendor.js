const cta = document.getElementById('cta');
const popUp = document.getElementById('pop-up');
const btnPayment = document.getElementById('btn-payment');
const btnBack = document.getElementById('btn-back');

const btnAnnual = document.getElementById('annual');
const btnMonthly = document.getElementById('monthly');
const planValue = document.getElementById('plan-value');
const totalValue = document.getElementById('total-value');
const fee = document.getElementById('fee');
const dollarSign = '$';
const annualPrice = 59.99;
const monthlyPrice = 66.65;
const feeValue = 1.0;

function showPopUp() {
  popUp.classList.remove('slideout-animation');
  cta.classList.add('slidein-animation');
  popUp.style.display = 'flex';

  planValue.textContent = dollarSign + annualPrice;
  fee.textContent = dollarSign + parseFloat(feeValue).toPrecision(3);
  totalValue.textContent =
    '$' + parseFloat(annualPrice + feeValue).toPrecision(4);
}

function closePopUp() {
  cta.classList.remove('slidein-animation');
  popUp.classList.add('slideout-animation');

  setTimeout(delayClosePopUp, 320);
}

function delayClosePopUp() {
  popUp.style.display = 'none';
}

function showAnnualPrice() {
  planValue.textContent = dollarSign + annualPrice;
  totalValue.textContent =
    '$' + parseFloat(annualPrice + feeValue).toPrecision(4);
}

function showMonthlyPrice() {
  planValue.textContent = dollarSign + monthlyPrice;
  totalValue.textContent =
    '$' + parseFloat(monthlyPrice + feeValue).toPrecision(4);
}

btnPayment.addEventListener('click', showPopUp);
btnBack.addEventListener('click', closePopUp);
btnAnnual.addEventListener('click', showAnnualPrice);
btnMonthly.addEventListener('click', showMonthlyPrice);

// setTotalValue() settar o value do totoal value
// setPlanValue() settart o value to Plan price
// Inticializacao deve ser feita chamando as funcoes criadas acima.
// O botao de change do carde initiacal quando clicado vai ficar alternando entre o valor de Anual and montly.
// O plano escolhido na tela principal, deve ser o defaullt da tela proceeed to payment.
//lembre-se que vc tem o poder de fazer o que quiser ons metodso de abrir e fechar o pop-up
