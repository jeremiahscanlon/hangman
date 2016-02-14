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

var alertCounter = 10;
var alert = '<p>You have ' + alertCounter + ' wrong guesses.</p>';
document.querySelector('#alert').innerHTML = alert;

document.onkeypress = function (event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	
	var guess = '<p>You guessed: ' + userGuess + '</p>';
	document.querySelector('#guessed').innerHTML = guess;
	

	var j = alphabet.indexOf(userGuess);
	if (playWord.indexOf(userGuess) >= 0) {
			alphabet[j]= '<span class="correct">_</span>'
			var nice = '<p>Nice!</p>';
			document.querySelector('#nice').innerHTML = nice;
		} else {
			alphabet[j]= '<span class="wrong">X</span>'
			alertCounter = alertCounter - 1;
			var alert = '<p>You have ' + alertCounter + ' wrong guesses left. Be Careful!</p>';
			document.querySelector('#alert').innerHTML = alert;
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

}