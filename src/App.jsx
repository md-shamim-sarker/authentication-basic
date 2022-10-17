import React, {useContext} from 'react';
import {AuthContext} from './contexts/UserContext';

const App = () => {
  const {myName, myArray, myObject, myFunction, count, setCount, countHandler} = useContext(AuthContext);
  const [x, y, z] = myArray;
  const {yourName} = myObject;

  return (
    <div>
      <h2>
        Hello {myName} <br />
        x = {x} <br />
        y = {y} <br />
        z = {z} <br />
        Your Name = {yourName} <br />
        {myFunction("Sneha Mony.")}
      </h2>
      <button onClick={() => setCount(count + 1)}>Count Number {count}</button> <br /><br />
      <button onClick={countHandler}>Count Number {count}</button>
    </div>
  );
};

export default App;