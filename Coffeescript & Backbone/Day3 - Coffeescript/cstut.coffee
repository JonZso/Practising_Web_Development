###
Notes:
	Splat is known as: ... 

###

name = "Jon"

csOutput = document.getElementById("csoutput")

csOutput.innerHTML = "Welcome back #{name} <br>"
name = "Mark"

switch name
  when "Jon" then csOutput.insertAdjacentHTML('beforeend',"You're my creator!<br>")
  when "Mark" then csOutput.insertAdjacentHTML('beforeend',"You're not Jon<br>")
  when "Ken" then csOutput.insertAdjacentHTML('beforeend',"Who are you?<br>")
  when "Joe" then csOutput.insertAdjacentHTML('beforeend',"Uh oh!<br>")
  else csOutput.insertAdjacentHTML('beforeend',"So like that is it.!<br>")



randArray = ["Immersive", false, 3.1562, 101101]

csOutput.insertAdjacentHTML('beforeend',"Last 2: #{randArray[2..3]} <br>")

oneTo10 = [1..10]
tenTo1 = [10..1]
timesTable = [1..10]
combinedArray = oneTo10.concat tenTo1

oneTo10.push tenTo1...

for x in oneTo10
	csOutput.insertAdjacentHTML('beforeend',"#{x} <br>")
	# csOutput.insertAdjacentHTML('beforeend',"#{x.toString()}")

# csOutput.insertAdjacentHTML('beforeend'," <br>")

evensOnly = oneTo10.filter (x) -> x % 2 == 0
csOutput.insertAdjacentHTML('beforeend',"Evens Only : #{evensOnly.toString()}<br>")

csOutput.insertAdjacentHTML('beforeend',"Max Number : #{Math.max oneTo10...}<br>")
csOutput.insertAdjacentHTML('beforeend',"Min Number : #{Math.min oneTo10...}<br>")

sumOfArray = oneTo10.reduce (x,y) -> x+y
csOutput.insertAdjacentHTML('beforeend',"Sum of array: #{sumOfArray} <br>")


peopleArray = [
	{
	name: "Paul"
	age: 42
	},
	{
	name: "Sue"
	age: 24
	}
]
csOutput.insertAdjacentHTML('beforeend',"First Name: #{peopleArray[0].name}<br>")

###
Video: https://www.youtube.com/watch?v=Ku512-Z-Rx4
Note: 7:19
Note: Learning about objects which seems similar to JS/Ruby
	+ Going to learn about loops 
	+ and maybe more object practice.
###

csOutput.insertAdjacentHTML('beforeend',"Looping: <br><br>")
oneTo20 = [1..20]

csOutput.insertAdjacentHTML('beforeend',"Evens: ")
for x in oneTo20 when x%2 is 0
	csOutput.insertAdjacentHTML('beforeend',"#{x} ")


csOutput.insertAdjacentHTML('beforeend',"<br> Odds: ")
for x in oneTo20 when x%2 isnt 0
	csOutput.insertAdjacentHTML('beforeend',"#{x}")	


ListofPeople = [
	"Jon"
	"Kaylan"
	"Ken"
	"Alex"
	"Adam"
	"Chris"
	"Peter"
	"Isaac"
	"Smith"
	"Weir"
]

for user, userIndex in ListofPeople
	csOutput.insertAdjacentHTML('beforeend',
		"<br>Index: " +userIndex + " Name: " + user)