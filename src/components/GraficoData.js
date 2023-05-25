import './GraficoData.css';
import Chart from "react-apexcharts";



function GraficoData(props) {   
  
  let date = []
  let close =[]
  if (props.data !== undefined && props.data.length !== 0 ) {
    date = props.data.historicalDataPrice.map((element) => element.date);
    close = props.data.historicalDataPrice.map((element) => element.close);    
  }

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
        categories: date
      }
    },
    series: [
      {
        name: "series-1",
        data: close
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