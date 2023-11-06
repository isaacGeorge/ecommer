import {$, component$, Signal, useComputed$, useContext, useSignal, useStore, useTask$} from "@builder.io/qwik";
import {CartContextId, CartItem} from "~/routes/layout";
import {Link} from "@builder.io/qwik-city";

export default component$(() => {

const cart = useContext<Signal<CartItem[]>>(CartContextId)
const numberInCart = useComputed$(()=>{
    return cart.value.reduce((semiSum, item)=>(semiSum + item.qty), 0)
})
    return (

        <div class='sticky top-0 z-30 bg-white'>

            <nav class='flex justify-between items-center w-[90%] mx-auto '>
                <Link href='/'>
                    <img width="348" height="196"
                         class='w-16'
                         src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Logo_of_Max_Fashion_and_Accessories%2C_March_2018.png/2560px-Logo_of_Max_Fashion_and_Accessories%2C_March_2018.png' alt='..'/>
                </Link>
                <div class="">
                    <ul class='flex flex-row justify-center items-center'>


                        <li class='text-2xl hover:bg-black hover:text-white group transition-all duration-300' >
                            <ion-icon class='p-4' name="person"></ion-icon>
                        </li>
                        <li class='text-2xl relative hover:bg-black hover:text-white'>
                            <Link href='/checkout' >
                                <ion-icon class='p-4 ' name="cart"></ion-icon>
                                <div
                                    class='absolute top-2 right-2 rounded-full h-4 w-4 inline-flex items-center justify-center bg-red-500 text-white text-sm'>{numberInCart.value}
                                </div>
                            </Link>
                        </li>
                        <li class='ml-2'>
                            <Link href='#'>
                                <button class='bg-orange-500 rounded-full px-4 py-2 text-sm text-white hover:bg-orange-600' type='button'>Login
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
})