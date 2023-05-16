//import logo from './logo.svg';
import './App.css';
import CardStock from './card-stock/CardStock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CardStock texto='Teste 1'></CardStock>
        <CardStock texto='Teste 2'></CardStock>             
      </header>
    </div>
  );
}

export default App;
