			window.addEventListener("load", function () {
            // Uncheck all radio buttons when the page loads
            var radioButtons = document.querySelectorAll('input[type="radio"]');
            radioButtons.forEach(function (radioButton) {
                radioButton.checked = false;
            });
        });
function Submit()
{
	var fill=0;
	var Result = "Those Infos are Required : ";
	// Name
	var Name = document.getElementById("name").value;
	if(Name=="")
	{
		Result=Result+"\n - Name";
		fill=fill+1;
	}
	// Email
	var Email = document.getElementById("Email").value;
	if(Email=="")
	{
		Result=Result+"\n - Email";
		fill=fill+1;
	}
	// Gender
	let Gender;
	let Male = document.getElementById("male");
	let Female = document.getElementById("famale");
		if(Male.checked===false && Female.checked===false)
			{
				Result=Result+"\n - Gender";
				fill=fill+1;
			}
			else
			{
				if (Male.checked === true) 
				{
					Gender = "Male";	
						
				} 
				else {
					Gender = "Female";
				}
		
	}
	// Age
	var Age = document.getElementById("Age").value;
	if(Age=='')
	{
		Result=Result+"\n - Age";
		fill=fill+1;
	}
	// Role
	let Role=document.getElementById('occupation').value;
	if(Role=="Chose here")
	{
		Result=Result+"\n - Role";
		fill=fill+1;
	}
	
	
	if(fill!==0)
	{
		alert(Result);
		
	}
	else{
		document.getElementById("maintable").style.display = "none";
		document.getElementById("infotab").style.display = "table";
		
		document.getElementById("tdname").innerHTML=Name;
		document.getElementById("tdgender").innerHTML=Gender;
		document.getElementById("tdemail").innerHTML=Email;
		document.getElementById("tdage").innerHTML=Age;
		document.getElementById("tdrole").innerHTML=Role;
		
		}
	console.log(fill);
	
}
function maleclicked()
{
	document.getElementById("famale").checked=false;
}
function famaleclicked()
{
	document.getElementById("male").checked=false;
}
function Changeall()
{
	console.log("zolikha");
	document.getElementById("maintable").style.display = "none";
	document.getElementById("infotab").style.display = "table";
	document.getElementById("tdname").innerHTML="helloworld"
}