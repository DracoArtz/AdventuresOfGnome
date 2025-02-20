/*----------------------------------------------
This file contains the data used to render the player's sprites
Properties:
	Object: info | information about the sprite file
		String: info.src | The location of the spritesheet
	Object: states | contains the data for each animation state
		Object: [`state name`] | The data used to render the idle state
			Number: fps | The frame rate in which to render the animation
			Boolean: cycle | Whether or not the animation will loop
			Array: frames| Contains objects with geometric data for each frame of animtati.
					Must contain at least one frame object.
					The animation will run for however many frame objects are added to the array
				Object: [index number] | A frame of animation
					Number: width | the actual 1/1 horizontal size of the portion of image file to be rendered
					Number: height | the actual 1/1 vertical size of the portion of image file to be rendered
					Number: startX | the horizontal starting point of the portion of image file to be rendered
					Nunber: startY | the vertical starting point of the portion of image file to be rendered
/*----------------------------------------------*/

var playerData ={
	info:{
		src:`images/gnome.png`
	},
	states:{
		//The idle animation 
    	idle:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:114, height:196, startX:26, startY:0},
				{width:114, height:196, startX:26, startY:202},
				{width:114, height:202, startX:26, startY:399},
				{width:114, height:201, startX:26, startY:601},
				{width:114, height:199, startX:26, startY:805},
				
			]
		},
		//The walwidth:128, height:128,
		walk:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:146, height:195, startX:11, startY:3066},
				{width:146, height:194, startX:18, startY:3268},
				{width:146, height:195, startX:10, startY:3462},
				{width:146, height:194, startX:18, startY:3664}

			]
		},
		//The jump animation 
		jump:
		{
			fps:15,
			cycle:false,
			frames:
			[
				{width:107, height:197, startX:29, startY:1999},
				{width:107, height:197, startX:29, startY:2213},
				{width:107, height:197, startX:29, startY:2428},
				{width:107, height:197, startX:29, startY:2627}
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:89, height:156, startX:55, startY:1031},
				{width:89, height:156, startX:55, startY:1188},
				{width:89, height:156, startX:55, startY:1345},
				{width:89, height:156, startX:55, startY:1502},
				{width:89, height:156, startX:55, startY:1659},
				{width:89, height:156, startX:55, startY:1816}
			]
		},
		//The attack animation 
		attack:
		{
			fps:3,
			cycle:false,
			//width:300,
			frames:
			[
				{width:147, height:189, startX:26, startY:2851}

				
			]
		}
	}
		
}