import {$, component$, useSignal, useVisibleTask$} from '@builder.io/qwik';
import type {DocumentHead} from "@builder.io/qwik-city";
import Dropdown from "~/routes/dropdown";

export default component$(() => {
    const pElement = useSignal<HTMLParagraphElement>()
    const clicked = useSignal<boolean>(false)

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$((ctx) => {
        ctx.track(() => clicked.value)

        if (clicked.value) {
            console.log('yeyeyeyeyey');
            // add classes
            pElement.value?.classList.add('-translate-y-[9px]', 'scale-105', 'opacity-100')
            pElement.value?.classList.remove('translate-y-[100px]', 'scale-0', 'opacity-0')
        } else {
            // remove classes
            pElement.value?.classList.remove('-translate-y-[9px]', 'scale-105', 'opacity-100')
            pElement.value?.classList.add('translate-y-[100px]', 'scale-0', 'opacity-0')
        }

    })

    const handleClicked = $(() => clicked.value = !clicked.value);

    return (
        <div>
            <h1 class={'bg-amber-950 text-amber-50 p-5'}>Hi 👋</h1>
            <div>
                <p ref={pElement}
                   class={'translate-y-[100px] p-2 text-amber-50 bg-black transition ease-in-out delay-150 duration-300 scale-0 origin-top-left opacity-0'}>
                    Can't wait to see what you build with qwik!
                    <br/>
                    Happy coding.
                </p>
                <button
                    class={'bg-amber-950 text-amber-50 px-4 py-1 m-4 rounded-md  transition ease-in-out delay-10 duration-100  hover:scale-105 hover:saturate-50'}
                    onClick$={handleClicked}>Doc
                </button>
            </div>


            {/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
            <div class="max-w-4xl mx-auto grid grid-cols-2 gap-4 bg-white shadow-xl p-10 rounded-3xl ">
                <div class='flex flex-col gap-3'>
                    <p class='border-b-2 text-2xl font-bold'>Share to social media</p>
                    <div></div>
                    <label for="HeadlineAct"
                           class="block text-sm font-medium text-gray-900"> Headliner </label>

                    <select
                        name="HeadlineAct"
                        id="HeadlineAct"
                        class="mt-1.5 w-full rounded-lg border-black-b text-gray-700 sm:text-sm"
                    >
                        <option value="">Select Channel</option>
                        <option value="JM">Facebook</option>
                        <option value="SRV">Instagram</option>
                        <option value="JH">Twitter</option>

                    </select>
                    <div class='flex flex-col gap-3'>
                        <label for="message"
                               class="block mb-2 text-sm font-medium text-gray-900">
                            Your post here
                        </label>
                        <textarea
                            id="message" rows={4}
                            class="p-2.5 w-full text-sm text-gray-900 rounded-lg focus:border-blue-700 focus:outline-none border-2 border-gray-500 "
                            placeholder="Add your caption here"
                        />

                        <button class='bg-blue-900 text-white rounded-full px-8 py-2'>Preview</button>
                        <div class='border-b-2 mt-8 '></div>
                        <div class='flex flex-row gap-4'>
                            <div class="flex items-center">
                                <input id="country-option-2" type="radio" name="countries" value="Germany"
                                       class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                                       aria-labelledby="country-option-2" aria-describedby="country-option-2"/>
                                <label for="country-option-2"
                                       class="text-sm font-medium text-gray-900 ml-2 block">
                                    Schedule
                                </label>
                            </div>

                            <div class="flex items-center">
                                <input id="country-option-3" type="radio" name="countries" value="Spain"
                                       class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                                       aria-labelledby="country-option-3" aria-describedby="country-option-3"/>
                                <label for="country-option-3"
                                       class="text-sm font-medium text-gray-900 ml-2 block">
                                    Publish now
                                </label>
                            </div>


                        </div>

                    </div>

                    {/*    date picker here*/}
                    <div>
                        <div class="relative">
                            <label for="Search" class="sr-only">Search</label>
                            <input type="text" id="Search" placeholder="mm/dd/yy..."
                                   class="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"/>
                            <span class="absolute inset-y-0 end-0 grid w-10 place-content-center">
                                <butto type="button" class="text-gray-600 hover:text-gray-700">
                                    <span class="sr-only">Search</span>
                                     <ion-icon name="calendar-clear-outline"></ion-icon>
                                </butto>
                            </span>
                        </div>
                    </div>
                   <div class='flex flex-row space-x-2'>
                       <label
                           for="AcceptConditions"
                           class="relative h-8 w-14 cursor-pointer [-webkit-tap-highlight-color:_transparent]">
                           <input type="checkbox" id="AcceptConditions" class="peer sr-only"/>
                           <span
                               class="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-blue-500"></span>
                           <span
                               class="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6"> </span>

                       </label>
                       <p>Save as draft</p>
                   </div>
                </div>


                <div
                    class='border-dashed border-2 border-slate-500 p-10 flex flex-col text-center justify-center items-center'>
                    <ion-icon className='text-6xl' name="images-outline"></ion-icon>
                    <p class='text-xl font-bold'>Drag and drop here, or browse</p>
                    <p>Add the images/videos you want <br/>to include in your post</p>
                </div>

            </div>


        </div>

    );
});

export const head: DocumentHead = {
    title: "Welcome to Qwik",
    meta: [
        {
            name: "description",
            content: "Qwik site description",
        },
    ],
};
