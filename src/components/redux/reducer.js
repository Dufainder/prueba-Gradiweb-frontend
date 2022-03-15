import { IMAGES, PRODUCT } from "./types";


const initialState={

    product:[],
    images:[],

}

export const Reducer = (state=initialState, action) =>{

     switch(action.type){
         case PRODUCT : return{
             ...state,
             product: action.payload
         }

         case IMAGES : return{
            ...state,
            images: action.payload
        }

         default: return state
         }
     }



