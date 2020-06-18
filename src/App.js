import React, { Component } from 'react';
import AddingAShop from './components/addingAShop.js';
import Test from './components/test.js';
import './App.css';

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					{/* <img src="https://www.instagram.com/_cuppa_jo_/" className="App-logo" alt="logo" />  */}
					<p>
						Currently Cleaning up <code>src/App.js</code>
					</p>
					<Test />
					<AddingAShop />
					<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						_cuppa_jo_
					</a>
				</header>
			</div>
		);
	}
}
