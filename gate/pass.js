
function check()
{
	var key = "uQwM%r5Ycnx?%6NQX36t7ZpZjUG8Eh?5!Ff*R6&G$DfM!6n@G5Zh8&3?KSTtspwH^BFN?ZCp3e5k!PN!XhZeHr%4_qSdMT4#kyT@=*AHwDKt#KTLH+^T3prbaY8svj";
	var text = document.getElementById('passText').value;

	if(text == key)
	{
		window.open("submission/submission.html");
	} else if (text == "")
	{
		alert("Key field cannot be empty!");
	}

	else {
		window.open("invalid.html")
	}
}