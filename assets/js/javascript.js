var words = ['method', 'function', 'statement', 'syntax', 'debugger', 'variable', 'javascript', 'argument', 'element', 'semicolon', 'boolean', 'integer', 'operator', 'expression'];
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var playWord = words[Math.floor(Math.random() * words.length)];

console.log(playWord);

var spaces = [];
for (var i = 0; i < playWord.length; i++) {
 	spaces[i] = '_'
}

var word = '<p> ' + spaces.join('') + ' </p>';
document.querySelector('#word').innerHTML = word;

var alphaId = '<p> ' + alphabet.join('') + ' </p>';
document.querySelector('#alphabet').innerHTML = alphaId;

var wrongCounter = 10;
var wrong = '<p>You have ' + wrongCounter + ' wrong guesses.</p>';
document.querySelector('#alertWrong').innerHTML = wrong;

var correctCounter = playWord.length;
var alertRight = '<p>You have ' + correctCounter + ' letters left to guess to finish the word.</p>';
document.querySelector('#alertRight').innerHTML = alertRight;

document.onkeypress = function (event) {

	//if () {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		
		var guess = '<p>You guessed: ' + userGuess + '</p>';
		document.querySelector('#guessed').innerHTML = guess;

		var j = alphabet.indexOf(userGuess);
		if (playWord.indexOf(userGuess) >= 0) {
				alphabet[j]= '<span class="correct">_</span>'
				document.getElementById('nice').style.display = "block";
				var nice = '<p>Nice!</p>';
				document.querySelector('#nice').innerHTML = nice;
				correctCounter = correctCounter - 1;
				if (correctCounter > 1){
					var alertRight = '<p>You have ' + correctCounter + ' letters left to guess to finish the word.</p>';
				} else {
					var alertRight = '<p>You have ' + correctCounter + ' letter left to guess to finish the word. Concentrate!</p>';
				}
				document.querySelector('#alertRight').innerHTML = alertRight;
				document.getElementById('nice').style.display = "none";
			} else {
				alphabet[j]= '<span class="wrong">X</span>'
				wrongCounter = wrongCounter - 1;
				if (wrongCounter > 1){
					var alertWrong = '<p>You have ' + wrongCounter + ' wrong guesses left. Be Careful!</p>';
				} else {
					var alertWrong = '<p>You have ' + wrongCounter + ' wrong guess left. Choose Wisely!</p>';
				}
				document.querySelector('#alertWrong').innerHTML = alertWrong;
				document.getElementById('nice').style.display = "none";
			}

		var alphaId = '<p> ' + alphabet.join('') + ' </p>';
		document.querySelector('#alphabet').innerHTML = alphaId;

		for (var i = 0; i < playWord.length; i++) {
			if (playWord[i] == userGuess) {
				spaces[i] = userGuess;
			}
		}

		var word = '<p> ' + spaces.join('') + ' </p>';
		document.querySelector('#word').innerHTML = word;
	} //else {
		//document.querySelector('#word').innerHTML = word;
	//}
//}

function startAgain() {

}