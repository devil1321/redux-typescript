import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from './state/action-creators'
import { State } from './state/reducers'
function App() {

  const { account } = useSelector((state:State) => state)
  const dispatch = useDispatch()
  const { deposit, withdraw, bankrupt } = bindActionCreators(actions,dispatch)

  return (
    <div className="App">
        <h1>Money</h1>
        <h3>{account}</h3>
        <button onClick={()=>{deposit(1000)}}>Deposit</button>
        <button onClick={()=>{withdraw(1000)}}>Withdraw</button>
        <button onClick={()=>{bankrupt(0)}}>Bankrupt</button>
    </div>
  );
}

export default App;
