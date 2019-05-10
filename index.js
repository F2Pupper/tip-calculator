function tipCalculation() {
  var billAmount = document.querySelector('#bill-amount').value;
  var numPeople = document.querySelector("#split").value;
  var tipPct = document.querySelector("#tip-pct").value;
  // this will make sure there is no empty inputs
  if (billAmount === "" || billAmount < 0 || tipPct == 0) {
    alert("Please enter the values.");
    return;
  }

  // make sure there is always at least one person
  if (numPeople === "" || numPeople <= 1) {
    numPeople = 1;
  };

  // calculation of the bill with tip
  var total = (billAmount * tipPct) / numPeople;
  //round to 2 decimals
  total = Math.round(total * 100)/ 100;
  total = total.toFixed(2);

  // now to display the tip on the screen
  document.querySelector("#tip").innerHTML = total;
};

// to call the function when you click calculate

document.querySelector("#submitBtn").onclick = function() {
  tipCalculation();

};
