import '../App.css'

const Content = () => {
   return (
      <div class='content'>
         <div class='left'>
            <div class='text'>
               <h1><span>JOURNEY</span> <br /> to the red planet</h1>
            </div>

            <div class='button-start'>
               Start the journey
               <img class="imgleft" src="img/01.png" alt="" />
               <img src="img/02.png" class="imgright" alt="" />
            </div>



         </div>
         <div class='right'>
            <div class='grid'>
               <div class='grid-item1'>we are <br />
                  <span class='grid-number'>1</span><br />
                  on the marketplace
               </div>
               <div class='grid-item2'>we guarantee<br />
                  <span class='grid-number'>50%</span><br />
                  security
               </div>
               <div class='grid-item3'>calendar for<br />
                  <span class='grid-number'>2021</span><br />
                  as a gift
               </div>
               <div class='grid-item4'>the journey<br />
                  <span class='grid-number'>527</span><br />
                  days
               </div>
            </div>

         </div>
      </div>
   )
}

export default Content