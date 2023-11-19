import {
  component$,
  createContextId,
  Signal,
  Slot,
  useContextProvider,
  useSignal,
  useVisibleTask$
} from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
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

export interface User{
  "_id": string
  "name": string
  "email": string
}


export const AuthUserContextId = createContextId<Signal<User>>("authUser");

export default component$(() => {

  const authUser = useSignal<User>();
  useContextProvider(AuthUserContextId, authUser);

  useVisibleTask$(async ()=>{
    try{
      await client.reAuthenticate();
      const {user} = await client.get('authentication');
      authUser.value = user
    }

    catch (e) {
      console.log(e)
    }
  })
  return <Slot />;
});
