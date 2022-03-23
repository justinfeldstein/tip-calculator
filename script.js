function calcTip(){
/* --------------------------------Step 1: grab the input values------------------------------------------------------ */
let tipValue = document.getElementById('tipForm').value  //sets a variable for the tip Amount selector to the VALUE of the #tipForm selector
let billValue = document.getElementById('billInput').value  //sets a variable for the bill amount selector using the VALUE of the #billInput selector


/* ---------------------------------------Step 2: turn strings into numbers, use parseFloat() method to do this.-----------  IE: let vairable = parseFloat(stringVariable)----------------------------- */
let tipAmount = parseFloat(tipValue);  // sets a variable for the Tip Amount that is a number
let billAmount = parseFloat(billValue);   // sets a variable for the Bill Amount that is a number

/* --------------------------------Step 3: grab the elements---------------------------------------------------------- */
let bill = document.getElementById('bill-p');  // sets a var to the ID of 'bill-p'
let tip = document.getElementById('tip-p'); // sets a var to the ID of 'tip-p'
let total = document.getElementById('total-p');  // sets a var to the ID of 'total-p'

/* --------------------------------Step 4: Place your calculations here----------------------------------------------- */
let totalTip = tipAmount * billAmount;  // calulate total tip (tip % * bill) and store it in the a new variable
let totalValue = totalTip + billAmount;  // calcualte total bill (totalTip + billAmount) and store it in a new variable


/* --------------------------------Step 5: Append your HTML content with the new information-----**use .fixed(2) to display the value with 2 decimal places.-------------------- */
total.innerHTML = "$" + totalValue;  // change the innerHTML of the tip var from step 3 to the total tip from step 4
tip.innerHTML = "$" + totalTip;  // change the innterHTML of the bill var from step 3 to the total bill var from step 2
bill.innerHTML = "$" + billAmount;  // change the innerHTML of the total var from step 3 to the total bill var from step 4



}
