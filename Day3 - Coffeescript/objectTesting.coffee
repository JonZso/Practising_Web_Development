csOutput = document.getElementById("csoutput")

Jon = {name: "Jon", age: 27, street: "123 Longtis St"}

csOutput.insertAdjacentHTML('beforeend',
	"Name : #{Jon.name}<br>")

Jon.food = "Cheesy Nachos"

for x,y of Jon
	csOutput.insertAdjacentHTML('beforeend',
		x + " is " + y + "<br>")


class Animal
	name: "No Name"
	height: 0
	weight: 0
	sound: "No Sound"

	@numOfAnimals: 0

	@getNumOfAnimals: () -> #static
		Animal.numOfAnimals

	constructor: (name = "No Name", @height = 0,
		@weight = 0) ->

		@name = name

		Animal.numOfAnimals++

	makeSound: ->
		"Says #{@sound}"

	getInfo: ->
		"#{@name} is #{@height}cm and weighs #{@weight}kg and #{@makeSound()}"


grover = new Animal()

grover.name = "Grover"
grover.height = 60
grover.weight = 35
grover.sound = "woof"


csOutput.insertAdjacentHTML('beforeend',
	"#{grover.getInfo()}<br>")



Animal::isItBig = ->
	if @height >= 45
		"Yes"
	else
		"No"

csOutput.insertAdjacentHTML('beforeend',
	"Is Gover big? #{grover.isItBig()}<br>")

csOutput.insertAdjacentHTML('beforeend',
	"Number of Animals #{Animal.getNumOfAnimals}<br>")





##Inherits

class Dog extends Animal
	sound2: "No Sound"


	constructor: (name = "No Name", height = 0,
		weight = 0) ->
		super(name,height,weight)

	makeSound: ->
		super + " and #{@sound2}"


sparky = new Dog("Sparky", 30, 20)
sparky.sound = "Wooooooof!"
sparky.sound2 = "Growl!"


csOutput.insertAdjacentHTML('beforeend',
	"#{sparky.getInfo()}<br>")
