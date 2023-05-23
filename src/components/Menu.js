import ApiDataContext from '../context/ApiDataContext'
import { useContext } from 'react';
import './Menu.css'

const Menu = (props) => {
  const title = props.title;
  const itens = props.itens;
  const { setMenuOption } = useContext(ApiDataContext);
  return (
        <div className='menu'>
          <button>{title}</button>
          <div className='itens-menu'>
            <ul>
            {
              itens.map((item)=> 
                <li key={item.toString()}>
                  <button onClick={
                    () => {
                            setMenuOption(item);
                          }}>{item}
                  </button>
                </li>
              )
            }
            </ul>       
          </div>
        </div>
  )  
}

export default Menu;