const btnPayment = document.getElementById('btn-payment');
const btnBack = document.getElementById('btn-back');
const btnAnnual = document.getElementById('annual');
const btnMonthly = document.getElementById('monthly');
const btnChange = document.getElementById('btn-change');

const cta = document.getElementById('cta');
const popUp = document.getElementById('pop-up');
const planValue = document.getElementById('plan-value');
const totalValue = document.getElementById('total-value');
const fee = document.getElementById('fee');
const planType = document.getElementById('plan-type');
const planPrice = document.getElementById('plan-price');
const dollarSign = '$';
const annualPrice = 59.99;
const monthlyPrice = 66.65;
const feeValue = 1.0;

setCardPlanAndPrice('Annual Plan', dollarSign, annualPrice, '/year');

function setTotalValue(currency, billingCycle, feeCost) {
  totalValue.textContent =
    currency + parseFloat(billingCycle + feeCost).toPrecision(4);
}

function setPlanValue(currency, billingCycle) {
  planValue.textContent = currency + billingCycle;
}

function showPopUpHandler() {
  popUp.classList.remove('slideout-animation');
  cta.classList.add('slidein-animation');
  popUp.style.display = 'flex';

  if (planType.textContent == 'Annual Plan') {
    btnAnnual.checked = true;
    setPlanValue(dollarSign, annualPrice);
    setTotalValue(dollarSign, annualPrice, feeValue);
  } else {
    btnMonthly.checked = true;
    setPlanValue(dollarSign, monthlyPrice);
    setTotalValue(dollarSign, monthlyPrice, feeValue);
    setCardPlanAndPrice('Monthly', dollarSign, monthlyPrice, '/month');
  }
  fee.textContent = dollarSign + parseFloat(feeValue).toPrecision(3);
}

function closePopUpHandler() {
  cta.classList.remove('slidein-animation');
  popUp.classList.add('slideout-animation');

  if (btnAnnual.checked == true) {
    setCardPlanAndPrice('Annual Plan', dollarSign, annualPrice, '/year');
  } else {
    setCardPlanAndPrice('Monthly', dollarSign, monthlyPrice, '/month');
  }
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
