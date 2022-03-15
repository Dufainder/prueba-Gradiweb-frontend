import { PRODUCT , IMAGES} from "./types";
import axios from "axios";

const url = 'https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js'

export const getProduct = ()=>{
    
    return (dispatch) => {
        axios.get(`${url}`)
        .then( json => {
            return dispatch ({
                 type: PRODUCT,
                 payload: json.data
                 
            })
        }).catch(error => {
            console.log(error, 'error')
        })

    } 

} 


export const getProductImages = ()=>{
    
    return (dispatch) => {
        axios.get(`${url}`)
        .then( json => {
          
            return dispatch ({
                 type: IMAGES,
                 payload: json.data
                 
            })
        }).catch(error => {
            console.log(error, 'error')
        })

    } 

} 