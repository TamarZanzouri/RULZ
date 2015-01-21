var aliveArray=new Array();
var deadArray=new Array();
var dC=0, aC=0;
var smallAddition="?rel=0&start=50&end=70&autoplay=1";
var mediumAddition="?rel=0&start=80&end=95&autoplay=1";
var largeAddition="?rel=0&start=120&end=140&autoplay=1";
var aliveOrDead=0; //did the user choose alive=1 or dead=0


window.onload = function() {

 		isAlive = document.getElementById("live");
		isAlive.addEventListener("click", 
      	function (event) {
           aliveOrDead=1;
		     console.log("alive = 1");
       }, 
       false);
       
       isDead = document.getElementById("dead");
	   isDead.addEventListener("click", 
      	function (event) {
           aliveOrDead=0;
		   console.log("dead = 0");
       }, 
       false); 
       
       sendQuestion = document.getElementById("playVideo");
	   sendQuestion.addEventListener("click", 
      	function (event) {
           event.preventDefault();
           window.location.assign("#playAnswer");
           appendVideo();
           debugger;
		   console.log("Question sent");
       }, 
       false);
	   
	   menuListButton = document.getElementById("menuListButton");
	   menuListButton.addEventListener("click",
	   function (event) {	
	       event.preventDefault();
	       window.history.back();
	   },
	   false);
	   
	   AnotherQuestion = document.getElementById("anotherQuestion");
	   AnotherQuestion.addEventListener("click", 
	   function (event) {
           window.location.assign("#aliveOrdead");
           window.location.reload();
       }, 
       false);
	   
	$.getJSON("includes/jason.json",function(data){

       for (var i in data.Artists) {
			var temp = new Array();
           temp[0]=data.Artists[i].name;
           temp[1]=data.Artists[i].Alive;
           temp[2]=data.Artists[i].youtube;
           temp[3]=data.Artists[i].play;
           temp[4]=data.Artists[i].image;
           console.log(data.Artists[i].name + " " + data.Artists[i].Alive);
           
           if (temp[1]) {
			aliveArray[aC]=temp;	
			aC++;		
			      		
			}
			
			else{
			deadArray[dC]=temp;
			dC++;	
			}
           
       }
	   
	   console.log("After JSON");
      
});

setTimeout( function (){
	window.location="#aliveOrdead";
},3000);

}

function appendVideo() { 
	
	var textArea = document.getElementById("questionText").value;
	console.log(textArea.length);
	
	if(textArea.length<10){
		if (aliveOrDead) {
		var rand = aliveArray[Math.floor(Math.random() * aliveArray.length)];
		console.log(rand);
		tempLink= rand[2] + smallAddition;	
		document.getElementById('videoUrl').src=tempLink;
		console.log(document.getElementById('videoUrl').src);
		}
		else {
		var rand = deadArray[Math.floor(Math.random() * deadArray.length)];
		tempLink= rand[2] + smallAddition;	
		document.getElementById('videoUrl').src=tempLink;
		console.log(document.getElementById('videoUrl').src);
		}
	} 
	
	if(textArea.length>=10 && textArea.length<=15){
		if (aliveOrDead) {
		var rand = aliveArray[Math.floor(Math.random() * aliveArray.length)];
		tempLink= rand[2] + mediumAddition;	
		document.getElementById('videoUrl').src=tempLink;
		console.log(document.getElementById('videoUrl').src);
		}
		else {
		var rand = deadArray[Math.floor(Math.random() * deadArray.length)];
		tempLink= rand[2] + mediumAddition;	
		document.getElementById('videoUrl').src=tempLink;
		console.log(document.getElementById('videoUrl').src);
		}
	}
	 	
	if(textArea.length>15){
		if (aliveOrDead) {
		var rand = aliveArray[Math.floor(Math.random() * aliveArray.length)];
		tempLink= rand[2] + largeAddition;	
		document.getElementById('videoUrl').src=tempLink;
		console.log(document.getElementById('videoUrl').src);
		}
		else {
		var rand = deadArray[Math.floor(Math.random() * deadArray.length)];
		tempLink= rand[2]+ largeAddition;	
		document.getElementById('videoUrl').src=tempLink;
		console.log(document.getElementById('videoUrl').src);
		}
	} 	

}


