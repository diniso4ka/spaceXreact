import '../App.scss'
import { Link } from 'react-router-dom'

const Header = ({ isActive, setIsActive }) => {
   return (
      <div className="header-wrapper">
         <div className='header'>
            <div className='header__logo'>
               <img className="header__logo-image" src='https://github.com/diniso4ka/spaceXreact/blob/main/public/img/ugl.png?raw=true' />
            </div>
            <nav className='header__nav'>
               <ul>
                  <Link to='/' ><li className={isActive === 'main' ? 'active' : ''}>Main</li></Link>
                  <Link to='/technologies'><li>Technologies</li></Link>
                  <li>Flight schedule</li>
                  <li>Guarantees</li>
                  <li>About us</li>
                  <li>Contacts</li>
               </ul>
            </nav>
         </div>
      </div>
   )
}

export default Header