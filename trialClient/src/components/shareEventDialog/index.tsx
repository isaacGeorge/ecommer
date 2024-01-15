import React from "react";
import {component$, PropFunction, QRL, useSignal} from "@builder.io/qwik";
import Dialog from "~/components/dialog";
import {LuRocket} from "@qwikest/icons/lucide";


export interface DialoInfoProps {
    close$: QRL<PropFunction<() => {}>>
    open: boolean
}

export default component$((Props: DialoInfoProps) => {
    // const open = useSignal<boolean>(false)
    return (
        <div>
            <Dialog open={Props.open}>
                <div class='bg-white max-w-md rounded-2xl p-8 relative'>
                    <button
                        onClick$={Props.close$}
                        class='bg-white max-w-md rounded-2xl p-8 absolute -top-2 -right-2 bg-purple-300 shadow-2xl rounded-full grid place-items-center w-10 h-10 z-[20000px]'
                    >x
                    </button>
                    <p>Here is heading</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, et ex exercitationem
                        impedit minima numquam qui quia quos sapiente sequi. Ab ad animi dignissimos eos expedita
                        laboriosam molestias quis quisquam vel, voluptates. Consequatur inventore laudantium neque,
                        obcaecati quaerat ullam vitae. Asperiores aspernatur culpa, delectus deleniti dolorem ducimus
                        fugiat impedit inventore ipsam laudantium minus nulla officia optio perferendis placeat
                        quibusdam recusandae repellat repudiandae similique, voluptates. Ad fuga impedit magnam officia
                        optio quos reprehenderit tenetur voluptatum.</p>
                    <div style={{color: "red", fontSize: "40px"}}>
                        <LuRocket/>
                    </div>



                </div>
            </Dialog>
        </div>
    )
})