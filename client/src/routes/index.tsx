import {component$, useContext} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {ProductsContextId} from "~/routes/layout";
import ImageSlider from "~/components/image-slider";

export default component$(() => {

  const products = useContext(ProductsContextId);

  return (
    <div>
    <p>Home page</p>
      {products.map((product)=>{
        return(
            <div>
            <ImageSlider />
              
            </div>
        )
      })}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
