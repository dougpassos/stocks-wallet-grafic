import './CardStock.css';

function CardStock(props){  
  console.log(props.data);

  return (
    <div className='card'>
      <div className='card-alta'>
        <p>Alta: <span>99,99</span></p>

      </div>
      <div className='card-fecha'>
        <p>Close: <span>00,00</span></p>
      </div>
      <div className='card-baixa'>
        <p>Baixa: <span>00,00</span></p>
      </div>
      <div className='card-empresa'>
        <p>empresa</p><img alt='logo'  src='#'></img>
      </div>
    </div>
  );
}

export default CardStock;