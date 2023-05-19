/* eslint-disable array-callback-return */
import './App.css';
import CardStock from './components/CardStock';
import NavBar from './components/NavBar';

function App() {  
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>      
      </header>
      <CardStock texto='Douglas'></CardStock>
    </div>
  );
}

export default App;
