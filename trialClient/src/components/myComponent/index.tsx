import {component$, PropFunction} from "@builder.io/qwik";

export interface MycomponentProps {
    goodbye$: PropFunction<()=> void>;
    hello$: PropFunction<(name: string)=> void >;
}
export default component$((props: MycomponentProps)=>{
    return(
        <>
            <h1>Hello am from another world</h1>
            <button onClick$={props.goodbye$}>goodbye</button>
            <button onClick$={async ()=> await props.hello$('world')}>hello</button>
        </>
    )
})