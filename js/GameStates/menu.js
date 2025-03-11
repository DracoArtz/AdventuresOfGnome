/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject();
//startButton.img.src="images/mrt.jpg"
startButton.y = 450
startButton.width=200;
startButton.height = 100
startButton.hitBoxWidth=800
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/mrt.jpg"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

var music = document.getElementById("music")

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
			music.volume = .5
			music.play();
			

		}

		//Hover Effect Graffic
		startButton.img.src = "images/button2.png"
		startButton.color = `yellow`
	}
	else
	{
		//Default Button Graphic
		startButton.img.src = "images/button1.png"
		startButton.color = `red`
	}
	
	menuBackground.drawStaticImage();
	startButton.drawStaticImage()
}
	
	
