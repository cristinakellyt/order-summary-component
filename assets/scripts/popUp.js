import {
  planType,
  annualPrice,
  dollarSign,
  monthlyPrice,
  setCardPlanAndPrice,
} from './prime_plan.js';

const btnBack = document.getElementById('btn-back');
const btnAnnual = document.getElementById('annual');
const btnMonthly = document.getElementById('monthly');

const planValue = document.getElementById('plan-value');
const totalValue = document.getElementById('total-value');

const cta = document.getElementById('cta');
const popUp = document.getElementById('pop-up');

const fee = document.getElementById('fee');
const feeValue = 1.0;

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
    setCardPlanAndPrice('Monthly Plan', dollarSign, monthlyPrice, '/month');
  }
  fee.textContent = dollarSign + parseFloat(feeValue).toPrecision(3);
}

function closePopUpHandler() {
  cta.classList.remove('slidein-animation');
  popUp.classList.add('slideout-animation');

  if (btnAnnual.checked == true) {
    setCardPlanAndPrice('Annual Plan', dollarSign, annualPrice, '/year');
  } else {
    setCardPlanAndPrice('Monthly Plan', dollarSign, monthlyPrice, '/month');
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

function delayClosePopUp() {
  popUp.style.display = 'none';
}

function setPlanValue(currency, billingCycle) {
  planValue.textContent = currency + billingCycle;
}

function setTotalValue(currency, billingCycle, feeCost) {
  totalValue.textContent =
    currency + parseFloat(billingCycle + feeCost).toPrecision(4);
}

btnBack.addEventListener('click', closePopUpHandler);
btnAnnual.addEventListener('click', showAnnualPriceHandler);
btnMonthly.addEventListener('click', showMonthlyPriceHandler);

export { showPopUpHandler };
