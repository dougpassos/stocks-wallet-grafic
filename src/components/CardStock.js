import './CardStock.css';

function CardStock(props){  

  return (
    <div className='card'>
      <div className='card-alta'>
        <p>Alta: <span>{props.data.regularMarketDayHigh}</span></p>

      </div>
      <div className='card-fecha'>
        <p>Close: <span>{props.data.regularMarketPreviousClose}</span></p>
      </div>
      <div className='card-baixa'>
        <p>Baixa: <span>{props.data.regularMarketDayLow}</span></p>
      </div>
      <div className='card-empresa'>
        <p>{props.data.symbol}</p><img alt='logo'  src={props.data.logourl}></img>
      </div>
    </div>
  );
}

export default CardStock;