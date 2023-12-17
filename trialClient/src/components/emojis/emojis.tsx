import {component$, useContext, useSignal} from "@builder.io/qwik";
import Colors from "~/components/colors";
import {ColorContextId, SelectedEmojiContextId} from "~/routes";

export default component$(() => {
    const color = useContext(ColorContextId);
    const selectedEmoji = useContext(SelectedEmojiContextId);
    const isColorpanelOpen = useSignal(false)
    // const color = useSignal("black");

    const emojiLibrary = useSignal(["🥺", "👍", "🥰", "😁", "🥶", "😡", "👎"])
    return (
        <div class='flex flex-col items-end'>
            {isColorpanelOpen.value ?
                <div class='mb-4'>
                    <Colors onChangeColor$={(value: string) => color.value = value}/>
                </div>
                : null
            }
            <div class="flex flex-row space-x-4">
                <div class='flex flex-row align-baseline   bg-zinc-800 w-fit  rounded-full shadow-xl text-2xl'>
                    {/*<div*/}
                    {/*    class={`rounded-full hover:bg-zinc-700 w-10 h-10  cursor-pointer flex items-center justify-center m-auto `}>*/}
                    {/*    🥺*/}
                    {/*</div>*/}
                    {/*<div*/}
                    {/*    class={`rounded-full hover:bg-zinc-700 w-10 h-10  cursor-pointer flex items-center justify-center `}>*/}
                    {/*    👍*/}
                    {/*</div>*/}
                    {/*<div*/}
                    {/*    class={`rounded-full hover:bg-zinc-700 w-10 h-10  cursor-pointer flex items-center justify-center `}>*/}
                    {/*    🥰*/}
                    {/*</div>*/}
                    {/*<div*/}
                    {/*    class={`rounded-full hover:bg-zinc-700 w-10 h-10  cursor-pointer flex items-center justify-center `}>*/}
                    {/*    😁*/}
                    {/*</div>*/}
                    {/*<div*/}
                    {/*    class={`rounded-full hover:bg-zinc-700 w-10 h-10  cursor-pointer flex items-center justify-center `}>*/}
                    {/*    🥶*/}
                    {/*</div>*/}
                    {/*<div*/}
                    {/*    class={`rounded-full hover:bg-zinc-700 w-10 h-10  cursor-pointer flex items-center justify-center `}>*/}
                    {/*    😡*/}
                    {/*</div>*/}
                    {/*<div*/}
                    {/*    class={`rounded-full hover:bg-zinc-700 w-10 h-10  cursor-pointer flex items-center justify-center `}>*/}
                    {/*    👎*/}
                    {/*</div>*/}


                    {emojiLibrary.value.map((emoji)=>{
                        return(
                            <div class='cursor-pointer' onclick$={()=>selectedEmoji.value = emoji}>{emoji}</div>
                        )
                    })}

                </div>
                <div
                    class={`rounded-full hover:bg-zinc-800 w-10 h-10  cursor-pointer flex items-center justify-center`}
                    onclick$={() => {
                        isColorpanelOpen.value = !isColorpanelOpen.value
                    }}>
                    <div
                        class='w-4 h-4 bg-amber-200 rounded-full ring-1 ring-amber-200 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-900'>

                    </div>
                </div>
            </div>
        </div>
    )

})