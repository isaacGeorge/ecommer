import {component$} from "@builder.io/qwik";

export default component$(() => {
    return (
        <div class='min-h-screen grid place-items-center'>
            {/*<p class='bg-slate-500 px-4 py-2 rounded-full'>Hello im in middle</p>*/}
            <div class='grid grid-cols-3 gap-1 hover:animate-bounce animate-pulse'>
                <div class='h-10 w-10 bg-pink-700'></div>
                <div class='h-10 w-10 bg-pink-700'></div>
                <div class='h-10 w-10 bg-pink-700'></div>
                <div class='h-10 w-10 bg-pink-700'></div>
                <div class='h-10 w-10 bg-pink-700'></div>
                <div class='h-10 w-10 bg-pink-700'></div>
                <div class='h-10 w-10 bg-pink-700'></div>
                <div class='h-10 w-10 bg-pink-700'></div>
            </div>
        </div>
    )
})