import {component$, Slot, useSignal, useTask$} from "@builder.io/qwik";
import React from "react";
import props from "~/routes/props";
// import {LuRocket} from "@qwikest/icons/lib/icons/lu/lu";

export interface DialogProps{
    open: boolean
}

export default component$((Props: DialogProps) => {
    const myDialog = useSignal<HTMLDialogElement>()
    useTask$(({track})=>{
        track(()=>Props.open)
        if(Props.open){
            myDialog.value?.showModal()
        } else{myDialog.value?.close()}
    })
    return (
        <div class='grid place-items-center min-h-screen '>

            <dialog class='rounded-2xl' ref={myDialog}>
                <Slot />
            </dialog>
        </div>
    )
})