import {component$, createContextId, Slot, useContextProvider} from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import MainNavbar from "~/components/main-navbar";
import {routeLoader$} from "@builder.io/qwik-city";
import client from "~/api/feathersAPI";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};


export interface ProductsType{
    "name": string
    "shortDescription": string
    "longDescription": string
    "price": number
    "category": string
    "image": string
}

export const useProductsData = routeLoader$<ProductsType[]>(async () => {
    try {
        const {data} = await client.service('products').find();
        return data;
    } catch (e) {
        console.log(e)
    }
});

export const ProductsContextId = createContextId<ProductsType[]>('products')

export default component$(() => {

    const products = useProductsData();
    useContextProvider(ProductsContextId, products.value)

  return (
      <div>
        <MainNavbar />
        <Slot />
      </div>
  );
});
