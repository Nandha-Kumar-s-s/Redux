import {useSelector,useDispatch} from 'react-redux';




function App() {
  
  // useDispatch() is used for dispatch the action to the reducer() the action is nothing but it is an object
  const dispatch = useDispatch();

  // useSelector() is used for accessing the state 
  const count = useSelector((state) => state.counter.count); 
  const message = useSelector((state) => state.message.mess);

  // here using the dispatch() and passing the value as object. the dispatch() deliver the action to the reducer func
  const increment = () =>{
    dispatch({type:'inc'})
  }
  
  const decrement = () =>{
    dispatch({type:'dec'})
  }

  const showMess = () =>{
    dispatch({type: 'sayhello'})
  }
  return (
    <div className="App">
      <p>counter: {count}  </p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <p>text: {message} </p>
      <button onClick={showMess}>show</button>

    </div>
  );
}

export default App;
