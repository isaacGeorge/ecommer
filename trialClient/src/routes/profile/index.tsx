import {$, component$, useSignal, useTask$, useVisibleTask$} from "@builder.io/qwik";

export default component$(() => {
    const hours = useSignal<number>(0)
    const minutes = useSignal<number>(0)
    const seconds = useSignal<number>(0)


    useVisibleTask$(()=>{
        const myDate = $(() => {
            const fullDate = new Date();
            hours.value = fullDate.getHours()
            minutes.value = fullDate.getMinutes()
            seconds.value = fullDate.getSeconds()
        });
        setInterval(myDate, 1000)
    })





    return (
        <>
            <p>{hours.value} :  {`${minutes.value < 9? "0" + minutes.value : minutes.value}` }: {seconds.value}</p>

        </>
    )
})