import {component$} from "@builder.io/qwik";
import ImageSlider from "~/components/image-slider";

export default component$(() => {
    return (
        <div class='min-h-screen'>
            <div class='container mx-auto '>
                <header class='bg-blue-900 text-white p-4 flex justify-between sticky top-0
z-10'>
                    <p class='text-3xl font-bold'>EN</p>
                    <ul class='flex space-x-4'>
                        <li>Home</li>
                        <li>Contact us</li>
                        <li>Buy</li>
                        <li>Build</li>
                        <li>Sell</li>
                    </ul>
                </header>
            </div>
        </div>
    )
})