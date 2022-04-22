import TopNavbar from './components/TopNavbar';
import './App.css';
import React from 'react';
import Banner from './components/Banner';
import Recommends from './components/Recommends';
function App() {
	return (
		<div className="App">
			<TopNavbar />
			<Banner />
			<Recommends />
			<h1>howdy</h1>
		</div>
	);
}

export default App;
