
function check()
{
	var key = "ihaveadoubt";
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
