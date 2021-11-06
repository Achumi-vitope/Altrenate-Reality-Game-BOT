
function check()
{
	var key = "teBzZQJ#$v8SuPDNq!k79XkFm3VfZPL$2KhAYu2Z^v%FhvQ@45jv7X=Zjr!9-7_RVzP4??RVVR3+n@U%htq%#8Mb5wWk^Thw9xW5SWvyB7zafrVUM3nxV9@NL3xwVH^W";
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
