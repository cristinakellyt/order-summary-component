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

function setTotalValue(dollar, billingCycle, feePrice) {
  totalValue.textContent =
    dollar + parseFloat(billingCycle + feePrice).toPrecision(4);
}

function setPlanValue(dollar, billingCycle) {
  planValue.textContent = dollar + billingCycle;
}

function showPopUp() {
  popUp.classList.remove('slideout-animation');
  cta.classList.add('slidein-animation');
  popUp.style.display = 'flex';

  setPlanValue(dollarSign, annualPrice);
  fee.textContent = dollarSign + parseFloat(feeValue).toPrecision(3);
  setTotalValue(dollarSign, annualPrice, feeValue);
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
  setPlanValue(dollarSign, annualPrice);
  setTotalValue(dollarSign, annualPrice, feeValue);
}

function showMonthlyPrice() {
  setPlanValue(dollarSign, monthlyPrice);
  setTotalValue(dollarSign, monthlyPrice, feeValue);
}

btnPayment.addEventListener('click', showPopUp);
btnBack.addEventListener('click', closePopUp);
btnAnnual.addEventListener('click', showAnnualPrice);
btnMonthly.addEventListener('click', showMonthlyPrice);

// setTotalValue() settar o value do totoal value - OK
// setPlanValue() settart o value to Plan price -OK
// Inticializacao deve ser feita chamando as funcoes criadas acima.
// O botao de change do carde initiacal quando clicado vai ficar alternando entre o valor de Anual and montly.
// O plano escolhido na tela principal, deve ser o defaullt da tela proceeed to payment.
//lembre-se que vc tem o poder de fazer o que quiser ons metodso de abrir e fechar o pop-up
