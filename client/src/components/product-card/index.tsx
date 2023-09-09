import {component$, useContext} from "@builder.io/qwik";
import {Link} from "@builder.io/qwik-city";
import {ProductsContextId} from "~/routes/layout";

interface ProductProps {
    name: string
    category: string
    price: string
    image: string
    _id: string
}

export default component$<ProductProps>((props) => {

    const products = useContext(ProductsContextId);
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (

        <div class='grid bg-white  shadow-xl rounded-md overflow-clip'>
            <div class='w-full h-[200px]'>
                <img height='400' width='400' class='w-full h-full object-cover object-top' src={props.image} alt={props.name}/>
            </div>

            <Link href={`/products/${props._id}`} class='flex flex-col p-4 text-black/60 cursor-pointer '>
                <p class='text-xs text-orange-500 font-semibold mt-3'>{props.category}</p>
                <p class='text-sm font-semibold'>{props.name}</p>
                <p class='text-2xl font-semibold'>{props.price}</p>
            </Link>

        </div>
    )
})