import io from 'socket.io-client'
import {feathers} from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import {$, Signal, useContext, useSignal, useVisibleTask$} from "@builder.io/qwik";
import {CategoryType, ProductsType} from "~/routes/layout";
import {ActiveCategoryContextId} from "~/routes/admin-dashboard/layout";

const socket = io(import.meta.env.PUBLIC_BACKEND_URL)
const client = feathers()

client.configure(socketio(socket))

export default client
type Query = {
    categoryId?: string
    name?: string
}

type Params = {
    query?: Query
}

const selectedCategoryId = useContext(ActiveCategoryContextId);
export const useProducts = (selectedCategoryId: Signal<string>) => {
    const productName = useSignal("");
    const products = useSignal<ProductsType[]>([]);
    const productData = useSignal<ProductsType>();
    const findProducts = $(async (params: Params = {}) => {
        console.log(productName.value)
        try {

            if (selectedCategoryId?.value !== "") {
                params.query = {
                    ...params.query,
                    categoryId: selectedCategoryId.value,
                }
            }
            if (productName.value) {
                params.query = {
                    ...params.query,
                    name: productName.value,
                }
            }

            const {data} = await client.service('products').find(params);
            products.value = data;
        } catch (e) {
            console.log(e)
        }
    })


    const addProduct = $(async (productData: ProductsType, dialog: Signal<HTMLDialogElement>) => {
        try {

            await client.service('products').create(
                {
                    name: productData.name,
                    shortDescription: productData.shortDescription,
                    longDescription: productData.longDescription,
                    // price: {amount: Number(productData.value.price?.amount || "0"), currency: productData.value.price?.currency},
                    image: productData.image,
                    categoryId: selectedCategoryId.value
                }
            );

            dialog.value?.close()
        } catch (e) {
            console.log(e)
        }
    })

    useVisibleTask$(async ({track}) => {
        track(() => selectedCategoryId.value)
        track(() => productName.value)
        await findProducts()
    })
    return {
        findProducts,
        products,
        productName,
        selectedCategoryId,
        productData,
        addProduct
    }
}


export const useCategories = () => {
    const categories = useSignal<CategoryType[]>([])

    const findCategories = $(async () => {
        try {
            const {data} = await client.service('categories').find();
            categories.value = data;
        } catch (e) {
            console.log(e)
        }
    })

    const createCategory = $(async (newCategory: Signal<string>, dialog: Signal<HTMLDialogElement>) => {
        try {

            await client.service('categories').create(
                {name: newCategory.value}
            );

            await findCategories()
            // selectedCategoryId.value = newCategory.value
            newCategory.value = '';
            dialog.value?.close()
        } catch (e) {
            console.log(e)
        }

    })


    useVisibleTask$(async () => {
        await findCategories()
    })
    return {
        createCategory,
        categories,
        findCategories


    }
}