import {component$} from "@builder.io/qwik";
import Image from '~/images/larm-rmah-R1Ku62Z7zqE-unsplash.jpeg?jsx';

export default component$(() => {
    return (
        <div>

            <div id="controls-carousel" class="relative w-full" data-carousel="static">
                {/*<!-- Carousel wrapper*/}
                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {/*Item 1*/}
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://images.unsplash.com/photo-1575939238474-c8ada13b2724?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                             class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                             alt="..."
                             width='100'
                             height='100'
                        />

                    </div>
                    {/*Item 2*/}
                    <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                        <img src="https://images.unsplash.com/photo-1612731486606-2614b4d74921?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80"
                             class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                             alt="..."
                             width='100'
                             height='100'
                        />
                    </div>
                    {/*Item 3*/}
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://images.unsplash.com/photo-1516763296043-f676c1105999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2043&q=80"
                             class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                             alt="..."
                             width='1920'
                             height='1080'
                        />
                    </div>
                    {/*Item 4*/}
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://images.unsplash.com/photo-1538329972958-465d6d2144ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                             class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                             alt="..."
                             width='1920'
                             height='1080'
                        />
                    </div>
                    {/*Item 5*/}
                    {/*<div class="hidden duration-700 ease-in-out" data-carousel-item>*/}
                    {/*    <img src="https://images.unsplash.com/photo-1575939238474-c8ada13b2724?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"*/}
                    {/*         alt="..."*/}
                    {/*         width='100'*/}
                    {/*         height='100'*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>
                {/*Slider controls*/}
                <button type="button"
                        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-prev>
        <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
                </button>
                <button type="button"
                        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-next>
        <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
                </button>
            </div>

        </div>
    )
})