import {component$} from "@builder.io/qwik";
import {Link} from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <div class='flex flex-col items-center space-y-4 p-20 text-gray-600'>

            {/*pop up*/}


            <p class='text-3xl font-bold'>Let's get your socials connected</p>
            <p class='text-center'> Connecting your social media channels will allow you to publish scheduled<br/>
                posts to those channels quickly and easily</p>

            <Link
                class="w-fit group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 mb-10"
                href="/calendar"
            >
                <span class="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
                    Skip for now
                </span>

            </Link>
            <div class='w-40% flex flex-col space-y-4'>
                <div class='flex flex-row items-center justify-between   border-2 border-slate-300 rounded-2xl p-5'>
                    <div class='flex items-center space-x-4'>
                        <svg height="100%"
                             class='w-9'
                             style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
                             version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve"
                             xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/"
                             xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M512,256c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z" style="fill:#1877f2;fill-rule:nonzero;"/><path
                            d="M355.65,330l11.35,-74l-71,0l0,-48.022c0,-20.245 9.917,-39.978 41.719,-39.978l32.281,0l0,-63c0,0 -29.297,-5 -57.305,-5c-58.476,0 -96.695,35.44 -96.695,99.6l0,56.4l-65,0l0,74l65,0l0,178.89c13.033,2.045 26.392,3.11 40,3.11c13.608,0 26.966,-1.065 40,-3.11l0,-178.89l59.65,0Z"
                            style="fill:#fff;fill-rule:nonzero;"/></g></svg>
                        <p>Facebook</p>
                    </div>
                    <div class='flex flex-row items-center space-x-3'>
                        <ion-icon name="close-circle-outline"></ion-icon>
                        <p>Not connected</p>

                    </div>
                    <div>
                        <butto class="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4">
                            connect
                        </butto>
                        <ion-icon class='cursor-pointer ' name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                {/*    instagram*/}

                <div class='flex flex-row items-center justify-between   border-2 border-slate-300 rounded-2xl p-5'>
                    <div class='flex items-center space-x-4'>
                        <svg height="100%"
                             class='w-9'
                             style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
                             version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve"
                             xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/"
                             xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M512,256c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z" style="fill:#1877f2;fill-rule:nonzero;"/><path
                            d="M355.65,330l11.35,-74l-71,0l0,-48.022c0,-20.245 9.917,-39.978 41.719,-39.978l32.281,0l0,-63c0,0 -29.297,-5 -57.305,-5c-58.476,0 -96.695,35.44 -96.695,99.6l0,56.4l-65,0l0,74l65,0l0,178.89c13.033,2.045 26.392,3.11 40,3.11c13.608,0 26.966,-1.065 40,-3.11l0,-178.89l59.65,0Z"
                            style="fill:#fff;fill-rule:nonzero;"/></g></svg>
                        <p>Facebook</p>
                    </div>
                    <div class='flex flex-row items-center space-x-3'>
                        <ion-icon name="close-circle-outline"></ion-icon>
                        <p>Not connected</p>

                    </div>
                    <div>
                        <butto className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4">
                            connect
                        </butto>
                        <ion-icon className='cursor-pointer ' name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                {/*    twitter*/}

                <div class='flex flex-row items-center justify-between   border-2 border-slate-300 rounded-2xl p-5'>
                    <div class='flex items-center space-x-4'>
                        <svg height="100%"
                             class='w-9'
                             style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
                             version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve"
                             xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/"
                             xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M512,256c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z" style="fill:#1877f2;fill-rule:nonzero;"/><path
                            d="M355.65,330l11.35,-74l-71,0l0,-48.022c0,-20.245 9.917,-39.978 41.719,-39.978l32.281,0l0,-63c0,0 -29.297,-5 -57.305,-5c-58.476,0 -96.695,35.44 -96.695,99.6l0,56.4l-65,0l0,74l65,0l0,178.89c13.033,2.045 26.392,3.11 40,3.11c13.608,0 26.966,-1.065 40,-3.11l0,-178.89l59.65,0Z"
                            style="fill:#fff;fill-rule:nonzero;"/></g></svg>
                        <p>Facebook</p>
                    </div>
                    <div class='flex flex-row items-center space-x-3'>
                        <ion-icon name="close-circle-outline"></ion-icon>
                        <p>Not connected</p>

                    </div>
                    <div>
                        <butto className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4">
                            connect
                        </butto>
                        <ion-icon className='cursor-pointer ' name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
                <div class='bg-slate-200  p-5 rounded-2xl flex flex-col space-y-4'>
                    <p class='font-bold text-sm text-black'>Need help getting connected</p>

                    <p class='text-sm'>Class porta minim in, quam, rutrum fermentum et pharetra praesent! Culpa blandit,
                        vero sem iusto fringilla lorem, tempor aenean? Tortor. fugiat voluptatibus, dolorum</p>
                    <butto
                        class='border-2 border-black px-4 py-1 text-black font-bold inline-block rounded-full w-fit cursor-pointer'>Help
                    </butto>
                </div>
            </div>
        </div>
    )
})