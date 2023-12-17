import {$, component$, useSignal} from "@builder.io/qwik";
import client from "~/api/feathersAPI";
import {useNavigate} from "@builder.io/qwik-city";
import {isServer} from "@builder.io/qwik/build";

export default component$(() => {
    const email = useSignal("")
    const password = useSignal("")
    const navigate = useNavigate()

    const handleLogin = $(async () => {
        try {
            const formData = {strategy: 'local', email: email.value, password: password.value};
            await client.authenticate(formData)
            email.value = "";
            password.value = "";
            if(!isServer){
                await navigate('/profile');
            }


        } catch (e) {
            console.log(e)
        }
    })
    return (
        <div>
            <p>Form here</p>
            <form>
                <label for="name">Email:</label>
                <input type="text" id="fname" name="name" bind:value={email}/>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" bind:value={password}/>
                <button onclick$={handleLogin} type="button">Login</button>
            </form>
        </div>
    )
})