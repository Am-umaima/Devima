function CalculeScore(){
	TenEmpty()
	let score =0;
	// qustion1
	let paris=document.getElementById("Paris").checked;
	let FalseQst1=document.getElementById("FalseQst1");
	if(paris){score+=1;
		FalseQst1.style.visibility="visible";FalseQst1.style.color="green";
		FalseQst1.innerHTML="Correct😄 It is Paris 👏";
	}else{
		FalseQst1.style.visibility="visible";FalseQst1.style.color="red";
		FalseQst1.innerHTML="No😞 The Correct Answer is Paris ✅";
	}
	// qustion2
	let FalseQst2=document.getElementById("FalseQst2");
	let Five=document.getElementById("Five").checked;
	if(Five){score+=1;
		FalseQst2.style.visibility="visible";FalseQst2.style.color="green";
		FalseQst2.innerHTML="Correct😄 It is Five 👏";
	}else{
		FalseQst2.style.visibility="visible";FalseQst2.style.color="red";
		FalseQst2.innerHTML="No😞 The Correct Answer is Five ✅";
	}
	// qustion3
	let Alan=document.getElementById("Alan-Turing").checked;
	let FalseQst3=document.getElementById("FalseQst3");
	if(Alan){score+=1;
		FalseQst3.style.visibility="visible";FalseQst3.style.color="green";
		FalseQst3.innerHTML="Correct😄 It is Alan Turing 👏";
	}else{
		FalseQst3.style.visibility="visible";FalseQst3.style.color="red";
		FalseQst3.innerHTML="No😞 The Correct Answer is Alan Turing ✅";
	}
	// qustion4
	let Jupiter=document.getElementById("Jupiter").checked;
	let FalseQst4=document.getElementById("FalseQst4");
	if(Jupiter){score+=1;
		FalseQst4.style.visibility="visible";FalseQst4.style.color="green";
		FalseQst4.innerHTML="Correct😄 It is Jupiter 👏";
	}else{
		FalseQst4.style.visibility="visible";FalseQst4.style.color="red";
		FalseQst4.innerHTML="No😞 The Correct Answer is Jupiter ✅";
	}
	// qustion5
	let Fe=document.getElementById("Fe").checked;
	let FalseQst5=document.getElementById("FalseQst5");
	if(Fe){score+=1;
		FalseQst5.style.visibility="visible";FalseQst5.style.color="green";
		FalseQst5.innerHTML="Correct😄 It is Fe 👏";
	}else{
		FalseQst5.style.visibility="visible";FalseQst5.style.color="red";
		FalseQst5.innerHTML="No😞 The Correct Answer is Fe ✅";
	}
	// Qustion6
	let Leonardo=document.getElementById("Leonardo").checked;
	let FalseQst6=document.getElementById("FalseQst6");
	FalseQst6.style.visibility="visible"
	FalseQst6.style.color=Leonardo?"green":"red";
	FalseQst6.innerHTML=Leonardo?"Correct😄 It is Leonardo da Vinci 👏":"No😞 The Correct Answer is Leonardo da Vinci ✅";
	score+=Leonardo?1:0;
	// Qustion7
	let Lion=document.getElementById("Lion").checked;
	let FalseQst7=document.getElementById("FalseQst7");
	FalseQst7.style.visibility="visible"
	FalseQst7.style.color=Lion?"green":"red";
	FalseQst7.innerHTML=Lion?"Correct😄 It is Lion 👏":"No😞 The Correct Answer is Lion ✅";
	score+=Lion?1:0;
	// Qustion8
	let Au=document.getElementById("gold").checked;
	let FalseQst8=document.getElementById("FalseQst8");
	FalseQst8.style.visibility="visible"
	FalseQst8.style.color=!Au?"red":"green";
	FalseQst8.innerHTML=!Au?"No😞 The Correct Answer Au ✅":"Correct😄 It is Au 👏";
	score+=Au?1:0;
	// Qustion9
	let Vincent=document.getElementById("Starry").checked;
	let FalseQst9=document.getElementById("FalseQst9");
	FalseQst9.style.visibility="visible"
	FalseQst9.style.color=!Vincent?"red":"green";
	FalseQst9.innerHTML=!Vincent?"No😞 The Correct Answer is Vincent van Gogh ✅":"Correct😄 It is Vincent van Gogh 👏";
	score+=Vincent?1:0;
	// Qustion10
	let Three=document.getElementById("Three").checked;
	let FalseQst10=document.getElementById("FalseQst10");
	FalseQst10.style.visibility="visible"
	FalseQst10.style.color=Three?"green":"red";
	FalseQst10.innerHTML=Three?"Correct😄 It is Three 👏":"No😞 The Correct Answer is Three ✅";
	score+=Three?1:0;

}
function TenEmpty()
{
		console.log("later");
}

