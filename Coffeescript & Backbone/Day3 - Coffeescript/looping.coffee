Title = "Jon"

csOutput = document.getElementById("csoutput")

csOutput.innerHTML = "Welcome to:  #{Title} <br>"


i = 0
#Standard While Loop
while (i += 1) <= 10
	csOutput.insertAdjacentHTML('beforeend',
 		"i = #{i}<br>")


monkeys = 10
said = "no more monkeys jumping on the bed."

while monkeys -= 1
	csOutput.insertAdjacentHTML('beforeend',
		"#{monkeys} Jumping on the bed. One fell of and bumped his head.<br>")

	if monkeys == 1
		csOutput.insertAdjacentHTML('beforeend',
			"Mamma called the doctor and the doctor #{said}<br>")


x = 0



# DO WHILE LOOP
loop
	csOutput.insertAdjacentHTML('beforeend',
		"#{++x}<br>")
	break unless x != 5