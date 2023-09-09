import {component$, useComputed$, useContext, useSignal, useStore} from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import {ProductsContextId, QueryContextId} from "~/routes/layout";
import ImageSlider from "~/components/image-slider";
import ProductCard from "~/components/product-card";
import Subscribe from "~/components/subscribe";

export default component$(() => {

    const products = useContext(ProductsContextId);
    const query = useContext(QueryContextId);
    const activeTab = useSignal("");

    const tabs = useStore([

        {
            label: "ALL",
            name: ""
        },
        {
            label: "NEW ARRIVALS",
            name: "newArrivals"
        },
        {
            label: "BEST SELLERS",
            name: "bestSellers"
        },
        {
            label: "TOP RATED",
            name: "topRated"
        }
    ])

    const productsData = useComputed$(() => {
        return products.filter(product => ((product?.category.name === activeTab.value) || (activeTab.value === ""))).filter((eventData) => {
            if (query.value === "") {
                return eventData;
            } else if (eventData?.name.toLowerCase().includes(query.value.toLowerCase())) {
                return eventData
            }
        }).map((prod) => {
            const category = prod.category.name;
            const prodName = prod.name;
            const prodPrice = "$" + prod.price;
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
            <div class='flex flex-col justify-center items-center mx-auto'>
                <div class='items-center'>
                    <h1 class='text-xl text-center mt-16 mb-8'>Our featured <span class='font-bold'>Products</span>
                    </h1>
                    {/*tabs here*/}
                    {/*<div className='flex justify-center mb-10 items-center md:flex-row'>*/}
                    <div class='sm:flex flex-row justify-center mb-10 items-center '>
                        <div class="mb-3 sm:mb-0">
                            {tabs.map((tab, index) => {
                                return (
                                    <a
                                        key={index}
                                        class={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 flex-shrink-0 cursor-pointer ${activeTab.value === tab.name ? "bg-black text-white border-b-0" : null}`}
                                        onclick$={() => activeTab.value = tab.name}>
                                        {tab.label}
                                    </a>
                                )
                            })}
                        </div>
                        <div>
                        <input
                            bind:value={query}
                            placeholder='Search'
                            class='border-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500 focus:text-gray-600 px-4 h-[45px] rounded-full ml-2'/>
                        </div>
                    </div>


                    <div
                        class='grid grid-cols-1 min-w-[300px]   gap-4 sm:grid-cols-3 lg:grid-cols-4 sm:px-8 lg:px-32  justify-center items-center'>
                        {productsData.value.map((product, index) => {

                            return (
                                <>
                                    <ProductCard {...product} />

                                </>

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
