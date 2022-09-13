import { showPopUpHandler } from './popUp.js';

const btnChange = document.getElementById('btn-change');
const btnPayment = document.getElementById('btn-payment');

const planType = document.getElementById('plan-type');
const planPrice = document.getElementById('plan-price');

const dollarSign = '$';
const annualPrice = 59.99;
const monthlyPrice = 66.65;

setCardPlanAndPrice('Annual Plan', dollarSign, annualPrice, '/year');

function setCardPlanAndPrice(plan, currency, costPlan, cycle) {
  planType.textContent = plan;
  planPrice.textContent = currency + costPlan + cycle;
}

function changePlanHandler() {
  if (planType.textContent == 'Annual Plan') {
    setCardPlanAndPrice('Monthly Plan', dollarSign, monthlyPrice, '/month');
  } else {
    setCardPlanAndPrice('Annual Plan', dollarSign, annualPrice, '/year');
  }
}

btnChange.addEventListener('click', changePlanHandler);
btnPayment.addEventListener('click', showPopUpHandler);

//ShowPopUp and ClosePopUp should receive as arguments the data needed to initialize its states

export { planType, annualPrice, dollarSign, monthlyPrice, setCardPlanAndPrice };
