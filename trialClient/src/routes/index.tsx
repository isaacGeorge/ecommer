import {
    $,
    component$,
    createContextId,
    PropFunction,
    Signal,
    useContextProvider,
    useSignal,
    useTask$
} from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import MyComponent from "~/components/myComponent";
import SodaGiver from "~/components/sodaGiver";
import Isaac from "~/components/isaac";
import Colors from "~/components/colors";
import Emojis from "~/components/emojis/emojis";


const goodbye$ = $(() => alert('Goodbye'))
export const ColorContextId = createContextId<Signal<string>>('COLOR');
export const SelectedEmojiContextId = createContextId<Signal<string>>('SELECTEDEMOJI');


export default component$(() => {
    const color = useSignal<string>("");
    const emoji = useSignal<string>("mic");
    useContextProvider(ColorContextId, color);
    useContextProvider(SelectedEmojiContextId, emoji);
    const message = useSignal("Isaac");
    const showSoda = useSignal(false)
    const isIsaacVisibleSignal = useSignal(false)
    const didHeGetASodaSignal = useSignal(false)

    const isColorPanelOpen = useSignal(false)
    const isMute = useSignal(true)
    const captionOn = useSignal(false)
    const VideoOn = useSignal(false)
    const isHandRaised = useSignal(false)
    const reactionOn = useSignal(false)


    useTask$(({track}) => {
        track(() => didHeGetASodaSignal.value);
        if (didHeGetASodaSignal.value) {
            isIsaacVisibleSignal.value = true;
        }
    })

    return (
        <div class="container p-20 bg-[#18181B] max-w-full h-screen text-slate-100">
            <p class='text-6xl'>Hello there</p>

            {isIsaacVisibleSignal.value ?
                <Isaac/>
                : null
            }

            <SodaGiver gotSodaSignal={didHeGetASodaSignal}/>
            <div class='flex flex-col items-center justify-center max-w-full'>
                {/*<div style={`width: 200px; height: 200px; background-color: ${color.value}`}>*/}
                {/*    <ion-icon name={emoji.value}></ion-icon>*/}
                {/*</div>*/}

                <div
                    class='text-[200px]'
                    style={`width: 200px; height: 200px; background-color: ${color.value}`}>
                    <ion-icon name={emoji.value}></ion-icon>
                </div>
            </div>

            <section
                class='flex items-center justify-center space-x-4 w-screen bg-transparent border-gray-50 absolute bottom-0 left-0 p-6 text-3xl z-50'>
                <div
                    onClick$={() => isMute.value = !isMute.value}
                    class={`${isMute.value ? "bg-gray-600" : "bg-red-700"} rounded-full w-12 h-12 flex items-center justify-center cursor-pointer`}>
                    <ion-icon name={`${isMute.value ? "mic" : "mic-off"}`}></ion-icon>
                </div>
                {/*<div class='bg-red-700 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer'>*/}
                {/*    <ion-icon name="mic-off"></ion-icon>*/}
                {/*</div>*/}
                <div
                    onClick$={() => VideoOn.value = !VideoOn.value}
                    class={`${VideoOn.value ? "bg-gray-600" : "bg-red-700"} rounded-full w-12 h-12 flex items-center justify-center cursor-pointer`}>
                    <ion-icon name={`${VideoOn.value ? "videocam" : "videocam-off"}`}></ion-icon>
                </div>
                {/*<div class='bg-red-700 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer'>*/}
                {/*    <ion-icon name="videocam-off"></ion-icon>*/}
                {/*</div>*/}

                <div
                    onClick$={() => reactionOn.value = !reactionOn.value}
                    class={`${reactionOn.value ? "bg-blue-400 text-gray-900" : "bg-gray-600"} rounded-full w-12 h-12 flex items-center justify-center cursor-pointer`}
                >
                    <ion-icon name="logo-closed-captioning"></ion-icon>
                </div>
                <div class='bg-gray-600 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer'>
                    <ion-icon onClick$={() => isColorPanelOpen.value = !isColorPanelOpen.value} name="happy"></ion-icon>

                </div>
                <div

                    class={`bg-gray-600 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer`}>
                    {/*<ion-icon name={`${isHandRaised.value ? "hand-right" : "hand-right-outline"}`}></ion-icon>*/}
                    <ion-icon name="share"></ion-icon>
                </div>
                <div
                    onClick$={() => isHandRaised.value = !isHandRaised.value}
                    class={`${isHandRaised.value ? "bg-blue-400 text-gray-900" : "bg-gray-600"} rounded-full w-12 h-12 flex items-center justify-center cursor-pointer`}>
                    <ion-icon name={`${isHandRaised.value ? "hand-right" : "hand-right-outline"}`}></ion-icon>
                </div>
                <div class='bg-gray-600 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer'>
                    <ion-icon name="ellipsis-vertical"></ion-icon>
                </div>
                <div class='bg-red-700 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer'>
                    <ion-icon name="call"></ion-icon>
                </div>


            </section>
            {isColorPanelOpen.value ?
                <div
                    class={`flex items-center justify-center w-full transition ease-in-out delay-150  absolute  left-0 z-40 ${isColorPanelOpen.value ? "bottom-[95px]" : "bottom-10"}   `}>
                    <Emojis/>
                </div>
                : null

            }

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
