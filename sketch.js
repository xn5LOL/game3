var player,playerImg,playerC
var jf,jfImg
var hf,hfImg
var back,backImg
var play,playImg,pause,pauseImg
var up 
var down
var PLAY = 1
var END = 0
var gameState = PLAY
var score  = 0

function preload(){
	backImg = loadImage("jungle.jpg")
	playerImg = loadAnimation("a.png","b.png","c.png")
	playerC = loadAnimation("player_collided.png")
	jfImg = loadImage("jf-removebg-preview.png")
	hfImg = loadImage("hf-removebg-preview.png")
	playImg = loadImage("play.png")

}

function setup(){
	createCanvas(windowWidth,windowHeight)

	jfGroup = new Group();
	hfGroup = new Group();

	back = createSprite(windowWidth-750,windowHeight-650,2000,600)
	back.scale = 2
	back.addImage(backImg)
	back.velocityX = -2

	player = createSprite(windowWidth-150,windowHeight-350,50,100)
	//player.shapeColor = "red"
	player.scale = 1.5
	player.addAnimation("img",playerImg)

	player.addAnimation("change",playerC)
	jf = createSprite(windowWidth-850,windowHeight-450,35,35)
	jf.scale = 0.5
	//jf.shapeColor = "brown"
	jf.velocityY = 5
	jf.addImage(jfImg)
	jfGroup.add(jf)

	
	hf = createSprite(windowWidth-850,windowHeight-300,35,35)
	hf.scale = 0.4
	//hf.shapeColor = "green"
	hf.velocityY = 5
	hf.addImage(hfImg)

	play = createSprite(windowWidth-780,windowHeight-600,10,10)
	play.scale = 0.4
	play.addImage(playImg)

	up = createSprite(windowWidth-750,windowHeight-0,2000,10)
	up.visible = false
	
	down = createSprite(windowWidth-750,windowHeight-850,2000,10)
	down.visible = false

}

function draw(){
	
	background("#013C28")

	textSize(20)
	text(score,200,150) 

	if(player.isTouching(hf)){
		score = +10
	}
	
	

	if(gameState === PLAY){
		play.visible = false
	

	
	if(frameCount%90 - 35 === 0){
		jf = createSprite(windowWidth-437,windowHeight-236,35,35)
		jf.scale = 0.4
		//jf.shapeColor = "brown"
		jf.velocityY = 1
		jf.addImage(jfImg)
		jfGroup.add(jf)
		
	}

	if(frameCount%75 - 50 === 0){
		jf = createSprite(windowWidth-843,windowHeight-437,35,35)
		jf.scale = 0.4
		//jf.shapeColor = "brown"
		jf.velocityY = 7
		jf.addImage(jfImg)
		jfGroup.add(jf)
		
	}
	

	if(frameCount%85 - 50 === 0){
		hf = createSprite(windowWidth-478,windowHeight-321,35,35)
		hf.scale = 0.5
		//hf.shapeColor = "green"
		hf.velocityY = 2
		hf.addImage(hfImg)
		hfGroup.add(hf)
	}

	if(frameCount%65 - 35 === 0){
		hf = createSprite(windowWidth-348,windowHeight-548,35,35)
		hf.scale = 0.5
		//hf.shapeColor = "green"
		hf.velocityY = 4
		hf.addImage(hfImg)
		hfGroup.add(hf)
	}

	if(frameCount%65 - 35 === 0){
		hf = createSprite(windowWidth-950,windowHeight-386,35,35)
		hf.scale = 0.5
		//hf.shapeColor = "green"
		hf.velocityY = 5
		hf.addImage(hfImg)
		hfGroup.add(hf)
	}


	if(player.x > 1250 ){
		player.x = 150
	}

	if(back.x < 0 ){
		back.x = 375
	}

	

	if(keyDown("RIGHT_ARROW")){
		player.velocityX = +5
		
	}

	if(keyDown("LEFT_ARROW")){
		player.velocityX = -5
		
	}

	if(keyDown("DOWN_ARROW")){
		player.velocityX = 0
		
	}

	if(player.isTouching(jfGroup)){
		player.velocityX = 0
		jfGroup.setVelocityYEach(0)
		hfGroup.setVelocityYEach(0)
		gameState = END
	}
 
	if(player.isTouching(up)){
		player.velocityX = 0
		jfGroup.setVelocityYEach(0)
		hfGroup.setVelocityYEach(0)
		gameState = END
	}
 
	if(player.isTouching(down)){
		player.velocityX = 0
		jfGroup.setVelocityYEach(0)
		hfGroup.setVelocityYEach(0)
		gameState = END
 }
}
	else if(gameState === END){
		//background(0)
		play.visible = true
		player.changeAnimation("change",playerC)
		jfGroup.setVelocityYEach(0)
		hfGroup.setVelocityYEach(0)
		textSize(75)
		fill(255)
		text("GAME OVER",500,250)
	}
	if(mousePressedOver(play)){
		
		reset();
	}
	

	

	drawSprites();
	
	
   
	}

	function reset(){
		gameState = PLAY
		
	}
