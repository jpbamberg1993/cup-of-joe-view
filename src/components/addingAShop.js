import React, * as react from 'react';
import { connect } from 'react-redux';
import { mockAsyncAddShops } from '../actions/addShops';
import '../App.css';

class AddingAShop extends react.Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);

		this.state = {
			input: 'testing',
		};
		this.shopSending = this.shopSending.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			input: event.target.value,
		});
	}

	shopSending(event) {
		event.preventDefault();
		this.props.mockAsyncAddShops(this.state.input);
		this.setState({
			input: '',
		});
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<code>{JSON.stringify(this.props.shopReducer)}</code>
				<br />
				<input type="text" onChange={this.handleChange} value={this.state.input} />
				<br />
				<button onClick={this.shopSending}> Test a shop redux action </button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	mockAsyncAddShops: (shop) => dispatch(mockAsyncAddShops(shop)),
});

const mapStateToProps = (state) => ({
	...state,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddingAShop);
