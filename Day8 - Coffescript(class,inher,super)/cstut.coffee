name = "Classes, Inheritance and Super."

csOutput = document.getElementById("csoutput")



csOutput.insertAdjacentHTML('beforeend',
	"Welcome to #{name}")



class Animal
  constructor: (@name, @food) ->

 

  move: (noise) ->
    alert @name + " Makes noise {super: #{noise}} and likes to eat   >>>"+ @food

class Snake extends Animal
  move: ->
    # alert "Slithering..."
    super "Sss"

class Horse extends Animal
  move: ->
    # alert "Galloping..."
    super "Nehh"

   sing: ->
   	alert "woohooo!"
    

sam = new Snake "Sammy the Python"
tom = new Horse "Tommy the Palomino", "breadsticks"

sam.move()
tom.move()
tom.sing()

