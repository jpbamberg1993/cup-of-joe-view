import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getShops } from './actions/getShops';
import './App.css';

const mapDispatchToProps = (dispatch) => ({
	getShops: () => dispatch(getShops()),
});

const mapStateToProps = (state) => ({
	...state,
});

class App extends Component {
	getShops = (event) => {
		this.props.getShops();
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					{/* <img src="https://www.instagram.com/_cuppa_jo_/" className="App-logo" alt="logo" /> */}
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>

					<pre>{JSON.stringify(this.props)}</pre>

					<button onClick={this.getShops}> Test redux action </button>
					<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						_cuppa_jo_
					</a>
				</header>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
