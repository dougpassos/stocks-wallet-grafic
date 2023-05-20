import './CardStock.css';

function CardStock(props){
  const data = props.data;

  return (
    <div className='card'>
      <div className='card-alta'>
        <p>Alta: <span>99,99</span></p>

      </div>
      <div className='card-fecha'>
        <p>Close: <span>{data.close}</span></p>
      </div>
      <div className='card-baixa'>
        <p>Baixa: <span>00,00</span></p>
      </div>
      <div className='card-empresa'>
        <p>{data.name}</p><img alt={`logo ${data.name}`}  src={data.logo}></img>
      </div>
    </div>
  );
}

export default CardStock;