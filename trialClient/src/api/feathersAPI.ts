import io from 'socket.io-client'
import {feathers} from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'

import authentication from '@feathersjs/authentication-client'
import {$, useSignal, useVisibleTask$} from "@builder.io/qwik";

const socket = io(import.meta.env.PUBLIC_BACKEND_URL)
const client = feathers()

// Setup the transport (Rest, Socket, etc.) here
client.configure(socketio(socket))

// Available options are listed in the "Options" section
client.configure(authentication())

export default client

export interface ProductsType {
    "_id": string
    "name": string
    "shortDescription"?: string
    "longDescription"?: string
    "price": PriceType
    "category": CategoryType
    "image": string
}
export interface PriceType{
    currency: string,
    amount: number
}


export interface ProductsType {
    "_id": string
    "name": string
    "shortDescription"?: string
    "longDescription"?: string
    "price": PriceType
    "category": CategoryType
    "image": string
}


export interface CategoryType {
    "name": string
    "_id": string
}

export const useProducts = ()=>{
const products = useSignal<ProductsType[]>([])
    const findProducts = $(async ()=>{
        try {
            const productService = client.service('products');
            const {data} = await productService.find();
            products.value = data;
        } catch (e) {
            console.log(e)
        }
    })

    // useVisibleTask$(async ({track}) => {
    //
    //     await findProducts()
    // })

    return{
        findProducts,
        products
    }
}