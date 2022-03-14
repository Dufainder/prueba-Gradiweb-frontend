import { PRODUCT } from "./types";


const initialState={

    product:[],

}

export const Reducer = (state=initialState, action) =>{

     switch(action.type){
         case PRODUCT : return{
             ...state,
             product: action.payload
         }

         default: return state
         }
     }


