import React from 'react'
import './styledcolor.css'

const ColorOption = () => {
    return (
        <>
            <section className='main-coloroption-container'>

                 <h4>Color:</h4>     

                
                    <input type="radio" name="radio" id="radio1" />
                 
                 <label for="radio1"></label>
                 <input type="radio" className='blackClass' name="radio" id="radio2" />
                 <label for="radio2"></label>
                 <input type="radio" className='white' name="radio" id="radio3" />
                 <label for="radio3"></label>
                  
            </section>
                <hr className='hr'/>

          
        </>
    )
}

export default ColorOption;