console.log("You made it to the LandScapePortrait.js!");

let stop = false; //Boolean for testNaN() validation function, see end of file

function javascript () { //Where colsole.log tested file goes

}
//Main Function, necessary lines of code
function main() {
  let firstNumber, secondNumber; //Variables particular to JavsScript Assignment
  //Get the value of the Heighth Input Field, id="testfield1", assign it to a variable
  firstNumber = document.getElementById("textField1").value;
  //Validate by alert or HTML Text in p-tag
  document.getElementById("validityTest1").innerHTML = alert (testNAN (firstNumber) );
}
//
function testNaN (number) {
  if ( isNaN (number) ) { //NaN are not values o REAL Number System
    stop = true;
    return "Type a Real Number"
  } else {
    return "Input Validated"
  }

}
