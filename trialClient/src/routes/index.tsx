import {$, component$, PropFunction} from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import MyComponent from "~/components/myComponent";

const goodbye$ = $(()=> alert('Goodbye'))
export default component$(() => {
    return (
        <>
            <h1>Hi 👋</h1>
            <p>
                Can't wait to see what you build with qwik!
                <br/>
                Happy coding.
            </p>
            <MyComponent goodbye$={goodbye$} hello$={async (name)=> alert('Hello' + name)}/>
        </>
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
