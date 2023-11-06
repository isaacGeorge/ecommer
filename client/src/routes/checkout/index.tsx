import {component$, useComputed$, useContext, useSignal, useStore} from "@builder.io/qwik";
import {DocumentHead} from "@builder.io/qwik-city";
import {CartContextId, ProductsContextId, ProductsType} from "~/routes/layout";
import LineItem from "~/components/line-item";


export default component$(() => {
    const dialog = useSignal<HTMLDialogElement>();
    const cart = useContext(CartContextId);
    const products = useContext(ProductsContextId);

    const total = useComputed$(() => cart.value.reduce((acc, line) => {
        const product = products.value.find(prod => prod._id == line._id) as ProductsType;
        const price = product?.price?.amount || 0;
        const tt = price * line.qty;
        acc += tt
        return acc
    }, 0))


    return (
        <div class='bg-gray-100 lg:px-32'>
            <dialog ref={dialog}>
                <div>
                    <div class="relative w-full max-w-md max-h-full">

                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button type="button"
                                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="authentication-modal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 14 14" onclick$={() => dialog.value?.close()}>
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>

                            </button>
                            <div class="px-6 py-6 lg:px-8">
                                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to
                                    checkout</h3>
                                <form class="space-y-6" action="#">
                                    <div>
                                        <label for="email"
                                               class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                            email</label>
                                        <input type="email" name="email" id="email"
                                               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                               placeholder="name@company.com" required/>
                                    </div>
                                    <div>
                                        <label for="password"
                                               class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                            password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••"
                                               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                               required/>
                                    </div>
                                    <div class="flex justify-between">
                                        <div class="flex items-start">
                                            <div class="flex items-center h-5">
                                                <input id="remember" type="checkbox" value=""
                                                       class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                                       required/>
                                            </div>
                                            <label for="remember"
                                                   class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember
                                                me</label>
                                        </div>
                                        <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost
                                            Password?</a>
                                    </div>
                                    <button type="submit"
                                            class="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login
                                        to your account
                                    </button>
                                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                                        Not registered? <a href="#"
                                                           class="text-blue-700 hover:underline dark:text-blue-500">Create
                                        account</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
            <div class='p-4'>
                <p>Cart ({cart.value.length})</p>
                <p class='text-2xl  '>Shopping Cart</p>
            </div>
            <div
                class='bg-white flex flex-col md:flex-row flex-wrap md:space-y-3  w-fit rounded-xl overflow-clip sm:p-10 '>
                <div class='sm:w-[60%] '>
                    {cart.value.map((product, i) => {
                        return (
                            <div>
                                <LineItem key={product._id} item={product}/>


                            </div>


                        )
                    })}

                </div>


                <div class='flex flex-col bg-gray-800 flex-auto p-8   mt-2 sm:mt-0  '>
                    <p class='border-b text-white'>CART SUMMERY</p>
                    <div class='flex flex-col sm:flex-row justify-between border-b text-gray-100'>
                        <p>Subtotal </p>
                        <p class=' text-4xl'>$ {total.value  } </p>
                    </div>
                    <button onclick$={() => dialog.value?.showModal()}
                            class='bg-orange-500 text-white p-2 mt-3 shadow-xl'>Checkout
                    </button>
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