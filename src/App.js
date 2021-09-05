import GenRandomNumber from './Components/GenRandomNumber';
import CreateNewNumber from './Components/CreateNewNumber';
import {useState} from 'react';
import './App.css';

function App() {
  const randomNumber = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
  }
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1)
  return (
    <div className="App">
    <GenRandomNumber number={number}/>
    <CreateNewNumber clickFunction={randomNumber}/>
    </div>
  );
}

export default App;
