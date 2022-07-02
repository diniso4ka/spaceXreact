import '../App.scss'

const Contacts = () => {
   return (
      <div className="component__wrapper">
         <h2 className='contacts-title title'>Contacts:</h2>
         <ul className='info-list'>
            <li className='info-items'><a href='https://vk.com/electrokurwa228'>VK</a></li>
            <li className='info-items'><a href='https://t.me/penaplast3104'>Telegram</a></li>
            <li className='info-items'><a href='mailto:den.zagrosh@gmail.com'>Mail</a></li>
         </ul>
      </div>
   )
}

export default Contacts