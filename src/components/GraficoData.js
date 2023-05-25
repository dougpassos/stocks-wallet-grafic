import './GraficoData.css';
import Chart from "react-apexcharts";



function GraficoData(props) { 

  
  const date = props.data.historicalDataPrice.map((element) => element.date)
  const close = props.data.historicalDataPrice.map((element) => element.close)
 
 
  console.log(date);

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