
import React, {useEffect} from 'react';
import { getProduct } from './components/redux/actions';
import { useDispatch, useSelector} from 'react-redux';
import './App.css';
import Navbar from './components/navbar/Navbar';
import  SliderImages from './components/sliderImages/indexSliderImages.jsx'
import Title from './components/title/indexTitle';
import ColorOption from './components/colorOption/indexcolor';
import SizeOption from './components/sizeOption/indexSize';

function App() {

  const dispatch = useDispatch();
  const producto = useSelector((state) => state.product)
  
  
  useEffect(() => {
    dispatch(getProduct())
    if(producto.data !== undefined){
    }
  },[])  
  
    console.log(producto, 'a ver');




  return (
    <div className='main-contenedor'>
      <header>
          <Navbar/>
      </header>

      
      <main>

        <div className='main-marginInterno'>


           <SliderImages imgs={producto}/>

           <Title title={producto?.title} price={producto?.price} comparate={producto?.compare_at_price} />
    
           <ColorOption/>
            
            <SizeOption options={producto.options}/>

            
        <section className='main-sizeOpcion'></section>
        <section className='main-comprar'></section>
        <section className='main--buttons'></section>
        <section className='main-informacion'></section>

        </div>
    
    

      </main>


     <footer></footer>



      
    </div>
  );
}

export default App;
