import '../App.scss'

const Header = () => {
   return (<div className='header-wrapper'>
      <div class="header-wrapper">
         <div class='header'>
            <div class='header__logo'>
               <img class="header__logo-image" src='img/ugl.png' />
            </div>
            <nav class='header__nav'>
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
   </div>)
}

export default Header