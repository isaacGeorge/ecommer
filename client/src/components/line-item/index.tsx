import {$, component$, useComputed$, useContext, useSignal, useVisibleTask$} from "@builder.io/qwik";
import {CartContextId, CartItem, ProductsContextId} from "~/routes/layout";


// export type LineItemProps = {
//
// }



export default component$((props:{item: CartItem}) =>{
    const products = useContext(ProductsContextId);
    const cart = useContext(CartContextId);

    const lineItem = useComputed$(() => {

        const product = products.find(prod => prod._id === props.item._id)
        // item is a prop and props are not reactive https://discord.com/channels/842438759945601056/1077376577928708116
        // so we use the cart item from store instead of props.item
        const cartFromStore = cart.value.find(itm => itm._id == props.item._id)
        return {
            name: product?.name,
            unitPrice: product?.price,
            image: product?.image,
            shortDescription: product?.shortDescription,
            ...cartFromStore
        }
    })

    const  qty = useSignal(0)

    useVisibleTask$(({track})=> {
        track(() => lineItem.value)
       qty.value = lineItem.value.qty as number
    })

    const changeItemQty = $((val: string)=>{
        qty.value = parseInt(val,10)
        cart.value = cart.value.map((itm)=>{
            if(itm._id == props.item._id) {
                itm.qty = parseInt(val,10)
            }
            return itm;
        })
        localStorage.setItem('cart',JSON.stringify(cart.value))
    })
    const removeFromCart = $((e: Event)=>{
        e.preventDefault()
        cart.value = cart.value.filter(itm => itm._id !== props.item._id)
        localStorage.setItem('cart',JSON.stringify(cart.value))
    })

    const total = useComputed$(()=>(lineItem.value.unitPrice || 0) * qty.value)

    return (<div style='display: flex; gap:5px;'>
    {/*    <input*/}
    {/*        min={1}*/}
    {/*        type='number'*/}
    {/*        value={qty.value}*/}
    {/*        onInput$={(event, element) => changeItemQty(element.value) }*/}
    {/*    />*/}
    {/*    <div>{lineItem.value.name}{qty.value > 1 ? 's': ''}</div>*/}
    {/*    <div> at </div>*/}
    {/*    <div>$<strong>{total.value}</strong></div>*/}
    {/*<div>*/}
    {/*    <button  onclick$={removeFromCart}>x</button>*/}
    {/*</div>*/}


    {/*    //////////////////////*/}

        <div  class=' w-screen  md:w-full sm:flex p-4 gap-3 mb-3 border-b border-gray-400'>
            <div class='flex-auto'>
                <img height='90' width='90' class='w-[140px] h-[140px] object-cover ' src={lineItem.value.image}
                     alt={lineItem.value.name}/>
            </div>

            <div class=' sm:w-[55%]'>
                <p class='text-xl'>{lineItem.value.name}</p>
                <p class='text-sm text-gray-500'>{lineItem.value.shortDescription}</p>
                <p class='text-md font-bold'>Total: {total.value}</p>
            </div>

            <div class=''>
                <p class='text-xl'>{lineItem.value.unitPrice} USD</p>
                <div class='flex flex-row  space-x-3 mt-8'>
                    <button
                        class='bg-orange-500 w-8 h-8 rounded-md shadow-md text-white text-md cursor-pointer'>-
                    </button>
                    <p>{qty.value}</p>
                    <button
                        onclick$={() => qty.value++}
                        class='bg-orange-500 w-8 h-8 rounded-md shadow-md text-white text-md cursor-pointer'>+
                    </button>
                </div>
                <button
                    class='text-red-700 text-sm cursor-pointer '>
                    <ion-icon onclick$={removeFromCart} class='mr-2' name="trash-bin"></ion-icon>
                    Remove
                </button>
            </div>
        </div>


    </div>);
})
