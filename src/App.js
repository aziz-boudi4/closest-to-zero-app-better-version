import React , {useState, useEffect} from 'react';
import logo from './logo.svg';
import closestToZeroPng from './ClosestToZero.png';
import './App.css';
import { closestToZero } from './ClosestToZero'

function App() {
  const [closestNumToZero, setClosestNumToZero] = useState([])

  // display the result in the tab header
  useEffect(() => {
    document.title = `Closest to Zero: ${closestNumToZero}`;
  });

  // helper function to convert the inserted value into an array
  const convertStringToArray = (str) => {
    // filter out [] in case the user copy and pastes an array
    let withoutBrackets = str.replace(/[\[\]']+/g,'')
    let splitString = withoutBrackets.split(',')
    let stringToArray = splitString.map(x => Number(x))
    return stringToArray
  }

  // handleSubmit of the input
  const handleSubmit = event => {
    event.preventDefault();
    let arrayFromString = convertStringToArray(event.target.closestToZero.value)
    let result = closestToZero(arrayFromString)
    setClosestNumToZero(result)
  };

  return (
    <div className="App">
      <img className="App-logo" src={closestToZeroPng} alt="closestToZeroPng"/>
        <p style={{ lineHeight: 2.5 }}>
          Enter the values in this format <span className="Yellow-bordered-background">1,2,3</span> or just copy and paste an array
        </p>
        <p>
          <span className="Yellow-bordered-background">[1,2,3]</span>
        </p>

        <form className="TheForm" onSubmit={handleSubmit}>
          <input type="text" name="closestToZero" placeholder="Insert your array here!" />
          <button type="submit">Find the closest number to 0</button>
        </form>
        <p>
          V2 The Closest number to Zero is : <span className="Yellow-bordered-background">{closestNumToZero}</span>
        </p>
    </div>
  );
}

export default App;
