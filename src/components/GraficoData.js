import './GraficoData.css';
import Chart from "react-apexcharts";
//import { useState } from 'react';


function GraficoData() {  

  const state = {
    options: {
      chart: {
        id: "basic-bar",
        width: "100%",
      },      
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#F44336', '#E91E63', '#9C27B0']
        }
      },
      
      xaxis: {
        categories: [1991, 1992, 1993, 1994]
      }
    },
    series: [
      {
        name: "series-1",
        data: [55, 15, 45,23]
      },
      {
        name: "series-2",
        data: [45, 25, 35, 22]
      },
      {
        name: "series-3",
        data: [35, 55, 35, 52]
      }
    ]
  };

  
 

  return (
    <div className='grafico-data'>
      <Chart
              options={state.options}
              series={state.series}
              type="line"
              height="95%"
            />
       
    </div>
  );
  
}

export default GraficoData;