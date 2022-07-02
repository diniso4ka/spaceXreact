import '../App.scss'

const Technologies = () => {
   return (
      <div className="component__wrapper">
         <h2 className='technologies-title title'>My stack:</h2>
         <ul className='info-list'>
            <li className='info-items'>HTML, CSS, SCSS, CSS Modules, BEM</li>
            <li className='info-items'>JavaScript</li>
            <li className='info-items'>ReactJSб Hooks, Redux(in progress)</li>
            <li className='info-items'>ReactRouterDom, Skeleton, RestApi(axios, fetch)</li>
         </ul>
      </div>
   )
}

export default Technologies