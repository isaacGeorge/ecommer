import {component$} from "@builder.io/qwik";

export default component$(() => {
    return (
        <div class='bg-slate-400 h-screen '>
            <div class='flex justify-center'>
                <div class='w-[80vw] bg-white shadow-xl rounded-full p-4'>
                    <nav class='flex justify-evenly'>
                        <a class='bg-blue-500 px-4 py-2 text-sm rounded-full'>Profile</a>
                        <a class='bg-blue-100 px-4 py-2 text-sm rounded-full'>Notification</a>
                        <a class='bg-blue-100 px-4 py-2 text-sm rounded-full'>Payment</a>
                    </nav>
                </div>
            </div>
            <div class='flex justify-center items-center mt-12'>
                <div class='bg-white shadow-xl rounded-xl p-8 flex w-[80vw]'>
                    <input placeholder='Email address'
                           class='outline-4 outline-amber-400 border-amber-300 border-2 px-4 flex-grow'/>
                    <button class='bg-yellow-500 px-6 py-4 flex-grow'>Subscribe</button>
                </div>
            </div>

            <ul class="flex gap-1">
                <li class="flex-grow hover:flex-grow-[3] bg-purple-800 text-white px-4 py-2 text-center transition-all duration-300 delay-75 hover:bg-yellow-500">One</li>
                <li class="flex-grow hover:flex-grow-[3] bg-purple-800 text-white px-4 py-2 text-center transition-all duration-300 delay-75 hover:bg-yellow-500">Two</li>
                <li class="flex-grow hover:flex-grow-[3] bg-purple-800 text-white px-4 py-2 text-center transition-all duration-300 delay-75 hover:bg-yellow-500">Three</li>
            </ul>
            <div class='flex justify-center'>
                <div class='bg-white shadow-xl flex flex-col w-[45vw] p-10 gap-6'>
                    <div class='flex items-start'>
                        <div>
                            <p class='text-3xl text-slate-800 font-semibold'>Visit to the Eiffel Tower</p>
                            <p class='text-xl text-slate-900 font-semibold'>There's no better start to your tour than
                                visiting the iconic Eiffel Tower. This is a must
                                visit tourist spot in the whole Europe</p>
                        </div>
                        <span class='bg-pink-700 text-white p-2 rounded-3xl text-xl flex-shrink-0'>10:00 AM</span>
                    </div>

                    <div class='flex items-start'>
                        <div>
                            <p class='text-3xl text-slate-800 font-semibold'>Lunch at Jawad</p>
                            <p class='text-xl text-slate-900 font-semibold'>It is an Indian restaurant close to Eiffle
                                Tower. Enjoy delicious indian traditional food and
                                south Asian food</p>
                        </div>
                        <span class='bg-pink-700 text-white p-2 rounded-3xl text-xl flex-shrink-0'>1:00 PM</span>
                    </div>
                </div>
            </div>
            <h2 class="text-2xl underline underline-offset-2">Example
                #2</h2>
            <div class="grid grid-cols-2 grid-rows-4 gap-x-4 gap-y-2">
                <div class="bg-yellow-600 row-span-4">1</div>
                <div class="bg-yellow-600">2</div>
                <div class="bg-yellow-600">3</div>
                <div class="bg-yellow-600">4</div>
                <div class="bg-yellow-600">5</div>
            </div>
        </div>
    )
})