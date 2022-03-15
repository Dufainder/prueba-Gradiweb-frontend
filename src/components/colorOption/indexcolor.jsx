import React from 'react'
import './styledcolor.css'

const ColorOption = ({options}) => {



    if(options){

        options=options.filter(e=>(e.position === 1))
        options=options[0].values;
        console.log(options, 'opciones color')
       

    }

    return (
        <>
            <section className='main-coloroption-container'>

                 <h4>Color:</h4>    

                 {options? options.map((e,i)=>(
                        <>
                        <input key={i} type="radio" name="radio" id={e.toLowerCase()==='red'? 'radio1':'radio2'} />
                        <label key={e} for={e.toLowerCase()==='red'? 'radio1':'radio2'}></label>
                        </>
                        
                    
                    )) : <></>}

            
                 {/* <input type="radio" className='white' name="radio" id="radio3" />
                 <label for="radio3"></label> */}
                  
            </section>
                <hr className='hr'/>

          
        </>
    )
}

export default ColorOption;