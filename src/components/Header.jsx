import '../App.scss'

const Header = () => {
   return (<div className='header'>
      <div className='header-wrapper'>

         <div className='header__logo'>
            <img src='./img/logoS.png ' alt="" />
            {/* <img src='./img/logo.png' /> */}
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
   </div>)
}

export default Header