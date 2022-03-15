import React from 'react';
import './styleSize.css';

function SizeOption({options}) {
    

    if(options){

        options=options.filter(e=>(e.position === 2))
        options=options[0].values;

    }


  return (
      
      <>
    
    <section className='main-sizeoption-container'>

         <h4>Size:</h4>     

              
         <div className='sizeoption-container'>
            {options? options.map((e,i)=>(
                        
       
                <button className='sizeoption-button' key={i}>{e.toString()}</button>
            
            )) : <></>}
            
           </div>

         
           
    </section>
       
       
       <hr className='hr'/>
       </>

  
  )
}

export default SizeOption