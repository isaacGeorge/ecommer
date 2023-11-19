import {component$, Slot} from "@builder.io/qwik";

export default component$(()=>{
    return(
        <div>
            return <Slot />;
        </div>
    )
})