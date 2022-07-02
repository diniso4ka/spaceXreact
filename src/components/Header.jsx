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
                  <Link to='/' onClick={() => setIsActive('main')} ><li className={isActive === 'main' ? 'active' : ''} >Main</li></Link>
                  <Link to='/technologies' onClick={() => setIsActive('technologies')}><li className={isActive === 'technologies' ? 'active' : ''}>Technologies</li></Link>
                  <Link to='/code' onClick={() => setIsActive('code')}><li className={isActive === 'code' ? 'active' : ''}>My code</li></Link>
                  <Link to='/aboutus' onClick={() => setIsActive('aboutus')}><li className={isActive === 'aboutus' ? 'active' : ''}>About us</li></Link>
                  <Link to='/contacts' onClick={() => setIsActive('contacts')}><li className={isActive === 'contacts' ? 'active' : ''}>Contacts</li></Link>
               </ul>
            </nav>
         </div>
      </div>
   )
}

export default Header