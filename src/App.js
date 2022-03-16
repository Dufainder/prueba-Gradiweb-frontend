
import React, {useEffect, useState} from 'react';
import { getProduct } from './components/redux/actions';
import { useDispatch, useSelector} from 'react-redux';
import './App.css';
import Navbar from './components/navbar/Navbar';
import  SliderImages from './components/sliderImages/indexSliderImages.jsx'
import Title from './components/title/indexTitle';
import ColorOption from './components/colorOption/indexcolor';
import SizeOption from './components/sizeOption/indexSize';
import Total from './components/totalPrice/indexTotal';
import AddButtons from './components/addButtons/indexAddButtons';
import Descripcion from './components/descripcion/indexDescripcion';

function App() {

  const dispatch = useDispatch();
  const producto = useSelector((state) => state.product)
  const inputCart = useSelector((state) => state.cart)


  
  useEffect(() => {
    dispatch(getProduct())

},[])  

  //  const [inputCart, setInputCart] = useState({
    
  //    id:'',
  //    title:'',
  //    color:'',
  //    size:'',
  //    cantidad:'',
  //    price:'' 

  //       }) 



  return (
   
    <>
        <div className='main-contenedor'>
     <header>
          <Navbar/>
      </header>

      
      <main>


           
          <SliderImages className={'slider-container'} imgs={producto}/>
            

            <div className='container-iaquierdo'>

            <Title 
                
                title={producto?.title} 
                price={producto?.price} 
                comparate={producto?.compare_at_price} 
                />
    
            <ColorOption options={producto?.options}  inputCart={inputCart} />
            
            <SizeOption options={producto?.options}   />

             <Total price={producto?.price}   />

             <AddButtons producto={producto}  inputCart={inputCart} />

             <Descripcion description={producto?.description}/>

            </div>

          
    
      </main>

          </div>
   </>
  );
}

export default App;
