import '../App.scss'

const Content = () => {
   return (
      <div className='content'>
         <div className='left'>
            <div className='text'>
               <h1><span>JOURNEY</span> <br /> to the red planet</h1>
            </div>

            <div className='button-start'>
               Start the journey
               <img className="imgleft" src="https://github.com/diniso4ka/spaceXreact/blob/main/public/img/01.png?raw=true" alt="" />
               <img src="https://github.com/diniso4ka/spaceXreact/blob/main/public/img/02.png?raw=true" className="imgright" alt="" />
            </div>




         </div>
         <div className='right'>
            <div className='grid'>
               <div className='grid-item1'>we are <br />
                  <span className='grid-number'>1</span><br />
                  on the marketplace
               </div>
               <div className='grid-item2'>we guarantee<br />
                  <span className='grid-number'>50%</span><br />
                  security
               </div>
               <div className='grid-item3'>calendar for<br />
                  <span className='grid-number'>2021</span><br />
                  as a gift
               </div>
               <div className='grid-item4'>the journey<br />
                  <span className='grid-number'>527</span><br />
                  days
               </div>
            </div>

         </div>
      </div>
   )
}

export default Content