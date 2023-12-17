import {$, component$, useSignal} from "@builder.io/qwik";
import client from "~/api/feathersAPI";
import {useNavigate} from "@builder.io/qwik-city";
import {isServer} from "@builder.io/qwik/build";

export default component$(() => {

    const name = useSignal("")
    const email = useSignal("")
    const password = useSignal("")
    const navigate = useNavigate()

    const handleSignUp = $( async ()=>{
        try{
            const formData = {name: name.value, email: email.value, password: password.value}
            await client.service("users").create(formData);
            await client.authenticate({...formData, strategy: "local"});
            name.value = "";
            password.value = "";
            email.value = "";
            if(!isServer){
                await navigate("/profile")
            }

        } catch (e) {
            console.log(e)
        }
    })
    return (
        <div>
            <p>Sign up here</p>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" bind:value={name}/>
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" bind:value={email}/>
                <label for="lname">Password:</label>
                <input type="password" id="password" name="lname" bind:value={password}/>
               <button onclick$={handleSignUp} type="button">Sign up</button>
            </form>
        </div>
    )
})