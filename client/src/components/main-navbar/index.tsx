import {$, component$, useContext, useSignal, useStore, useTask$} from "@builder.io/qwik";
import {} from "~/routes/layout";

import {Link} from "@builder.io/qwik-city";

export default component$(() => {



    return (
        <div class='sticky top-0 z-30 bg-white'>
            <nav class=' flex justify-between items-center w-[90%] mx-auto '>
                <div>
                    <img width="348" height="196"
                         class='w-16'
                         src='https://img.freepik.com/premium-vector/clothing-store-logo-design-inspiration-vector-illustration_500223-481.jpg' alt='..'/>
                </div>
                <div>
                    <ul class='flex flex-row justify-center items-center'>


                        <li class='text-2xl '>
                            <ion-icon class='p-4 hover:bg-[#3b5998]/90 hover:text-white' name="person"></ion-icon>

                        </li>
                        <li class='text-2xl relative'>
                            <Link href='#'>
                                <ion-icon class='p-4 hover:bg-[#3b5998]/90 hover:text-white' name="cart"></ion-icon>
                                <div
                                    class='absolute top-2 right-2 rounded-full h-4 w-4 inline-flex items-center justify-center bg-red-500 text-white text-sm'>6
                                </div>
                            </Link>
                        </li>
                        <li class='ml-2' >
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