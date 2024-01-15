import {
    $,
    component$,
    createContextId,
    PropFunction,
    Signal,
    useContextProvider,
    useSignal,
    useTask$, useVisibleTask$
} from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import MyComponent from "~/components/myComponent";
import SodaGiver from "~/components/sodaGiver";
import Isaac from "~/components/isaac";
import Colors from "~/components/colors";
import Emojis from "~/components/emojis/emojis";
import {Link} from "@builder.io/qwik-city";


const goodbye$ = $(() => alert('Goodbye'))
export const ColorContextId = createContextId<Signal<string>>('COLOR');
export const SelectedEmojiContextId = createContextId<Signal<string>>('SELECTEDEMOJI');
export const IsColorPanelOpenId = createContextId<Signal<boolean>>('COLORPANEL')
export const IsEmojiPanelOpenId = createContextId<Signal<boolean>>('EMOJIPANEL')
export const ReactedContextId = createContextId<Signal<boolean>>('REACTED')


export default component$(() => {
    const color = useSignal<string>("");
    const emoji = useSignal<string>("☻");
    const isColorPanelOpen = useSignal(false);
    const isEmojiPanelOpen = useSignal(false);
    const reacted = useSignal(false)
    useContextProvider(ColorContextId, color);
    useContextProvider(SelectedEmojiContextId, emoji);
    useContextProvider(IsColorPanelOpenId, isColorPanelOpen)
    useContextProvider(IsEmojiPanelOpenId, isEmojiPanelOpen)
    useContextProvider(ReactedContextId, reacted)
    const message = useSignal("Isaac");
    const showSoda = useSignal(false)
    const isIsaacVisibleSignal = useSignal(false)
    const didHeGetASodaSignal = useSignal(false)


    const isMute = useSignal(true)
    const captionOn = useSignal(false)
    const VideoOn = useSignal(false)
    const isHandRaised = useSignal(false)
    const reactionOn = useSignal(false)

    const emojiWrapper = useSignal<HTMLDivElement>()
    const colorWrapper = useSignal<HTMLDivElement>()
    const selectedEmojiWraper = useSignal<HTMLDivElement>()


    useVisibleTask$(({track}) => {
        track(() => isEmojiPanelOpen.value)
        if (isEmojiPanelOpen.value) {
            //     add transition styles

            emojiWrapper.value?.classList.add('translate-y-[20vh]', 'opacity-100')
            emojiWrapper.value?.classList.remove('translate-y-[200px]', 'opacity-0')
            // setTimeout(()=>isEmojiPanelOpen.value = false, 1000)
        } else {
            //     remove transition styles
            emojiWrapper.value?.classList.remove('translate-y-[20vh]', 'opacity-100')
            emojiWrapper.value?.classList.add('translate-y-[200px]', 'opacity-0')
        }
    })

    useVisibleTask$(({track}) => {
        track(() => isColorPanelOpen.value)
        if (isColorPanelOpen.value) {
            //     add classes
            colorWrapper.value?.classList.add('scale-105', 'opacity-100')
            colorWrapper.value?.classList.remove('scale-0', 'opacity-0')
        } else {
            //     remove classes
            colorWrapper.value?.classList.add('scale-0', 'opacity-0')
            colorWrapper.value?.classList.remove('scale-105', 'opacity-100')
        }
    })

    useVisibleTask$(({track}) => {
        track(() => reacted.value)
        if (reacted.value) {
            selectedEmojiWraper.value?.classList.add('translate-y-[50px]', 'opacity-0');
            selectedEmojiWraper.value?.classList.remove('translate-y-[420px]', 'opacity-100');
            setTimeout(() => {
                selectedEmojiWraper.value?.classList.remove('translate-y-[50px]', 'opacity-0');
                selectedEmojiWraper.value?.classList.add('translate-y-[420px]', 'opacity-100');
                reacted.value = !reacted.value
            }, 3000)
            // } else {
            //     selectedEmojiWraper.value?.classList.remove('translate-y-[50px]', 'opacity-0')
            //     selectedEmojiWraper.value?.classList.add('translate-y-[420px]', 'opacity-100')

        }
    })

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
            <Link href='/schedule'>
                Schedule
            </Link>
            <div ref={selectedEmojiWraper}
                 class='text-5xl absolute translate-y-[420px] opacity-100 transition  duration-[3000ms]'>
                {emoji.value}
            </div>
            <div class='flex flex-col items-center justify-center max-w-full'>
                {/*<div*/}
                {/*    class='text-[200px]'*/}
                {/*    style={`width: 200px; height: 200px; color: ${color.value}`}>*/}
                {/*    {emoji.value}*/}
                {/*</div>*/}
                <div class='bg-auto bg-no-repeat bg-center ' style=' height: 200px;'>
                    <img
                        width='200'
                        height='200'
                        src='https://img.freepik.com/premium-photo/close-up-young-successful-man-smiling-front-standing-casual-outfit-against-blue-wall_1258-43431.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702598400&semt=ais'/>

                </div>


                {isEmojiPanelOpen.value ?
                    <div ref={colorWrapper}
                         class='absolute bottom-40 scale-0 opacity-0 transition ease-[cubic-bezier(.53,-0.01,.1,1)] delay-75 duration-300 origin-bottom-right'>
                        <Colors/>
                    </div>
                    : null
                }

                <div ref={emojiWrapper}
                     class='flex flex-col space-y-4 translate-y-[200px] transition ease-in-out delay-50 duration-300  origin-top-left opacity-0 '>
                    <Emojis/>
                </div>
            </div>

            <section
                class='flex items-center justify-center space-x-4 w-screen bg-[#18181B] border-gray-50 absolute bottom-0 left-0 p-6 text-3xl z-50'>
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
                    <ion-icon onClick$={() => isEmojiPanelOpen.value = !isEmojiPanelOpen.value} name="happy"></ion-icon>

                </div>
                <div

                    class={`bg-gray-600 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer`}>
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


            {/*<div ref={emojiWrapper}*/}
            {/*    class={`flex items-center justify-center w-full absolute left-0 z-40 translate-y-[250px] transition ease-in-out delay-50 duration-300  origin-top-left opacity-0  `}*/}

            {/*>*/}

            {/*    <Emojis/>*/}
            {/*</div>*/}

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
