import {  CANT, COLOR, ID, PRICE, PRODUCT, SIZE, TITLE } from "./types";


const initialState={

    product:[],
    cart:{
        
        id:'',
        title:'',
        color:'',
        size:'',
        cant:'',
        price:'' 

    }
}

export const Reducer = (state=initialState, action) =>{

     switch(action.type){

         case PRODUCT : return{
             ...state,
             product: action.payload
         }

         case TITLE : 
         console.log(state.cart)

         return{
             ...state,
             cart:{
                 ...state.cart,  
            'title' : action.payload}
                 
        }
         
        case COLOR : 
        console.log(state.cart)

        return{
            ...state,
            cart:{
                ...state.cart,  
           'color' : action.payload}
                
       }


       case SIZE : 
       console.log(state.cart)

       return{
           ...state,
           cart:{
               ...state.cart,  
          'size' : action.payload}
               
      }

      case CANT : 
      console.log(state.cart)

      return{
          ...state,
          cart:{
              ...state.cart,  
         'cant' : action.payload}
              
     }


     case PRICE : 
     console.log(state.cart)

     return{
         ...state,
         cart:{
             ...state.cart,  
        'price' : action.payload}
             
    }

    case ID : 
    console.log(state.cart)

    return{
        ...state,
        cart:{
            ...state.cart,  
       'id' : action.payload}
            
   }




         default: return state
         }

         
     }



