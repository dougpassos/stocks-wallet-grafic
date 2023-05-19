import './CardStock.css';

function CardStock(props){
  return (
    <div className='card'>
      {props.texto}
    </div>
  );
}

export default CardStock;