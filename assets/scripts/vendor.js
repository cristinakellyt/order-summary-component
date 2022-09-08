const cta = document.getElementById('cta');
const popUp = document.getElementById('pop-up');
const btnPayment = document.getElementById('btn-payment');
const btnBack = document.getElementById('btn-back');

const btnAnnual = document.getElementById('annual');
const btnMonthly = document.getElementById('monthly');
const planValue = document.getElementById('plan-value');
const totalValue = document.getElementById('total-value');
const fee = document.getElementById('fee');
const btnChange = document.getElementById('btn-change');
const planType = document.getElementById('plan-type');
const planPrice = document.getElementById('plan-price');
const dollarSign = '$';
const annualPrice = 59.99;
const monthlyPrice = 66.65;
const feeValue = 1.0;

setCardPlanAndPrice('Annual Plan', dollarSign, annualPrice, '/year');

function setTotalValue(dollar, billingCycle, feePrice) {
  totalValue.textContent =
    dollar + parseFloat(billingCycle + feePrice).toPrecision(4);
}

function setPlanValue(dollar, billingCycle) {
  planValue.textContent = dollar + billingCycle;
}

function showPopUpHandler() {
  popUp.classList.remove('slideout-animation');
  cta.classList.add('slidein-animation');
  popUp.style.display = 'flex';

  fee.textContent = dollarSign + parseFloat(feeValue).toPrecision(3);
  setPlanValue(dollarSign, annualPrice);
  setTotalValue(dollarSign, annualPrice, feeValue);
}

function closePopUpHandler() {
  cta.classList.remove('slidein-animation');
  popUp.classList.add('slideout-animation');

  setTimeout(delayClosePopUp, 320);
}

function showAnnualPriceHandler() {
  setPlanValue(dollarSign, annualPrice);
  setTotalValue(dollarSign, annualPrice, feeValue);
}

function showMonthlyPriceHandler() {
  setPlanValue(dollarSign, monthlyPrice);
  setTotalValue(dollarSign, monthlyPrice, feeValue);
}

function changePlanHandler() {
  if (planType.textContent == 'Annual Plan') {
    setCardPlanAndPrice('Monthly Plan', dollarSign, monthlyPrice, '/month');
  } else {
    setCardPlanAndPrice('Annual Plan', dollarSign, annualPrice, '/year');
  }
}

function setCardPlanAndPrice(plan, currency, costPlan, time) {
  planType.textContent = plan;
  planPrice.textContent = currency + costPlan + time;
}

function delayClosePopUp() {
  popUp.style.display = 'none';
}

btnPayment.addEventListener('click', showPopUpHandler);
btnBack.addEventListener('click', closePopUpHandler);
btnAnnual.addEventListener('click', showAnnualPriceHandler);
btnMonthly.addEventListener('click', showMonthlyPriceHandler);
btnChange.addEventListener('click', changePlanHandler);

// O plano escolhido na tela principal, deve ser o defaullt da tela proceeed to payment.
//lembre-se que vc tem o poder de fazer o que quiser ons metodso de abrir e fechar o pop-up
