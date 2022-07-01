import '../App.scss'

const Header = () => {
   return (
      <div className="header-wrapper">
         <div className='header'>
            <div className='header__logo'>
               <img className="header__logo-image" src='https://github.com/diniso4ka/spaceXreact/blob/main/public/img/ugl.png?raw=true' />
            </div>
            <nav className='header__nav'>
               <ul>
                  <li>Main</li>
                  <li>Technologies</li>
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