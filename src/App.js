/* eslint-disable array-callback-return */
import './App.css';
import CardStock from './card-stock/CardStock';
import configAxios from './services/stocks-services'
import { useState, useEffect } from 'react';

function App() {
  const [stocks, setStocks] = useState([])   

  useEffect(() =>{
    const getTicketList = async(stockQuery) => {
    try {
      const response = await configAxios.get(`/quote/list?sortBy=close&sortOrder=desc&limit=5&search=${stockQuery}`);
      const data = await response.data
      setStocks(data);
     
      
    } catch (error) {
      console.log(error);
    }}
    getTicketList('petr')
  },[]);
  return (
    <div className="App">
      <header className="App-header">
      {stocks.length === 0 ?  <p>Carregando...</p>:(
        console.log(stocks)

      )
        }
        <CardStock texto={stocks.length}></CardStock>
      </header>
    </div>
  );
}

export default App;
