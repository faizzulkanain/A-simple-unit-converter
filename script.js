function convert(){
    const inputValue = document.getElementById('userInput').value; //takes the "userInput" value set by user to be kept in a variable
    const unit = document.getElementById('unit').value;  //takes the value of "unit" that represents either of the 2 choice value it presented in HTML
    const milesToKm = unit === "milesToKm"; //sets the initial unit choice to "miles to km", if true, then it uses the if statement
    let result = 0; //sets the initial value of result to 0
    if (milesToKm === true) {  //sets if we changed the unit "miles to km" is true, then it uses the math for the if statement
      result = inputValue * 1.60934; //changes the value of the result depends on the math
    } else {
      result = inputValue / 1.60934; //changes the value of the result depends on the math
    }
    document.getElementById('resultElement').innerHTML = result; //gets the id for the element and set its html words/number to the result determined by the function
  }

//   Project idea
// add fahrenheit to celsius vice versa converter
// add watt to horsepower vice versa converter
  