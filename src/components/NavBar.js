/* eslint-disable jsx-a11y/anchor-is-valid */
import Menu from './Menu';
import './NavBar.css'

function NavBar() {
  const acoes = ['PETR4','MAG4', 'ABC9', 'xxxx']
  const cripto = ['BTC','LTC', 'DOG', 'xxxx']
  const moedas = ['DOLLAR','PESO', 'ABC9', 'xxxx']
  return (    
      <nav>
        <Menu title='Sockts' itens={acoes}></Menu> 
        <Menu title='Cripto' itens={cripto}></Menu> 
        <Menu title='Moedas' itens={moedas}></Menu>             
      </nav>
  );  
}

export default NavBar;