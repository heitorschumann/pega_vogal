import { useState } from "react";
import "./App.css";

function App() {
	const [inputValue, setInputValue] = useState();
	let [countState, setCountState] = useState(0);
	let count = 0;

	function handleChange(e) {
		setInputValue(e.target.value);
	}

	function handleClick(e) {
		e.preventDefault();
		count = 0;
		let subStr = inputValue.split("");
		const vogais = ["a", "e", "i", "o", "u"];

		subStr.forEach((l) => {
			console.log(subStr);
			console.log(l);
			if (vogais.indexOf(l) !== -1) {
				count++;
			}
			console.log(count);
		});

		setCountState(count);
	}

	return (
		<>
			<form className="formuto">
				<input
					type="text"
					className="inputo"
					value={inputValue}
					onChange={handleChange}
				/>
				<button type="submit" onClick={handleClick} className="butto">
					contar vogais
				</button>
			</form>
			<span className="sputo">O número de vogais é: {countState}</span>
		</>
	);
}

export default App;
