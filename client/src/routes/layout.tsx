import {
    component$,
    createContextId,
    Signal,
    Slot,
    useContextProvider,
    useSignal,
    useStore, useTask$,
    useVisibleTask$
} from "@builder.io/qwik";
import type {RequestHandler} from "@builder.io/qwik-city";
import MainNavbar from "~/components/main-navbar";
import {routeLoader$} from "@builder.io/qwik-city";
import client from "~/api/feathersAPI";
import Footer from "~/components/footer";
import {log} from "util";

export const onGet: RequestHandler = async ({cacheControl}) => {
    // Control caching for this request for best performance and to reduce hosting costs:
    // https://qwik.builder.io/docs/caching/
    cacheControl({
        // Always serve a cached response by default, up to a week stale
        staleWhileRevalidate: 60 * 60 * 24 * 7,
        // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
        maxAge: 5,
    });
};

export interface PriceType{
    currency: string,
    amount: number
}


export interface ProductsType {
    "_id": string
    "name": string
    "shortDescription"?: string
    "longDescription"?: string
    "price": PriceType
    "category": CategoryType
    "image": string
}


export interface CategoryType {
    "name": string
    "_id": string
}

export interface CartItem {
    "_id": string
    "name"?: string
    "qty": number
    "shortDescription"?: string
    "longDescription"?: string
    "price"?: PriceType
    "category"?: CategoryType
    "image"?: string


}

export const useProductsData = routeLoader$<ProductsType[]>(async () => {
    try {
        const productService = client.service('products');
        const {data} = await productService.find();
        productService.on("created", (newProduct)=> {
            console.log(newProduct)
        })
        return data;
    } catch (e) {
        console.log(e)
    }
});

export const useCategoriesData = routeLoader$<CategoryType[]>(async () => {
    try {
        const {data} = await client.service('categories').find();
        return data;
    } catch (e) {
        console.log(e)
    }
})

export const ProductsContextId = createContextId<Signal <ProductsType[]>>('products');
export const CategoryContextId = createContextId<Signal <CategoryType[]>>('categories');
export const QueryContextId = createContextId<Signal<string>>("query");
export const QtyContextId = createContextId<Signal<number>>("qty");
export const CartContextId = createContextId<Signal<CartItem[]>>("cart")

export default component$(() => {
//////////////// Variables
    const products = useProductsData();
    const categories = useCategoriesData();
    const query = useSignal<string>("");
    const qty = useSignal<number>(1);
    const cart = useSignal<CartItem[]>([])

/////////////////Context providers declarations
    useContextProvider(ProductsContextId, products);
    useContextProvider(CategoryContextId, categories)
    useContextProvider(QueryContextId, query);
    useContextProvider(QtyContextId, qty);
    useContextProvider(CartContextId, cart);

    useVisibleTask$(() => {
        // when reload === initialize cart from localStorage
        const localStorageCart = localStorage.getItem('cart')
        if (localStorageCart) {
            cart.value = JSON.parse(localStorageCart)
        }
    })

    client.service('categories').on('created', (data) => {
        console.log('Got created event', data)
    })

    useTask$(({track}) => {
        // A task without `track` any state effectively behaves like a `on mount` hook.
        track(()=> categories.value)
        console.log('Runs once when the component mounts in the server OR client.');

    });
    return (
        <div>
            <MainNavbar/>
            <Slot/>
            <Footer/>
        </div>
    );
});
