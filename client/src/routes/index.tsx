import {component$, useComputed$, useContext, useSignal, useStore} from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import {ProductsContextId, ProductsType, QueryContextId} from "~/routes/layout";
import ImageSlider from "~/components/image-slider";
import ProductCard, {ProductProps} from "~/components/product-card";
import Subscribe from "~/components/subscribe";
import {useCategories, useProducts} from "~/api/feathersAPI";

export default component$(() => {

    // const products = useContext(ProductsContextId);

    const selectedCategoryId = useSignal("");
    const {products, productName} = useProducts(selectedCategoryId);
    const {categories} = useCategories()

    const productsData = useComputed$<ProductProps[]>(() => {
        return products.value.map((prod) => {
            const category = prod.category.name;
            const prodName = prod.name;
            const prodPrice = {amount: prod.price.amount, currency: prod.price.currency};
            const prodImage = prod.image;
            const prodId = prod._id

            return {
                category: category,
                name: prodName,
                price: prodPrice,
                image: prodImage,
                _id: prodId
            }
        })
    })

    return (
        <div>
            <ImageSlider/>
            <div class=''>
                <div class=''>
                    <h1 class='text-xl text-center mt-16 mb-8'>Our featured <span class='font-bold'>Products</span>
                    </h1>
                    {/*tabs here*/}
                    {/*<div className='flex justify-center mb-10 items-center md:flex-row'>*/}
                    <div class="flex flex-col items-center">
                        <div class='sm:flex flex-row justify-center mb-10 items-center '>
                            <div class="mb-3 sm:mb-0">
                                {categories.value.map((tab, index) => {
                                    return (
                                        <a
                                            key={index}
                                            class={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 flex-shrink-0 cursor-pointer ${selectedCategoryId.value === tab._id ? "bg-black text-white border-b-0" : null}`}
                                            onclick$={() => selectedCategoryId.value = tab._id}>
                                            {tab.name}
                                        </a>
                                    )
                                })}
                            </div>
                            <div>
                                <input
                                    bind:value={productName}
                                    placeholder='Search'
                                    class='border-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500 focus:text-gray-600 px-4 h-[45px] rounded-full ml-2'/>
                            </div>
                            <p>{productName.value}</p>
                        </div>
                    </div>


                    <div
                        class='grid grid-cols-1 max-w-screen-xl mx-auto gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:px-8 lg:px-16 '>
                        {productsData.value.map((product, index) => {

                            return (

                                <ProductCard key={product._id} {...product} />


                            )
                        })}
                    </div>
                </div>
                <Subscribe/>
            </div>
        </div>
    );
});

export const head: DocumentHead = {
    title: "Max Homepage",
    meta: [
        {
            name: "description",
            content: "Qwik site description",
        },
    ],
};
