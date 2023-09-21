canvas = document.getElementById('myCanvas');



ctx = canvas.getContext("2d");

car1Width = 120;
car1Height = 70;
car1Image = "car1.png";
car1X = 10;
car1Y = 10;

car2Width = 120;
car2Height = 70;
car2Image = "car2.png";
car2X = 10;
car2Y = 100;

backgroundImage = "racing.jpg";

function add() {
	backgroundImgTag = new Image(); 
	backgroundImgTag.onload = uploadBackground; 
	backgroundImgTag.src = backgroundImage;  

	car1ImgTag = new Image(); 
	/*
	
	*/
	car1ImgTag.onload = uploadcar1; 
	
	
	
	car1ImgTag.src = car1Image;   

	car2ImgTag = new Image(); 
	car2ImgTag.onload = uploadcar2; 
	car2ImgTag.src = car2Image;   
}

function uploadBackground() {
	/*
	
	*/
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
	/*
	Corrija os nomes das funções
	*/
	ctx.drawImage(car1ImgTag, car1X, car1Y, car1Width, car1Height);
}
function uploadcar2() {
	/*
	Corrija os nomes das funções
	*/
	ctx.drawImage(car2ImgTag, car2X, car2Y, car2Width, car2Height);
}

''