import { useState, useEffect } from 'react';
import ApiDataContext from './context/ApiDataContext';
import './App.css';
import CardStock from './components/CardStock';
import GraficoData from './components/GraficoData';
import NavBar from './components/NavBar';
import getDataTicket from './services/stocks-services';

 function App() {  
  
 const [menuOption, setMenuOption ] = useState(['PETR4']);
 const [dataApi, setDataApi ] = useState([])
 
 useEffect(() => {
   if(menuOption !== null) {      
      const data = getDataTicket(menuOption);         
      setDataApi(data);
    }
  },[menuOption])
  
  console.log(dataApi);
  
  return (
    <div className="App">
      <ApiDataContext.Provider value={{menuOption, setMenuOption}}>
        <header className="App-header">
          <NavBar></NavBar>      
        </header>
        <div className='area-cards'>
          <CardStock className='card-stock' data={dataApi}></CardStock>       
        </div>
        <div className='area-grafic'>
          <GraficoData></GraficoData>
        </div>
      </ApiDataContext.Provider>
    </div>
  );
}

export default App;
