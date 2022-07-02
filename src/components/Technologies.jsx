import '../App.scss'

const Technologies = () => {
   return (
      <div className="technologies-wrapper">
         <h2 className='technologies-title'>My stack:</h2>
         <ul className='technologies-list'>
            <li className='technologies-items'>HTML, CSS, SCSS, CSS Modules, BEM</li>
            <li className='technologies-items'>JavaScript</li>
            <li className='technologies-items'>ReactJSб Hooks, Redux(in progress)</li>
            <li className='technologies-items'>ReactRouterDom, Skeleton, RestApi(axios, fetch)</li>
         </ul>
      </div>
   )
}

export default Technologies