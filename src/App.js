import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increment,decerement} from "./actions";
import './assets/css/style.scss'
function App() {
  const Counter = useSelector( state => state.counter);
  const islogged = useSelector( state => state.islogged);
  const Dispatch= useDispatch();
  return (
    <>
      <div className="main">
      <h1 className="headign">countr: {Counter}</h1>
      <button className="btn" onClick={() => Dispatch(increment())}>increment +</button>
      <button className="btn"  onClick={() => Dispatch(decerement())}>decerement -</button>
      </div>
          {islogged ?<h3>is logged ture</h3> : ''}
    </>
  );
}

export default App;
