import React, { Component } from 'react';
import { connect } from 'react-redux' 
import './App.css';
import * as userActions from '../src/actions/user'
class App extends Component {
  render() {
    console.log(this.props);

    const { user } = this.props;

    return (
      <div className="App">
      <header className="App-header">
        redux-test
        <div>
          {user.isLogin?'欢迎你':'未登录'}
        </div>
        <div>{
          user.loading?'正在加载中...':''
        }</div>
        <button onClick={()=> this.props.dispatch(userActions.login({account: 'test', password: '123'}))}>登录</button>

      </header>
    </div>
    )
  }
}

const mapState = state => ({
  user: state.user,
})
export default connect(mapState) (App);
