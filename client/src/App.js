import { useEffect } from 'react';
import logo from "./logo.svg";

import "./App.css";

function App() {
	useEffect(() => {
		fetch('http://localhost:5000')
			.then(res => res.json())
			.then(d => console.log(d))
	}, [])
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
