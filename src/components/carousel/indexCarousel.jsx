import React, {useState} from 'react'
import { Carousel } from 'react-responsive-carousel';
import { useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styledCorousel.css"; // requires a loader

function IndexCarousel({imgs, modalState}) {

    
    const inputCart = useSelector((state) => state.cart)
    const [cont, setCont] = useState(0);
    const variBlack = ['https://www.highsnobiety.com/static-assets/thumbor/m7v4i_jQRSzoCz2RMT645L7d43A=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2018/06/06224809/matthew-williams-s19-nike-mmw-closer-look-14.jpg'
    ,'https://cms-cdn.thesolesupplier.co.uk/2019/08/MMW-x-Nike-Free-TR-Flyknit-3-Black-AQ9201-001-front_w900.jpg.webp'
    ,'https://cms-cdn.thesolesupplier.co.uk/2019/08/MMW-x-Nike-Free-TR-Flyknit-3-Black-AQ9201-001-back_w900.jpg.webp'
    ,'https://images.solecollector.com/images/fl_lossy,q_auto/pjzdsc9cnwkmqladbsps/matthew-m-williams-nike-free-tr-3-sp-black-detail'];






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