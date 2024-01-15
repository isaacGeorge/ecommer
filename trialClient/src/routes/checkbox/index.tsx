import {$, component$, useSignal, useStore, useStylesScoped$} from "@builder.io/qwik";
import {
    FlatColorIconsClapperboard,
    FlatColorIconsHome,
    IonCheckmarkRound,
    IonChevronDownOutline, IonClose
} from "~/components/icons";
import FacebookImg from '~/media/facebook.png?jsx';
import InstagramImg from '~/media/insta.png?jsx';
import XImg from '~/media/X.png?jsx';
import PInterestImg from '~/media/pinterest.png?jsx';
import LinkedinImg from '~/media/link.png?jsx';
import TiktokImg from '~/media/tiktok.png?jsx';


export interface NetworkConnection {
    name: string
    isConnected?: boolean
    // imgSrc?: string
}

export default component$(() => {


    const channels = useStore<NetworkConnection[]>([
        {name: "Facebook", isConnected: false},
        {name: "Instagram", isConnected: false},
        {name: "Tiktok", isConnected: false},
        {name: "Linkedin", isConnected: false},
        {name: "PInterest", isConnected: false},
        {name: "X", isConnected: false},


    ])

    const addedChannels = useStore<string[]>([])
    const checked = useSignal<boolean>(false)
    const openChannelList = useSignal(false)

    // const handleChannelListItemClick = $((channel:any, channelName:string)=>{
    //     channel.isConnected = !channel.isConnected;
    //     addedChannels.push(channelName)
    //
    // })
    return (


        <div class='flex flex-col justify-center items-center min-h-screen'>
            <div class='flex gap-1'>
                <p>Share to:</p>
                {addedChannels.map((channel, index) => {
                    return (
                        <>
                            <div key={index}
                                 class='flex gap-1 p-1 text-xs items-center bg-gray-300 rounded-full cursor-pointer '>
                                <p>{channel}</p>
                                <IonClose onClick$={() => addedChannels.pop()}></IonClose>
                            </div>
                        </>
                    )
                })}

            </div>
            <div class='flex justify-between bg-white border-2 border-slate-300 py-2 px-4 w-[500px] relative'>
                <p>Social media</p>
                <IonChevronDownOutline onClick$={() => openChannelList.value = !openChannelList.value}
                                       class='cursor-pointer'></IonChevronDownOutline>

                {openChannelList.value &&
                    <div class='bg-white shadow-2xl p-4 text-slate-700 rounded absolute top-14 -right-1.5'>
                        <div class='flex flex-col gap-4 items-center justify-between text-lg w-[500px] '>
                            {channels.map((channel, index) => {
                                return (
                                    <div key={index} class='flex flex-row justify-between w-[500px] '>
                                        <div class='flex gap-6 items-center w-1/3 '>
                                            {channel.name === 'Facebook' &&
                                                <FacebookImg class={'w-5 h-5 object-cover'}/>}
                                            {channel.name === 'Tiktok' && <TiktokImg class={'w-5 h-5 object-cover'}/>}
                                            {channel.name === 'Linkedin' &&
                                                <LinkedinImg class={'w-5 h-5 object-cover'}/>}
                                            {channel.name === 'Instagram' &&
                                                <InstagramImg class={'w-5 h-5 object-cover'}/>}
                                            {channel.name === 'X' && <XImg class={'w-5 h-5 object-cover'}/>}
                                            {channel.name === 'PInterest' && <PInterestImg class={'w-5 h-5'}/>}
                                            <label for={channel.name} class=' cursor-pointer '>{channel.name}</label>

                                        </div>

                                        <label for={channel.name}
                                               class='mr-auto cursor-pointer '>{channel.isConnected ? "Connected" : "Not connected"}</label>

                                        <div
                                            onClick$={() => {
                                                channel.isConnected = !channel.isConnected;
                                                if (channel.isConnected) {
                                                    addedChannels.push(channel.name)
                                                } else {
                                                    addedChannels.pop()
                                                }

                                            }}
                                            class='relative flex flex-row items-center'>
                                            <input
                                                class='appearance-none border-2 rounded w-6 h-6 border-blue-700 cursor-pointer'
                                                type='checkbox'

                                                id={channel.name}/>

                                            {channel.isConnected &&
                                                <IonCheckmarkRound
                                                    class={`absolute left-1 inset-y-1 ${channel.isConnected ? "opacity-100" : "opacity-0"} check-1 transition`}>

                                                </IonCheckmarkRound>}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>}
            </div>

            {/*<div class='bg-white shadow-2xl p-4 text-slate-700 rounded'>*/}


            {/*    <div class='flex flex-row gap-4 items-center justify-between text-lg w-[500px] '>*/}
            {/*        <div class='flex gap-6 items-center'>*/}
            {/*            <FlatColorIconsClapperboard/>*/}
            {/*            <label for='checkbox' class=' cursor-pointer relative'>Facebook</label>*/}
            {/*            <label for='checkbox' class='cursor-pointer relative'>connected</label>*/}
            {/*        </div>*/}
            {/*        <div class='relative flex flex-row items-center'>*/}
            {/*            <input class='appearance-none border-2 rounded w-6 h-6 border-blue-700' type='checkbox'*/}
            {/*                   id='checkbox'/>*/}
            {/*            <IonCheckmarkRound*/}
            {/*                class='absolute left-1 inset-y-1 opacity-0 check-1 transition'></IonCheckmarkRound>*/}

            {/*        </div>*/}
            {/*    </div>*/}


            {/*    <div class='flex flex-row gap-4 items-center justify-between text-lg w-[500px]'>*/}
            {/*        <div class='flex gap-6 items-center'>*/}
            {/*            <FlatColorIconsHome/>*/}
            {/*            <label for='instagram' class=' cursor-pointer relative'>Instagram</label>*/}
            {/*            <label for='instagram' class='cursor-pointer relative'>not connected</label>*/}
            {/*        </div>*/}
            {/*        <div class='relative flex flex-row items-center'>*/}
            {/*            <input class='appearance-none border-2 rounded w-6 h-6 border-blue-700' type='checkbox'*/}
            {/*                   id='home'/>*/}
            {/*            <IonCheckmarkRound*/}
            {/*                class='absolute left-1 inset-y-1 opacity-0 check-1 transition'></IonCheckmarkRound>*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
})