Title = "Function Practice"

csOutput = document.getElementById("csoutput")

csOutput.innerHTML = "Welcome to:  #{Title} <br>"

###
Functions:
	similar to ruby they need to be defined first. (top of file / include from seperate file)
###

helloFunc = (name) ->
	return "Hello #{name}"


csOutput.insertAdjacentHTML('beforeend',
	"#{helloFunc("Jon")}<br>")


getRandNum = ->
	return Math.floor(Math.random() * 100) + 1

csOutput.insertAdjacentHTML('beforeend',
	"Ranom Number: #{getRandNum()}<br>")


sumNums = (vars...) ->
	sum = 0
	for x in vars
		sum += x
	return sum

csOutput.insertAdjacentHTML('beforeend',
	"Sum: #{sumNums(1,9,5,2,3,getRandNum())}<br>") #Adding the numbers (20) to the random number to get a total.

personsAge = (age = null) ->
	if age == null
		"Age wasn't specified. default is null."
	else if age <=17
		"You're unable to vote"
	else
		"You're allowed to vote. Woo!"

csOutput.insertAdjacentHTML('beforeend',
	"Jons Vote: #{personsAge()}<br>")


factorial = (x) ->
	return 0 if x < 0
	return 1 if x == 0 or x == 1
	return x * factorial(x-1)

csOutput.insertAdjacentHTML('beforeend',
	"Factorial of 4: #{factorial(5)}" )

###Whats Happening with factorial
4 x 3 x 2 x 1 = 24
is it loops through it takes a number away
if it x = 1/0 return 1
	if it = 0 return 0
###
