import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addShops } from './actions/getShops';
import './App.css';

const mapDispatchToProps = (dispatch) => {
	return ({
		addShops: (shop) => dispatch(addShops(shop)),
	});
};

const mapStateToProps = (state) => ({
	...state,
});

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			input: 'testing',
		};
		this.shopSending = this.shopSending.bind(this)
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
    this.setState({
      input: event.target.value
    });
	}

	shopSending = (event) => {
		event.preventDefault();
		this.props.addShops(this.state.input);
		this.setState({
			input: ''
		})
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
					<input
					type="text"
					onChange={this.handleChange}
					value={this.state.input} />
					<br />
					<button onClick={this.shopSending}> Test a shop redux action </button>
					<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						_cuppa_jo_
					</a>
				</header>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
