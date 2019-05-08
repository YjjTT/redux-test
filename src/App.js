import React, { Component } from 'react';
import { connect } from 'react-redux' 
import './App.css';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
      <header className="App-header">
        redux-test
      </header>
    </div>
    )
  }
}

const mapState = state => ({
  state,
})
export default connect(mapState) (App);
