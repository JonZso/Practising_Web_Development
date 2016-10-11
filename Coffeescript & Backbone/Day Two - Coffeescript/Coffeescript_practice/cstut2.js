// Generated by CoffeeScript 1.11.0
(function() {
  var age, csOutput, favourite_game, favourite_snack, name, votingAge;

  name = "Jon";

  age = 29;

  csOutput = document.getElementById("csoutput");

  csOutput.innerHTML = "Hello " + name + " <br>";

  if (age >= 18) {
    csOutput.insertAdjacentHTML('beforeend', "You're older enough to do stuff that required the age of 18+<br>");
  } else if (age >= 16) {
    csOutput.insertAdjacentHTML('beforeend', "You must be 16 or older.<br>");
  } else {
    csOutput.insertAdjacentHTML('beforeend', "You'll be older one day..<br>");
  }

  if (!(age < 30)) {
    csOutput.insertAdjacentHTML('beforeend', "You're getting on a bit<br>");
  } else {
    csOutput.insertAdjacentHTML('beforeend', "You've got plenty of time..<br>");
  }

  votingAge = age > 18 ? true : false;

  csOutput.insertAdjacentHTML('beforeend', "Can Vote: " + votingAge + "<br>");

  name = "Jon Smiths";

  age = 27;

  favourite_game = "Deadspace";

  favourite_snack = null;

  csOutput.insertAdjacentHTML('beforeend', name + " is " + age + " and likes to play " + favourite_game + " his favourite snack is: " + (favourite_snack != null ? favourite_snack : "Oh.. he hasn't said.."));

}).call(this);
