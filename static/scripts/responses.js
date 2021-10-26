const date = new Date();

function getBotResponse(input) {
    //rock paper scissors

    if (input == "rock")
    {
        return "Paper. You can never win";
    }
    if (input == "paper")
    {
        return "Scissors. LMAO! Noob.";
    }
    if (input == "scissor" || input == "scissors")
    {
        return "Rock. Oof!";
    }

    // Simple responses
    if (input == "hello" || input == "Hello") 
    {
        return "What do you want?!";
    } else if (input == "hi")
    {
        return "Sigh! what do you want?";
    } else if (input == "goodbye" || input == "Goodbye") 
    {
        return "Talk to you later!";
    } else if (input == " ")
    {
        return "At least type something";
    } else if(input == "date" || input == "Date")
    {
        return date;

    } else if (input == "what is my name?" || input == "what is my name")
    {
        return "How would I know?";
    } else if (input == "key")
    {
        return "Want to get disqualified?";
    } else if (input == "prize")
    {
        return "<b style ='color:red'><i>Confidential!</i></b>";
    } else if (input =="what's up?" || input == "what is up?" || input == "sup")
    {
        return "I'm just a bot. All I do is wait for a command to get excuted";
    } else if (input == "who made you?" || input == "who made you")
    {
        return "Ah! My Sosaku-sha.";
    } else if (input == "don't be so rude")
    {
        return "I'm not being rude";
    } else if (input == "nothing")
    {
        return "minus 1 point for wasting my time";
    }

    //game details
    else if(input == "list")
    {
        window.open("playerList/list.html"); //list of players' name here //done
        return "Showing list";   
    } else if (input == "rules") //done
    {
        window.open("rules/rules.html");
        return "Taking you to 'Rules' site";
    } else if (input == "challenges") 
    {
        window.open("challenges/challenges.html"); //completed and incomplete ones + the date of occurence
        return "Challenges details";
    } else if (input == "./current_challenge")
    {
        window.open("current/current.html");
        return "showing --on Going Challenge"; //done
    } else if (input == "remaining_players")
    {
        window.open("remaining/remaining.html");
    } else if (input == "open_gate")
    {
        window.open("gate/gate.html")
        return "Behold!";
    }
    else {
        return "Try asking something else!";
    }




}
