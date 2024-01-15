import {component$, useSignal} from "@builder.io/qwik";
import {QCalendar} from "~/components/react";


export default component$(() => {
    const addEventDialog = useSignal<HTMLDialogElement>()
    const addPostDialog = useSignal<HTMLDialogElement>()
    const postPanelOpen = useSignal(false)
    return (
        <div class='p-10'>

            {/*Event dialog starts here*/}
            {/*<-------------------------------------------------------------------->*/}
            <dialog ref={addEventDialog}>
                <form class="w-full max-w-sm p-10 ">
                    <div class="md:flex md:items-center mb-6 rounded-3xl">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                   for="inline-full-name">
                                from
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input
                                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="inline-full-name" type="text" value="e.g...12"/>
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                   for="inline-password">
                                to
                            </label>
                        </div>
                        <div class="md:w-2/3">
                            <input
                                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="inline-password" type="text" placeholder="e.g,,14"/>
                        </div>
                    </div>

                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3"></div>
                        <div class="md:w-2/3 flex-row space-x-4">
                            <button
                                onClick$={() => addEventDialog.value?.close()}
                                class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="button">
                                create
                            </button>
                            <button
                                onClick$={() => addEventDialog.value?.close()}
                                class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="button">
                                cancel
                            </button>
                        </div>
                    </div>
                </form>

            </dialog>
            {/*Event dialog ends here*/}
            {/*<-------------------------------------------------------------------->*/}


            {/*create post dialog starts here*/}
            {/*<-------------------------------------------------------------------->*/}
            <dialog ref={addPostDialog}>
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

            </dialog>


            {/*create post dialog starts here*/}
            {/*<-------------------------------------------------------------------->*/}

            <div
                class='flex flex-row justify-between mb-12 sticky top-0 bg-white pb-12 pt-4 z-50 shadow-md px-4 rounded-xl'>
                <div class='flex flex-row space-x-4 items-center'>
                    <p class='text-3xl font-bold'>Schedule</p>
                    <button
                        onClick$={() => postPanelOpen.value = !postPanelOpen.value}
                        class='cursor-pointer bg-amber-200'>
                        <ion-icon class='text-xl flex items-center justify-center ' name="calendar-outline"></ion-icon>
                    </button>
                </div>
                <div class='flex flex-row space-x-4'>
                    <button onclick$={() => addEventDialog.value?.showModal()}
                            class='flex flex-row items-center space-x-2 hover:bg-slate-400 rounded-3xl px-4'>
                        <ion-icon name="add-outline"></ion-icon>
                        <p>New post</p>
                    </button>
                    <button class='flex flex-row items-center space-x-2 hover:bg-slate-400 rounded-3xl px-4'>
                        <ion-icon name="radio-outline"></ion-icon>
                        <p>Manage connections</p>
                    </button>
                </div>
            </div>
            <div class='flex flex-row w-full '>
                {postPanelOpen.value ?
                    <div class='text-center basis-1/4'>
                        <ion-icon className='text-6xl mb-4' name="duplicate-outline"></ion-icon>
                        <p class='text-xl text-black font-bold'>
                            Store ideas as <br/> unscheduled posts
                        </p>
                        <p class='text-sm text-slate-700'>
                            Drag and drop posts to fill <br/>your calendar
                        </p>
                        <ion-icon
                            class='text-3xl mt-2 cursor-pointer'
                            onClick$={() => addPostDialog.value?.showModal()}
                            name="add-circle-outline">

                        </ion-icon>
                    </div>

                    : null
                }
                <div class='w-full transition-all ease-in-out delay-150 duration-300'>
                    <QCalendar/>
                </div>

            </div>
        </div>
    )
})