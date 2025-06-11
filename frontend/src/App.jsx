import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './styles.css';
import Header from './Header.jsx';
import Home from './Home.jsx';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/upload" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;