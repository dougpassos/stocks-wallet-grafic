/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './Menu.css'

const Menu = (props) => {
  const title = props.title;
  const itens = props.itens;
  return (
        <div className='menu'>
          <button>{title}</button>
          <div className='itens-menu'>
          {itens.map((item) => <a href='#' key={item.toString()}>{item}</a>)}
          </div>
        </div>
  )  
}

export default Menu;