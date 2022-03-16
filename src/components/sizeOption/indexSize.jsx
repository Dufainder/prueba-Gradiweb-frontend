import React from 'react';
import {putSize} from '../redux/actions'
import { useDispatch} from 'react-redux';
import './styleSize.css';

function SizeOption({options}) {
    
  const dispatch = useDispatch();  

    if(options){

        options=options.filter(e=>(e.position === 2))
        options=options[0].values;

    }

    const handleClick =(e)=>{

        
      dispatch(putSize(e))
      
 


    }



  return (
      
      <>
    
    <section className='main-sizeoption-container'>

         <h4>Size:</h4>     

              
         <div className='sizeoption-container'>
            {options? options.map((e,i)=>(
                        
       
                <button className='sizeoption-button'
                 key={i/9}
                 onClick={()=>handleClick(e)}
                 >
                   
                   {e.toString()}  
                 
                 </button>
            
            )) : <></>}
            
           </div>

         
           
    </section>
       
       
       <hr className='hr'/>
       </>

  
  )
}

export default SizeOption