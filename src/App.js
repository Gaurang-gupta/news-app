import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Page from './components/Page/Page';

function App() {
  const [clicked, setClicked] = useState("")
  return (
    <div className="bg-gray-100">
      <Navbar clicked={clicked} setClicked={setClicked}/>
      <Page/>
    </div>
  );
}

export default App;
