import '../App.scss'

const Technologies = () => {
   const techItems = ['HTML, CSS, SCSS, CSS Modules, BEM',
      'JavaScript, TypeScript(in progress)',
      'ReactJS, Hooks, Redux(in progress)',
      'ReactRouterDom, Skeleton, RestApi(axios, fetch)'
   ]

   return (
      <div className="component__wrapper">
         <h2 className='technologies-title title'>My stack:</h2>
         <ul className='info-list'>
            {techItems.map((el, index) => <li key={index} className='info-items'>{el}</li>)}
         </ul>
      </div>
   )
}

export default Technologies