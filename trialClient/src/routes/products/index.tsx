import {component$, useComputed$, useVisibleTask$} from "@builder.io/qwik";
import {useProducts} from "~/api/feathersAPI";

export default component$(()=>{

    const {products, findProducts} = useProducts();
    useVisibleTask$(async ({track}) => {

        await findProducts()
    })
    
    return(
        <div>
            {JSON.stringify(products.value)}
        </div>
    )
})