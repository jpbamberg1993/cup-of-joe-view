import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import { getShops } from './actions/getShops'


const mapDispatchToProps = dispatch => ({
  getShops: () => dispatch(getShops())
})

const mapStateToProps = state => ({
  ...state
})

class App extends Component{
  getShops = (event) =>{
    this.props.getShops();
  }


render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <pre>
        {
          JSON.stringify(this.props)
        }
        </pre>

        <button onClick={this.getShops}> Test redux action </button>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


