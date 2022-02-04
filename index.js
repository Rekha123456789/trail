


var pattern=[];

function bty(){
button=["red","green","blue","yellow"];
				var ran=Math.floor(Math.random()*4);
				
				var chosen=button[ran];
				pattern.push(chosen);
				
				$("#"+chosen).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
				
				
				new Audio(chosen+".mp3").play();
}

