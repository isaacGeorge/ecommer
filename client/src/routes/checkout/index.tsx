import {component$, useComputed$, useContext, useStore} from "@builder.io/qwik";
import {DocumentHead} from "@builder.io/qwik-city";
import {CartContextId, ProductsContextId, ProductsType} from "~/routes/layout";
import LineItem from "~/components/line-item";


export default component$(() => {
    // const products = useContext(ProductsContextId);
    const cart = useContext(CartContextId)
    const products = useContext(ProductsContextId);
    const total = useComputed$(()=>cart.value.reduce((acc, line) => {
        const product = products.find(prod => prod._id == line._id) as ProductsType;
        const price = product.price
        const tt = price * line.qty;
        return acc + tt
    }, 0))

    // const products = useStore([
    //     {
    //         id: 1,
    //         image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    //         name: "Chuck Taylor",
    //         price: 25,
    //         comment: "Remaining few items",
    //         shortDescription: "Sodales molestie quidem adipiscing! Dictumst excepteur odio! Laboriosam, odio. Quo. Hendrerit dolor magna repellendus sit ridiculus porta,"
    //
    //     },
    //     {
    //         id: 2,
    //         image: "https://c1.wallpaperflare.com/preview/585/370/573/various-footwear-shoe-shoes.jpg",
    //         name: "Soccer shoes",
    //         price: 55,
    //         comment: "Remaining few items",
    //         shortDescription: "Eaque cras enim possimus, non erat incidunt at, illo felis, tenetur, dictumst dignissim! Occaecat hic cubilia consectetur deleniti fusce pulvinar aliquam, corrupti felis quisque laborum, donec fermentum,"
    //
    //     },
    //
    //     {
    //         id: 3,
    //         image: "https://c0.wallpaperflare.com/preview/246/353/310/person-wearing-white-blue-and-orange-high-top-shoes.jpg",
    //         name: "Basketball shoes",
    //         price: 35,
    //         comment: "Remaining few items",
    //         shortDescription: "autem tellus adipisci sociosqu laborum eiusmod autem perferendis rem veritatis vulputate placeat dis accusamus luctus, felis ipsum consectetuer commodi anim deserunt sed? Qui anim. Lobortis cubilia reiciendis aliqua ullam hac "
    //
    //     }
    // ])
    return (
        <div class='bg-gray-100 lg:px-32'>
            <div class='p-4'>
                <p>Cart ({cart.value.length})</p>
                <p class='text-2xl  '>Shopping Cart</p>
            </div>
            <div
                class='bg-white flex flex-col md:flex-row flex-wrap md:space-y-3  w-fit rounded-xl overflow-clip sm:p-10 '>
                <div class='sm:w-[60%] '>
                    {cart.value.map((product, index) => {
                        return (
                            <>
                                <LineItem key={product._id} item={product}/>


                            </>
                            // <div key={index} class=' w-screen  md:w-full sm:flex p-4 gap-3 mb-3 border-b border-gray-400'>
                            //     <div class='flex-auto'>
                            //         <img height='90' width='90' class='w-[140px] h-[140px] object-cover ' src={product.image} alt={product.name}/>
                            //     </div>
                            //
                            //     <div class=' sm:w-[55%]'>
                            //         <p class='text-xl'>{product.name}</p>
                            //         <p class='text-sm text-gray-500'>{product.shortDescription}</p>
                            //     </div>
                            //
                            //     <div class=''>
                            //         <p class='text-xl'>{product.price} USD</p>
                            //         <div class='flex flex-row  space-x-3 mt-8'>
                            //             <button
                            //                 class='bg-orange-500 w-8 h-8 rounded-md shadow-md text-white text-md cursor-pointer'>-
                            //             </button>
                            //             <p>2</p>
                            //             <button
                            //                 class='bg-orange-500 w-8 h-8 rounded-md shadow-md text-white text-md cursor-pointer'>+
                            //             </button>
                            //         </div>
                            //         <button
                            //             class='text-red-700 text-sm cursor-pointer '>
                            //             <ion-icon class='mr-2' name="trash-bin"></ion-icon>
                            //             Remove
                            //         </button>
                            //     </div>
                            // </div>

                        )
                    })}

                </div>


                <div class='flex flex-col bg-gray-800 flex-auto p-8   mt-2 sm:mt-0  '>
                    <p class='border-b text-white'>CART SUMMERY</p>
                    <div class='flex flex-col sm:flex-row justify-between border-b text-gray-100'>
                        <p>Subtotal </p>
                        <p class=' text-4xl'>$ {total.value} </p>
                    </div>
                    <button class='bg-orange-500 text-white p-2 mt-3 shadow-xl'>Checkout</button>
                </div>
            </div>


        </div>
    )

})

// {cart.value.map((item) => {
//     return (
//
//         <div class='flex flex-row justify-between   mb-8 border-b '>
//             <div class='flex flex-row space-x-3'>
//                 <div class='flex flex-col space-y-5'>
//                     <img class='w-[90px] h-[90px] object-cover ' src={getItemImage(item.id)}/>
//                     <butto
//                         className='flex flex-row  justify-center items-center px-3 py-2 text-red-700 text-sm cursor-pointer '>
//                         <ion-icon className='mr-2' name="trash-bin"></ion-icon>
//                         Remove
//                     </butto>
//                 </div>
//
//                 <div class='flex flex-col '>
//                     <p class='text-xl'>{item.id.attributes.name}</p>
//                     <p class='text-sm text-gray-500'>"Remaining few items"</p>
//
//
//                 </div>
//             </div>
//             <div class='flex flex-col items-end'>
//                 <p class='text-xl'>{item.id.attributes.price} USD</p>
//
//                 <div class='flex flex-row justify-center items-center space-x-3 mt-8'>
//                     <button
//                         class='bg-orange-500 w-8 h-8 rounded-md shadow-md text-white text-md cursor-pointer'>-
//                     </button>
//                     <p>{item.qty}</p>
//                     <button
//                         class='bg-orange-500 w-8 h-8 rounded-md shadow-md text-white text-md cursor-pointer'>+
//                     </button>
//                 </div>
//             </div>
//         </div>
//
//     )
// })}

export const head: DocumentHead = {
    title: "Check out",
    meta: [
        {
            name: "description",
            content: "Please checkout here and pay",
        },
    ],
};