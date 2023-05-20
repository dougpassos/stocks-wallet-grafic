/* eslint-disable array-callback-return */
import './App.css';
import CardStock from './components/CardStock';
import GraficoData from './components/GraficoData';
import NavBar from './components/NavBar';

function App() {  
  const stockData = {
    "stock": "PETR3F",
    "name": "PETROBRAS",
    "close": 29.18,
    "change": -0.06849657,
    "volume": 20544,
    "market_cap": 364644976258,
    "logo": "https://s3-symbol-logo.tradingview.com/brasileiro-petrobras--big.svg",
    "sector": "Energy Minerals"
  } 


  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>      
      </header>
      <CardStock data={stockData}></CardStock>
      <GraficoData></GraficoData>
    </div>
  );
}

export default App;
