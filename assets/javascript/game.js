



var word  ={
	movie: ['FROZEN', 'NEMO', 'SMURF','DORY'],

}

var win = 0;
var totalGuess = 15;
var letterGuessed = [];

var computerChoices = word.movie;
var displayedWord = [];


//function choose a word
	function comptGuess() 
	{
	
		var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    	console.log('computer: ' + computerGuess);
    	return computerGuess;
	}

	var compG = comptGuess();

//function to replace letter at an index of the string
	function setCharAt(str,index,chr) {
	if(index > str.length-1) return str;
	var temp1=str.substr(0,index);
	console.log('temp1log: ' + temp1);
	var temp2=str.substr(index+1);
	console.log('temp2log: '+ temp2);

	return temp1+chr+temp2;

	}	

// display empty spaces
	function displayEmpty(){
		for (var i = 0; i < compG.length; i++) {
			document.getElementById("currentGuessNumber").innerHTML += "_";
		}
	}
	var startEmpty = displayEmpty();
	function showLength(compG) {
		document.getElementById("len").innerHTML =  'LENGTH OF THE WORD : ' + compG.length;
	}
	
	showLength(compG);

// capture user key events
document.onkeyup = function(event) 
{
  var userkey = event.key.toUpperCase();
  console.log("user: "+ userkey);


if (totalGuess>0) {
//WORKING
	if (letterGuessed.includes(userkey))  
	{
	 // display choose another letter
	document.getElementById("message").innerHTML =  'Letter used before.Please choose another letter!';

	}

	//Compare user key with word letters

	else if (compG.includes(userkey))
	{
		
	//Get the letter location & replace the _ with the letter
	 var n = compG.indexOf(userkey);

	 displayedWord = document.getElementById("currentGuessNumber").innerHTML
	 console.log(n);

	 console.log(displayedWord);

	 document.getElementById("currentGuessNumber").innerHTML=setCharAt(displayedWord,n,userkey);
	 displayedWord = document.getElementById("currentGuessNumber").innerHTML;

		//insert word in the position & display
		
		totalGuess--;
		// display totalGuess in Guess Remaining
		letterGuessed.push(userkey);
		console.log(letterGuessed);
		console.log('display word: '+ displayedWord);
		//display letter guess update
		if (displayedWord === compG) {
			win++;

			compG = comptGuess();
			showLength(compG);
			totalGuess = 15;
			letterGuessed = [];
			displayedWord = [];
			
			document.getElementById("currentGuessNumber").innerHTML=displayedWord;
			displayEmpty();
			document.getElementById("message").innerHTML =  'YOU WON! GAME RESTARTED';
		}

	}
	//WORKING
	else
	{
		// display totalGuess in Guess Remaining
		totalGuess--;
		//display letter guess update
		letterGuessed.push(userkey);
		console.log(letterGuessed);

	}

}
else
{
	compG = comptGuess();
	showLength(compG);
	win = 0;
	totalGuess = 15;
	letterGuessed = [];
	displayedWord = [];
	
	document.getElementById("currentGuessNumber").innerHTML=displayedWord;
	displayEmpty();
	document.getElementById("message").innerHTML =  'YOU LOST! GAME RESTARTED';

	// setTimeout(refreshWindow(),5000);
	// function refreshWindow()
	// {window.location.reload();}


}
	

	document.getElementById("wins").innerHTML = 'WINS: ' + win  + '<br>' ;
	document.getElementById("lives").innerHTML = 'NUMBER OF GUESSES REMAINING: ' + totalGuess + "<br>";
	document.getElementById("already").innerHTML =  'LETTERS ALREADY GUESSED: ' + letterGuessed + "<br>";


	


}

