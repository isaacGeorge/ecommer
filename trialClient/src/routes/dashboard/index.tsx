import {component$, useContext} from "@builder.io/qwik";
import {AuthUserContextId} from "~/routes/layout";
import {Link} from "@builder.io/qwik-city";

export default component$(() => {
    const authUser = useContext(AuthUserContextId)

    return (
        <div>
            {authUser.value ? <button type='button'>Checkout</button> : <Link href={'/login'}><button type='button'>Login first</button></Link>}
        </div>
    )
})