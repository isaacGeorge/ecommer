import {component$, useSignal} from "@builder.io/qwik";
import Dialog from "~/components/dialog";
import React from "react";
import ShareEventDialog from "~/components/shareEventDialog";
import {
    CodiconBracketError,
    PepiconsPopArrowDownLeftCircleFilled,
    VscodeIconsDefaultFolder,
    VscodeIconsFileTypeAppscript
} from "~/components/icons";


export default component$(() => {
    const openShareEventDialog = useSignal<boolean>(false)
    return (
        <div>
           <div class='text-6xl text-red-700'>
          <CodiconBracketError />
           </div>
            <button
                class='bg-purple-800 text-white px-4 py-2 rounded-full text-sm cursor-pointer'
                onClick$={() => openShareEventDialog.value = !openShareEventDialog.value}

            >
                Open Dialog
            </button>
            <ShareEventDialog open={openShareEventDialog.value} close$={() => openShareEventDialog.value = false}/>
          <VscodeIconsDefaultFolder />
        </div>
    )
})