import {component$, PropFunction, QRL, Signal, useComputed$, useSignal, useVisibleTask$} from "@builder.io/qwik";
import {PriceType} from "~/routes/layout";

type CurrencyInputArgsType = {
    onPriceChange$: QRL<PropFunction<(price: PriceType)=> void>>
}
export default component$<CurrencyInputArgsType>((props)=>{
    const currency = useSignal<string>("usd");
    const amount = useSignal<string>("0");
    useVisibleTask$(async ({track}) => {
        track(() => currency.value)
        track(() => amount.value)
        const price:PriceType = {
            currency: currency.value as string,
            amount: Number(amount.value || "0")
        }
        await props.onPriceChange$(price)
    })
    return(
        <div class="">
            <select name="currency" bind:value={currency} id="currency">
                <option value="usd">USD</option>
                <option value="ugx">UGX</option>
                <option value="euro">EURO</option>
                <option value="ksh">KSH</option>
            </select>
            <input type='number' bind:value={amount} placeholder='type amount' />
        </div>
    )
})