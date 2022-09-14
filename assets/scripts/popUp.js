const btnBackEl = document.getElementById('btn-back');
const btnAnnualEl = document.getElementById('annual');
const btnMonthlyEl = document.getElementById('monthly');

const planValue = document.getElementById('plan-value');
const totalValue = document.getElementById('total-value');

const cta = document.getElementById('cta');
const popUp = document.getElementById('pop-up');

const fee = document.getElementById('fee');

// my global varaibles
let popUpcurrencyType = '';
let popUpAnnualPrice = 0.0;
let popUpMonthlyPrice = 0.0;
let popUpFeeValue = 0.0;
let popUpCloseCardCallback;

function showPopUpHandler(
  currency,
  selectedPlan,
  planFee,
  monthlyPrice,
  annualPrice,
  CloseCardFuncCallBack
) {
  popUpcurrencyType = currency;
  popUpAnnualPrice = annualPrice;
  popUpMonthlyPrice = monthlyPrice;
  popUpFeeValue = planFee;
  popUpCloseCardCallback = CloseCardFuncCallBack;

  popUp.classList.remove('slideout-animation');
  cta.classList.add('slidein-animation');
  popUp.style.display = 'flex';

  if (selectedPlan == 'Annual Plan') {
    btnAnnualEl.checked = true;
    setPlanValue(currency, annualPrice);
    setTotalValue(currency, annualPrice, planFee);
  } else {
    btnMonthlyEl.checked = true;
    setPlanValue(currency, monthlyPrice);
    setTotalValue(currency, monthlyPrice, planFee);
  }

  fee.textContent = currency + parseFloat(planFee).toPrecision(3);
}

function closePopUpHandler() {
  cta.classList.remove('slidein-animation');
  popUp.classList.add('slideout-animation');

  if (btnAnnualEl.checked == true) {
    popUpCloseCardCallback(
      'Annual Plan',
      popUpcurrencyType,
      popUpAnnualPrice,
      '/year'
    );
  } else {
    popUpCloseCardCallback(
      'Monthly Plan',
      popUpcurrencyType,
      popUpMonthlyPrice,
      '/month'
    );
  }
  setTimeout(delayClosePopUp, 320);
}

function showAnnualPriceHandler() {
  setPlanValue(popUpcurrencyType, popUpAnnualPrice);
  setTotalValue(popUpcurrencyType, popUpAnnualPrice, popUpFeeValue);
}

function showMonthlyPriceHandler() {
  setPlanValue(popUpcurrencyType, popUpMonthlyPrice);
  setTotalValue(popUpcurrencyType, popUpMonthlyPrice, popUpFeeValue);
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

btnBackEl.addEventListener('click', closePopUpHandler);
btnAnnualEl.addEventListener('click', showAnnualPriceHandler);
btnMonthlyEl.addEventListener('click', showMonthlyPriceHandler);

export { showPopUpHandler };
