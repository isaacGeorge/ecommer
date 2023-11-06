import {component$, useContext} from "@builder.io/qwik";
import {Link} from "@builder.io/qwik-city";
import {PriceType, ProductsContextId} from "~/routes/layout";

export interface ProductProps {
    name: string
    category: string
    price: PriceType
    image: string
    _id: string
}

export default component$<ProductProps>((props) => {

    const products = useContext(ProductsContextId);
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (

        <div class=' bg-white  shadow-xl rounded-md overflow-hidden'>
            <div class=''>
                <img height='0' width='0' class='!w-full object-cover object-top !h-[200px]' src={props.image} alt={props.name}/>
            </div>

            <Link href={`/products/${props._id}`} class='p-4 text-black/60 block '>
                <p class='text-xs text-orange-500 font-semibold mt-3'>{props.category}</p>
                <p class='text-sm font-semibold'>{props.name}</p>
                <p class='text-2xl font-semibold'>{props.price.currency} : {props.price.amount}</p>
            </Link>

        </div>
    )
})