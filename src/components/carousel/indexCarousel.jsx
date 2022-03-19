import React, {useState} from 'react'
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styledCorousel.css"; // requires a loader

function IndexCarousel({imgs, modalState}) {

    
    const inputCart = useSelector((state) => state.cart)
    const [cont, setCont] = useState(0);
    const variBlack = ['https://www.favsole.com/images/2019/11/Matthew-M.-Williams-x-Nike-Free-TR-3-SP-MMW-Black-For-Sale-1.jpg'
    ,'https://www.favsole.com/images/2019/11/Matthew-M.-Williams-x-Nike-Free-TR-3-SP-MMW-Black-For-Sale-6.jpg'
    ,'https://www.favsole.com/images/2019/11/Matthew-M.-Williams-x-Nike-Free-TR-3-SP-MMW-Black-For-Sale-4.jpg'
    ,'https://cdn.shopify.com/s/files/1/0603/3031/1875/products/AQ9201-001_5.jpg?v=1645716674'];






  return (

<section className={modalState===''?  'plans-container--card-off' : 'plans-container--card' }>
      <div className='carrusel-title'>
         <h3>Catalog / sneckers /</h3><p> {imgs?.title}</p>  
    </div>
    <Carousel 
    
    showArrows={true} 
    showThumbs={false} 
    showIndicators={false} 
    showStatus={false}
    width={'100%'}
    onChange={(e)=>(setCont(e))}
    id='cnatiner'
    className='cnatiner'
    >
     {(inputCart?.color==='Red')? imgs.images.map( (e,i) =>(

         
               <img className='ClassImagen' src={e} key={i} 
               alt="image1"/>
    
              ))
            : 

            variBlack.map( (e,i) =>(

         
              <img className='ClassImagen' src={e} key={i} 
              alt="image2"/>
   
             ))}

    </Carousel>
       
       <div className='indicador-container'>

        {imgs?.images? imgs.images.map( (e, i) =>(
            
            <div key={i} className={cont===i? 'indicador-on':'indicador-off'}/>
            
            ))
            : 
            <></>}
     </div>

 
 <div id='foot-images'>

 
 {(inputCart?.color==='Red')? imgs.images.map( (e,i) =>(
   
      (i!==0?
      <div key={i+10} >
      <img  id='foot-images-img' src={e} 
      alt="image8"/> 
      </div>
      : <></>)
    
   
   ))
   : 
   variBlack.map( (e,i) =>(
   
    (i!==0?
    <div key={i+10} >
    <img  id='foot-images-img' src={e} 
    alt="image8"/> 
    </div>
    : <></>)
  
 
 ))
   
   }

  </div>



    </section>
  )
}

export default IndexCarousel