import React, {useState} from 'react';
import {putSize} from '../redux/actions'
import { useDispatch} from 'react-redux';
import './styleSize.css';

function SizeOption({options}) {
    
  const dispatch = useDispatch();  
  const [activate, setActivate]= useState(null)

    if(options){

        options=options.filter(e=>(e.position === 2))
        options=options[0].values;

    }

    const handleClick =(e,i)=>{

      setActivate(i)  
      dispatch(putSize(e.toString()))
      
 


    }



  return (
      
      <>
    
    <section className='main-sizeoption-container'>

         <h4>Size:</h4>     

              
         <div className='sizeoption-container'>
            {options? options.map((e,i)=>(
                        
       
                <button className={i===activate? 'activate-size-button': 'desactive-size-button'}
                 key={i*20}
                 onClick={()=>handleClick(e,i)}
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