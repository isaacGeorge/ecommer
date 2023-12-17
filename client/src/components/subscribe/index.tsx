import {component$} from "@builder.io/qwik";

export default component$(() => {
    return (
        <div class="w-[75vw] my-8  text-center mx-auto">
            <ion-icon class='w-6 h-6' name="mail"></ion-icon>

            <h1 class=''>Subscribe To Our Newsletter</h1>
            <p>and receive $20 coupon for your first order when you checkout</p>

            <div class="flex flex-col gap-3 mt-4">

                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username" type="text" placeholder="Username"/>
                <button class="bg-black hover:bg-orange-500 text-white font-bold py-2 px-4 rounded flex-grow-0" >Subscribe</button>
            </div>


        </div>
    )
})