import {component$, useContext, useSignal} from "@builder.io/qwik";
import Colors from "~/components/colors";
import {ColorContextId, IsColorPanelOpenId, ReactedContextId, SelectedEmojiContextId} from "~/routes";

export default component$(() => {
    const color = useContext(ColorContextId);
    const selectedEmoji = useContext(SelectedEmojiContextId);
    const isColorPanelOpen = useContext(IsColorPanelOpenId)
    const reacted = useContext(ReactedContextId)
    // const color = useSignal("black");

    const emojiLibrary = useSignal(["🥺", "👍", "🥰", "😁", "🥶", "😡", "👎"])
    return (

            <div class="flex flex-row space-x-4">
                <div class='flex flex-row align-baseline   bg-zinc-800 w-fit  rounded-full shadow-xl text-2xl'>

                    {emojiLibrary.value.map((emoji)=>{
                        return(
                            <div class='cursor-pointer' onClick$={()=>{
                                selectedEmoji.value = emoji
                                reacted.value = !reacted.value

                            }}>{emoji}</div>
                        )
                    })}

                </div>
                <div
                    class={`rounded-full hover:bg-zinc-800 w-10 h-10  cursor-pointer flex items-center justify-center`}
                    onclick$={() => {
                        isColorPanelOpen.value = !isColorPanelOpen.value
                    }}>
                    <div
                        class='w-4 h-4 bg-amber-200 rounded-full ring-1 ring-amber-200 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-900'>

                    </div>
                </div>
            </div>

    )

})