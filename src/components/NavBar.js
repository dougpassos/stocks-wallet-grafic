import Menu from './Menu';
import './NavBar.css'

function NavBar() {
  const acoes = ['PETR4','B3SA3', 'VBBR3']
  /*
  const cripto = ['BTC','LTC', 'DOG']
  const moedas = ['DOLLAR','PESO', 'ABC9']
  */
  return (    
      <nav>
        <Menu title='Stocks' itens={acoes}></Menu>                   
      </nav>
  );  
}

export default NavBar;