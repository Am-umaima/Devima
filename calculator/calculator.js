function Show(val)
{
	console.log("hello");
    document.getElementById("result").value+=val;

}
function Clean()
{
	 document.getElementById("result").value="";
}

function calculate() {
    let input = document.getElementById("result").value;
    let result = '';
    if (!isNaN(input)) {
        result = eval(input);
    } else {
        // Check if the input is a valid mathematical expression
        let khabiza = /^(\d+(\.\d+)?)(\s*[\+\-\*\/]\s*\d+(\.\d+)?)*$/;
        if (khabiza.test(input)) {
            result = eval(input);
			document.getElementById("result").style.border="none" ;
			document.getElementById("warning").style.visibility  = "none";
        } else {
            result ='';
			document.getElementById("result").style.border="red 3px solid" ;
			document.getElementById("warning").style.visibility  = "visible";
		
        }
    }
    document.getElementById("result").value = result;
}
