import { CANT, COLOR, ID, PRICE, PRODUCT, SIZE, TITLE} from "./types";
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


export const putTitle = (title)=>{
    
    return (dispatch) => {
          
            return dispatch ({
                 type: TITLE,
                 payload: title
                 
            })    
    } 
} 


export const putColor = (color)=>{
    
    return (dispatch) => {
          
            return dispatch ({
                 type: COLOR,
                 payload: color
                 
            })    

    } 

} 


export const putSize = (size)=>{
    
    return (dispatch) => {
          
            return dispatch ({
                 type: SIZE,
                 payload: size
                 
            })    

    } 

} 

export const putCant = (cant)=>{
    
    return (dispatch) => {
          
            return dispatch ({
                 type: CANT,
                 payload: cant
                 
            })    

    } 
} 

export const putPrice = (price)=>{
    
    return (dispatch) => {
          
            return dispatch ({
                 type: PRICE,
                 payload: price
                 
            })    

    } 

} 


export const putId = (id)=>{
    
    return (dispatch) => {
          
            return dispatch ({
                 type: ID,
                 payload: id
                 
            })    

    } 

} 