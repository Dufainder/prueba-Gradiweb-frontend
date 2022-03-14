import { PRODUCT } from "./types";
import axios from "axios";

const url = 'https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js'

export const getProducts = ()=>{
    
    return (dispatch) => {
        axios.get(`${url}`)
        .then( json => {
            console.log(json, 'el json')
            return dispatch ({
                 type: PRODUCT,
                 payload: json
                 
            })
        }).catch(error => {
            console.log(error, 'error')
        })

    } 

} 