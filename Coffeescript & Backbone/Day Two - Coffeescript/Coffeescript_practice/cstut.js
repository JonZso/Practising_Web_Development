// Generated by CoffeeScript 1.11.0
(function() {
  var areYouHappy, csOutput, debt, i, len, longString, name, randomNumber, strArray, x;

  name = "Phil";

  csOutput = document.getElementById("csoutput");

  csOutput.innerHTML = "Hello " + name + " <br>";

  areYouHappy = false;

  debt = 423.24;

  randomNumber = Math.floor(Math.random() * 100) + 1;

  longString = "This is a long string imagine it goes on for while.. I have no idea how long it'll be as i'm writing...";

  if (typeof areYouHappy === 'boolean') {
    csOutput.insertAdjacentHTML('beforeend', 'areYouHappy is a Boolean<br>');
  }

  csOutput.insertAdjacentHTML('beforeend', "5 + 2 = " + (5 + 2) + "<br>");

  csOutput.insertAdjacentHTML('beforeend', "You currently owe " + debt + ". over 12 months you will have to pay: " + ((debt / 12).toFixed(2)) + "<br>");

  csOutput.insertAdjacentHTML('beforeend', "Today your current random number is: " + randomNumber + "<br>");

  csOutput.insertAdjacentHTML('beforeend', "String:<br> " + longString + "<br>Length: " + longString.length + "<br>");

  csOutput.insertAdjacentHTML('beforeend', "Index of 'have' in string : " + (longString.indexOf("have")) + "<br>");

  csOutput.insertAdjacentHTML('beforeend', "Word from index 55: " + (longString.slice(55, 59)) + "<br>");

  csOutput.insertAdjacentHTML('beforeend', "All words from index 55: " + (longString.slice(55)) + "<br>");

  longString = longString.replace("i'm writing", "I am writing stuff!");

  csOutput.insertAdjacentHTML('beforeend', "NEW string:<br> " + longString + "<br>");

  strArray = longString.split(" ");

  for (i = 0, len = strArray.length; i < len; i++) {
    x = strArray[i];
    csOutput.insertAdjacentHTML("beforeend", x + "<br>");
  }

}).call(this);
