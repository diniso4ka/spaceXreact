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
               <img className="imgleft" src="img/01.png" alt="" />
               <img src="img/02.png" className="imgright" alt="" />
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