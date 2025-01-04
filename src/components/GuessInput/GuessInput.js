import React from 'react';

function GuessInput({ gameStatus, handleSubmitGuess } ) {
	const [tentativeGuess, setTentativeGuess] = React.useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		if (tentativeGuess.length !== 5) {
			window.alert('Please enter exactly 5 characters. 💖');
			return;
		}

		handleSubmitGuess(tentativeGuess);
		setTentativeGuess('');
	};

	return (
		<>	
			<form
				className="guess-input-wrapper"
				onSubmit={handleSubmit}
			>
				<label htmlFor="guess-input">Enter guess:</label>
				<input
					id="guess-input"
					type="text"
					value={tentativeGuess}
					onChange={(event) => setTentativeGuess(event.target.value.toUpperCase())}
					required
					minLength={5}
					maxLength={5}
					disabled={gameStatus !== 'playing'}
				/>
			</form>
		</>
	);
}

export default GuessInput;
