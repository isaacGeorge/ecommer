import {$, component$, Signal, useContext, useSignal, useStore} from "@builder.io/qwik";
import {CartContextId, CategoryContextId, useCategoriesData} from "~/routes/layout";
import client, {useCategories} from "~/api/feathersAPI";
import {ActiveCategoryContextId} from "~/routes/admin-dashboard/layout";


export default component$(() => {

    const activeCategory = useContext(ActiveCategoryContextId);

    const dialog = useSignal<HTMLDialogElement>();
    // const categories = useContext(CategoryContextId)
    const {categories, createCategory} = useCategories()
    const newCategory = useSignal<string>("")

    return (
        <div class='hidden sm:block'>

            {/*Dialogue start*/}
            <dialog ref={dialog}>
                <div>
                    <div class="relative w-full  max-h-full ">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 w-[500px]  ">
                            <button type="button"
                                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 14 14" onclick$={() => dialog.value?.close()}>
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                            </button>
                            <div class="px-6 py-6 lg:px-8">
                                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add category</h3>
                                <div class="space-y-6">
                                    <div>
                                        <p>{newCategory}</p>
                                        <div
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">category
                                            name
                                        </div>
                                        <input type="text"
                                               name='category'
                                               bind:value={newCategory}
                                               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                               placeholder="add new category"/>
                                    </div>
                                    <button type="button"
                                            onclick$={()=> createCategory(newCategory, dialog as Signal<HTMLDialogElement>)}
                                            class="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">create
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
            {/*dialogue end*/}

            <div class='h-[90vh] bg-white flex flex-col '>
                <p class='text-white text-2xl bg-gray-800 py-4 px-10'>Categories</p>
                <div class='flex-1 flex flex-col space-y-1 text px-4 text-xl '>
                    {categories.value.map((category) => {
                        return (
                            <p key={category._id}
                               onclick$={() => activeCategory.value = category._id}
                               class={`px-4 py-2 hover:bg-orange-500 hover:text-white mt-1 rounded-md cursor-pointer ${activeCategory.value === category._id ? "bg-orange-500 text-white border-b-0" : null}`}>{category.name}</p>
                        )
                    })}

                </div>

                <div
                    onclick$={() => dialog.value?.showModal()}
                    class='bg-black text-white px-4 py-2 flex items-center gap-2 border border-gray-50'>
                    <ion-icon name="add"></ion-icon>
                    <button type='button'>Create category</button>
                </div>
                {/*<div class='bg-gray-800 p-2 flex gap-1 items-center'>*/}

                {/*    <img*/}
                {/*        src="https://media.istockphoto.com/id/1165314750/photo/living-that-urban-life.jpg?s=612x612&w=0&k=20&c=5If9eBsKrj2N0EDx8dvMM6SOEUqNlBTpY-POmwYIt4o="*/}
                {/*        alt='profile'*/}
                {/*        height='100'*/}
                {/*        width='100'*/}
                {/*        class='object-cover w-10 h-10 rounded-full'*/}
                {/*    />*/}
                {/*    <p class='text-white text-sm'>Isaac George</p>*/}
                {/*</div>*/}
            </div>
        </div>
    )
})