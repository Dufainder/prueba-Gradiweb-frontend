import React,{useState, useEffect} from 'react'
import { putColor } from '../redux/actions';
import { useDispatch} from 'react-redux';
import './styledcolor.css'

const ColorOption = ({options}) => {

    const dispatch=useDispatch()
    const[checked,setChecked]= useState(true)
        
    
    if(options){

        options=options.filter(e=>(e.position === 1))
        options=options[0].values;
        putColor(options[0])
       
}

useEffect(() => {
      if(options){

          dispatch(putColor(options[0]))
      }
},[options])  




 const handleColor = (evt) => {
    
    dispatch(putColor(evt.target.value))
    setChecked(!checked)
        
}


    return (
        <>
            <section className='main-coloroption-container'>

                 <h4>Color:</h4>    

                 {options? options.map((e,i)=>(
                        <>
                        <input key={i*100} type="radio" onClick={(evt)=>handleColor(evt)}  name="radio" value={e === 'Red'? e : e} id={e.toLowerCase()==='red'? 'radio1':'radio2'} checked={e.toLowerCase()==='red'?checked:!checked}/>
                        <label key={e}    for={e.toLowerCase()==='red'? 'radio1':'radio2'}></label>
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