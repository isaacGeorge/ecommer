import {$, component$, useContext, useSignal, useTask$, useVisibleTask$} from "@builder.io/qwik";
import client from "~/api/feathersAPI";
import {useNavigate} from "@builder.io/qwik-city";
import {AuthUserContextId} from "~/routes/layout";

export default component$(() => {
    const hours = useSignal<number>(0)
    const minutes = useSignal<number>(0)
    const seconds = useSignal<number>(0)
    const navigate = useNavigate()
    const authUser = useContext(AuthUserContextId)

    // useVisibleTask$(() => {
    //     const myDate = $(() => {
    //         const fullDate = new Date();
    //         hours.value = fullDate.getHours()
    //         minutes.value = fullDate.getMinutes()
    //         seconds.value = fullDate.getSeconds()
    //
    //     });
    //     setInterval(myDate, 1000)
    // })

    useVisibleTask$(async () => {

        try {
            const x = await client.reAuthenticate()
            console.log(x)

        } catch (error) {
            await navigate('/login');
        }


    })


    const handleLogout = $(async () => {
        try {
            await client.logout()
            await navigate("/login")
        } catch (e) {
            console.log(e)
        }
    })


    return (
        <>
            {/*<p>{hours.value} : {`${minutes.value < 9 ? "0" + minutes.value : minutes.value}`}: {seconds.value}</p>*/}
            <h1>Hello, welcome</h1>
            <button type="button" onclick$={handleLogout}>Log out</button>

        </>
    )
})