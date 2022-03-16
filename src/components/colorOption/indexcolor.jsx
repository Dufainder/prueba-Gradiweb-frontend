import React from 'react'
import { putColor } from '../redux/actions';
import { useDispatch} from 'react-redux';
import './styledcolor.css'

const ColorOption = ({options}) => {

    const dispatch=useDispatch()

    if(options){

        options=options.filter(e=>(e.position === 1))
        options=options[0].values;
        console.log(options, 'opciones color')
       

    }

const handleColor = (evt) => {
    
    console.log(evt.target.value, 'valueColor')
    dispatch(putColor(evt.target.value))
        
}


    return (
        <>
            <section className='main-coloroption-container'>

                 <h4>Color:</h4>    

                 {options? options.map((e,i)=>(
                        <>
                        <input key={i*100} type="radio" onChange={(evt)=>handleColor(evt)} checked={e === 'Red'? true:false} name="radio" value={e === 'Red'? e : e} id={e.toLowerCase()==='red'? 'radio1':'radio2'} />
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