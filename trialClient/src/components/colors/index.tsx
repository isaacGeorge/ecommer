import {component$, PropFunction, QRL, Signal, useSignal, useVisibleTask$} from "@builder.io/qwik";

export interface PropTypes {
    onChangeColor$: QRL<PropFunction<(color: string) => string>>
}

export default component$((props: PropTypes) => {
    const selectedColor = useSignal('#fec724')
    const colors = useSignal([
        '#fec724', '#e2c6a7', '#c7a786', '#a68063', '#926241', '#654c45'
    ]);


    useVisibleTask$(async ({track}) => {
        track(() => selectedColor.value)
        await props.onChangeColor$(selectedColor.value)
    })


    return (

        <div class='flex space-x-2 bg-zinc-800 w-fit p-2 rounded-full shadow-xl'>
            {colors.value.map((color) => {
                return (
                    // <div onclick$={() => selectedColor.value = color}>
                    //     <input type='radio' id={color} value={color} name={color}
                    //            checked={selectedColor.value === color}/>
                    //     <label for={color}>{color}</label>
                    // </div>

                    <div
                        onclick$={() => selectedColor.value = color}
                        style={`width: 25px; height: 25px; background-color: ${color}`}
                        class={` rounded-full ${selectedColor.value === color ? "ring-offset-2 ring-2" : null} hover:ring-offset-2 hover:ring-2 cursor-pointer`}
                    >

                    </div>
                )

            })}


        </div>


    )
})