import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './styles.css';
import Header from './Header';
import Home from './Home';

function App() {
	return (
		<BrowserRouter>
			<Header>
			</Header>
			<Routes>
				<Route path="/" element={<Home></Home>}>
				</Route>
			</Routes>
		</BrowserRouter>

	);
}
export default App;