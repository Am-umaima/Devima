var SlidItem=1;
ShowQuots(SlidItem)

function Clicked(direction)
{
	ShowQuots(SlidItem+=direction)
	 console.log("direction +1 = "+direction+" + "+SlidItem);
}

function ShowQuots(indeQoute)
{ 
// console.log("indeQoute "+indeQoute);
	var elementshowy ="";
	var Qoute = document.getElementsByClassName("MyQuotes");
	if(indeQoute>Qoute.length)
		{
			SlidItem=1;
		}
		if(indeQoute<1)
		{
			SlidItem=Qoute.length;
		}
	for ( var i = 0; i < Qoute.length; i++) 
	{
		Qoute[i].style.display="none";
	
	}
	Qoute[SlidItem-1].style.display="block";
	// document.getElementById("reult").value=Qoute[SlidItem-1].innerHTML;

}

