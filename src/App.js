
import React, {useEffect, useState} from 'react';
import { getProduct, handleModalChange } from './components/redux/actions';
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
import Modal from './components/modal/indexModal';

function App() {

  const dispatch = useDispatch();

  const modalState = useSelector((state) => state.modal)
  const producto = useSelector((state) => state.product)
  const inputCart = useSelector((state) => state.cart)


  
  useEffect(() => {
    dispatch(getProduct())

},[])  




  return (
   
    <>


     <header>
          <Navbar/>
      </header>

  <div className='main-contenedor'>

        {modalState===''?
        
        <></>
        :
        <Modal inputCart={inputCart} 
         modalState={modalState}/>
     }
      
      <main>


           
          <SliderImages className={'slider-container'} imgs={producto}  modalState={modalState}/>
            

            <div className='container-iaquierdo'>

            <Title 
                images={producto?.images}
                title={producto?.title} 
                price={producto?.price} 
                comparate={producto?.compare_at_price} 
                />
    
            <ColorOption options={producto?.options}  inputCart={inputCart} />
            
            <SizeOption options={producto?.options}   />

             <Total price={producto?.price}   />

             <AddButtons producto={producto}   inputCart={inputCart} />

             <Descripcion description={producto?.description}/>

            </div>

          
    
      </main>

          </div>
   </>
  );
}

export default App;
