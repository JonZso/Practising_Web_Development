name = "Classes, Inheritance and Super."

csOutput = document.getElementById("csoutput")



csOutput.insertAdjacentHTML('beforeend',
	"Welcome to #{name}")



class Animal
  constructor: (@name, @food) ->
 

  move: (animal,noise) ->
    # alert @name + " Makes noise {super: #{noise}} and likes to eat   >>>"+ @food
    alert "#{@name} is a #{animal} and they say: \"#{noise}\" they're favourite food is: #{@food}"

class Snake extends Animal
  move: ->
    # alert "Slithering..."
    super "Snake","ssssss"

class Horse extends Animal
  move: ->
    # alert "Galloping..."
    super "Horse","Neygh!"
   wish: ->
   	alert "{@name} wished for more #{@food}"
    

sam = new Snake "Sammy","RubyGems"
tom = new Horse "Tommy","Javascript"

sam.move()
tom.move()
tom.wish()

