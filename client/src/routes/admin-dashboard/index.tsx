import {$, component$, QRL, Signal, useComputed$, useContext, useSignal, useStore} from "@builder.io/qwik";
import {DocumentHead} from "@builder.io/qwik-city";
import {CategoryContextId, PriceType, ProductsContextId, ProductsType} from "~/routes/layout";
import client, {useProducts} from "~/api/feathersAPI";
import DashboardSideNav from "~/components/dashboard-side-nav";
import {ActiveCategoryContextId} from "~/routes/admin-dashboard/layout";
import CurrencyInput from "~/components/currencyInput";
import {ProductProps} from "~/components/product-card";

export default component$(() => {
    const dialog = useSignal<HTMLDialogElement>()
    const drawerOpen = useSignal<boolean>()
    const selectedCategoryId = useContext(ActiveCategoryContextId);
    const {products, productData, addProduct} = useProducts(selectedCategoryId) as {
        products: Signal<ProductsType[]>,
        productData: Signal<ProductsType>,
        addProduct: QRL
    };
    const categories = useContext(CategoryContextId)

    const productName = useSignal<string>("");
    const productShortDescription = useSignal("");
    const productLongDescription = useSignal<string>("");
    const productPrice = useSignal<PriceType>({
        currency: "usd",
        amount: 0
    });
    const productImage = useSignal<string>("");
    const bindProductName = $((ev: Event) => {
        const target = ev.target as HTMLInputElement;
        productData.value = {
            ...productData.value,
            name: target.value
        }

    });


    const bindProductPrice = $((price: PriceType) =>  {
        productData.value = {...productData.value, price}
    })


    const bindProductShortDescription = $((ev: Event) => {
        const target = ev.target as HTMLInputElement;
        productData.value = {
            ...productData.value,
            shortDescription: target.value
        }

    });

    const bindProductLongDescription = $((ev: Event) => {
        const target = ev.target as HTMLInputElement;
        productData.value = {
            ...productData.value,
            longDescription: target.value
        }
    });

    const bindProductImageLink = $((ev: Event) => {
        const target = ev.target as HTMLInputElement;
        productData.value = {
            ...productData.value,
            image: target.value
        }

    });

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

    const onInput = $((e: Event) => {

    })

    // const addProduct = $(async () => {
    //     try {
    //
    //         await client.service('products').create(
    //             {
    //                 name: productName.value,
    //                 shortDescription: productShortDescription.value,
    //                 longDescription: productLongDescription.value,
    //                 price: {amount: Number(productPrice.value.amount), currency: productPrice.value.currency},
    //                 image: productImage.value,
    //                 categoryId: selectedCategoryId.value
    //             }
    //         );
    //         productName.value = '';
    //         productShortDescription.value = '';
    //         productLongDescription.value = '';
    //         // productPrice.value = '';
    //         productImage.value = '';
    //
    //         dialog.value?.close()
    //     } catch (e) {
    //         console.log(e)
    //     }
    //
    // })


    // @ts-ignore
    // @ts-ignore
    return (
        <div class='relative w-full pt-3 '>

            {drawerOpen.value ?
                <div class='fixed z-50 top-0'>
                    <div class='h-[100vh] w-screen bg-white flex flex-col '>
                        <div class='flex gap-1 items-center justify-between text-white  bg-gray-800 py-4 px-10'>
                            <p class=' '>Categories</p>
                            <p onclick$={() => drawerOpen.value = false} class='text-orange-500 text-sm'>Close</p>
                        </div>

                        <div class='flex-1 flex flex-col space-y-1 text px-4 text-xl '>
                            {categories.value.map((category) => {
                                return (
                                    <p key={category._id}
                                       onclick$={() => selectedCategoryId.value = category._id}
                                       class={`px-4 py-2 hover:bg-orange-500 hover:text-white mt-1 rounded-md ${selectedCategoryId.value === category._id ? "bg-orange-500 text-white border-b-0" : null}`}>{category.name}</p>
                                )
                            })}

                        </div>

                        <button
                            onclick$={() => dialog.value?.showModal()}
                            class='bg-black text-white px-4 py-2 flex items-center gap-2 border border-gray-50'>
                            <ion-icon name="add"></ion-icon>
                            <p>Create category</p>
                        </button>

                    </div>
                </div>
                : null
            }


            {/*dialogue here*/}

            <dialog ref={dialog} class=''>
                <div class='flex flex-col h-[65vh] container sm:w-[600px] p-4'>
                    <div class=''>
                        {/*header here*/}
                        <div class='bg-gray-900 text-white flex justify-between p-4'>
                            <p class="text-xl text-white ">Add product</p>
                            <button type="button">
                                <ion-icon
                                    onclick$={() => dialog.value?.close()}
                                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 sticky"
                                    name="close"></ion-icon>
                            </button>
                        </div>
                    </div>

                    {/*form here*/}
                    <div class='flex-1 overflow-auto'>
                        <div class="space-y-6 mb-4">
                            <div>
                                <div
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product
                                    name
                                </div>
                                <input type="text"
                                       name="name"
                                       value={productData.value?.name}
                                       onInput$={bindProductName}
                                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                       placeholder="e.g Black tshirt"/>
                                {/*<p>Name here{productData.value?.name}</p>*/}
                            </div>

                            <CurrencyInput onPriceChange$={bindProductPrice}/>
                            <p>{productData.value?.price.currency}:{productData.value?.price.amount}</p>

                            <div>

                                <div
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short
                                    Description
                                </div>
                                {/*@ts-ignore*/}
                                <textarea id="message" rows="4"
                                          value={productData.value?.shortDescription}
                                          onInput$={bindProductShortDescription}
                                          autocomplete="off"
                                          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                          placeholder="Write your thoughts here..."></textarea>
                                <p>{productData.value?.shortDescription}</p>

                            </div>
                            <div>
                                <div
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Long
                                    description
                                </div>
                                {/*@ts-ignore*/}
                                <textarea id="longDescription" rows="4"
                                          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                          onInput$={bindProductLongDescription}
                                          value={productData.value?.longDescription}
                                          placeholder="Product description..."></textarea>
                                <p>{productData.value?.longDescription}</p>

                            </div>
                            <div>
                            </div>

                            <div>
                                <div
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image
                                    link
                                </div>
                                <input type="text" name="image"
                                       value={productData.value?.image}
                                       onInput$={bindProductImageLink}
                                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                       placeholder="paste the image link here"/>
                                <p>{productData.value?.image}</p>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div class='text-white p-2'>
                            <button type="submit"
                                onclick$={addProduct}
                                    class="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save
                            </button>
                        </div>
                    </div>
                </div>
            </dialog>

            {/*dialogue ends here*/}

            <div
                class='flex flex-row  items-center p-4 mb-3 bg-white shadow-md sm:rounded-lg w-screen sticky top-14'>
                <ion-icon onclick$={() => drawerOpen.value = true} class='text-2xl sm:hidden'
                          name="menu"></ion-icon>
                <p class='sm:text-2xl font-semibold'>Best sellers</p>
                <button
                    onclick$={() => dialog.value?.showModal()}
                    class='bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-black/90'> + product
                </button>
            </div>

            {/*grid for mobile screens starts here*/
            }
            <div class='p-2 sm:hidden'>
                <div class='grid grid-cols-2 gap-3'>
                    {productsData.value.map((product) => {
                        return (
                            <div key={product._id} class='flex flex-col'>
                                <img width='90' height='90' class='w-28 h-28 object-cover' src={product.image}
                                     alt={product.name}/>
                                <div class=''>
                                    <p class='text-md font-semibold'>{product.name}</p>
                                    <p class='text-sm text-gray-700'>Price: {product.price.amount} usd</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {/*grid for mobile screens ends here*/
            }


            {/*table starts here>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..*/
            }
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg hidden sm:block">

                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            image
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {productsData.value.map((product) => {
                        return (
                            <tr key={product._id}
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    <p>{product.name}</p>
                                </th>
                                <td class="px-6 py-4">
                                    <img width='10' height='10'
                                         class='w-10 h-10 rounded-full object-cover'
                                         src={product.image} alt={product.name}/>
                                </td>
                                <td class="px-6 py-4">
                                    <p>{product.price.currency} {product.price.amount}</p>
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <a href="#"
                                       class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>


            </div>
            {/*table ends here>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..*/
            }

        </div>

    )
})

export const head: DocumentHead = {
    title: "Admin Dashboard",
    meta: [
        {
            name: "description",
            content: "Add products",
        },
    ],
};