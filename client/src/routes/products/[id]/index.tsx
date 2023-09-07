import {$, component$, Signal, useComputed$, useContext, useSignal} from "@builder.io/qwik";
import {useLocation} from "@builder.io/qwik-city";
import {ProductsContextId, QtyContextId} from "~/routes/layout";



export default component$(() => {
    const products = useContext(ProductsContextId);
    const dialog = useSignal<HTMLDialogElement>();
    const qty = useContext(QtyContextId);
    const location = useLocation();
    const productDetails = useComputed$(() => {
        return products.find(detail => detail._id === location.params.id)
    })



    
    return (
        <div>
            <div class='container mx-auto p-16 md:flex flex-row gap-6 md:w-[1200px]'>
                <div class='mb-8 md:mb-0'>
                    <img width="600 " height="900" src={productDetails.value?.image} alt={productDetails.value?.name}/>
                </div>
                <div class='w-8/12 flex flex-col space-y-4'>
                    <p class='text-xl'>{productDetails.value?.name.toUpperCase()}</p>
                    <p class='h-14 bg-orange-500 text-white p-4 w-fit rounded-xl font-bold'>$ {qty.value * (productDetails.value?.price || 0)}</p>
                    <p class='text-md text-gray-500'>{productDetails.value?.longDescription}</p>
                    <div class='flex space-x-3 '>
                        <div class='flex flex-row gap-4 px-4 border justify-center items-center '>
                            <button onclick$={()=> qty.value--}>-</button>
                            <p>{qty}</p>
                            <button onclick$={()=> qty.value++}>+</button>
                        </div>
                        <button
                                class=' bg-orange-500 hover:bg-orange-600 p-4 text-white text-xs '> ADD TO CART
                        </button>
                    </div>
                    <div class='text-xs flex flex-col space-y-2'>
                        <p><span class='text-xl'>♡</span>ADD TO WHITELIST</p>
                        <p><span class='font-bold'>CATEGORIES:</span> {productDetails.value?.category.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
})