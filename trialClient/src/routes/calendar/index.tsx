import {component$, useSignal} from "@builder.io/qwik";
import {QCalendar} from "~/components/react";


export default component$(() => {
    const addEventDialog = useSignal<HTMLDialogElement>()
    return (
        <div class='p-10'>
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
                                id="inline-full-name" type="text" value="e.g...12" />
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
                                id="inline-password" type="text" placeholder="e.g,,14" />
                        </div>
                    </div>

                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3"></div>
                        <div class="md:w-2/3 flex-row space-x-4">
                            <button
                                onClick$={()=>addEventDialog.value?.close()}
                                class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="button">
                                create
                            </button>
                            <button
                                onClick$={()=>addEventDialog.value?.close()}
                                class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="button">
                                cancel
                            </button>
                        </div>
                    </div>
                </form>

            </dialog>
            <div class='flex flex-row justify-between mb-12 sticky top-0 bg-white pb-12 pt-4 z-50 shadow-md px-4 rounded-md'>
                <p class='text-3xl font-bold'>Schedule</p>
                <div class='flex flex-row space-x-4'>
                    <button  onclick$={() => addEventDialog.value?.showModal()} class='flex flex-row items-center space-x-2 hover:bg-slate-400 rounded-3xl px-4'>
                        <ion-icon name="add-outline"></ion-icon>
                        <p>New post</p>
                    </button>
                    <button class='flex flex-row items-center space-x-2 hover:bg-slate-400 rounded-3xl px-4'>
                        <ion-icon name="radio-outline"></ion-icon>
                        <p>Manage connections</p>
                    </button>
                </div>
            </div>
            <QCalendar/>
        </div>
    )
})