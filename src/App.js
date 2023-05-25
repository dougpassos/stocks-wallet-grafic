import { useState, useEffect } from 'react';
import ApiDataContext from './context/ApiDataContext';
import './App.css';
import CardStock from './components/CardStock';
import GraficoData from './components/GraficoData';
import NavBar from './components/NavBar';

 function App() {  
  
 const [ menuOption, setMenuOption ] = useState(['PETR4']);
 const [ dataApi, setDataApi ] = useState([]); 
 

  
 const getApiData = async (ticket) => {
   await fetch(
    `https://brapi.dev/api/quote/${ticket}?range=5d&interval=5d&fundamental=true`
  ).then((response) => response.json()
  ).then((response) => {
    setDataApi(response['results'][0]);
  }
  ).catch((error) => console.error(error));  
};


 useEffect(() => {
   if(menuOption !== null) {
    getApiData(menuOption)    
    
    }
  },[menuOption])

  
    
  return (
    <div className="App">
      <ApiDataContext.Provider value={{menuOption, setMenuOption }}>
        <header className="App-header">
          <NavBar></NavBar>      
        </header>
        <div className='area-cards'>
          <CardStock className='card-stock' data={dataApi}></CardStock>       
        </div>
        <div className='area-grafic'>
          <GraficoData data={dataApi}></GraficoData>
        </div>
      </ApiDataContext.Provider>
    </div>
  );
}

export default App;
