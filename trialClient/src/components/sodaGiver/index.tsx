import {component$, Signal} from "@builder.io/qwik";


interface GiverSodaProps {
    gotSodaSignal: Signal<boolean>
}

export default component$((props: GiverSodaProps) => {


    return (
        <div>
            <button
                onclick$={() => props.gotSodaSignal.value = true}
                class='rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none  active:text-indigo-500'

            >

                Give Soda
            </button>

        </div>
    )
})