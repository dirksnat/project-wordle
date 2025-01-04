import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import Guesses from '../Guesses';
import GuessInput from '../GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);
	console.log({ guesses });
	
	function handleSubmitGuess(tentativeGuess) {
		setGuesses([...guesses, tentativeGuess]);
	}
	
	return <>
		<Guesses guesses={guesses} answer={answer} />
		<GuessInput handleSubmitGuess={handleSubmitGuess} />
	</>;
}

export default Game;
