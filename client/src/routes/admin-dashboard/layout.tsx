import {
    component$,
    createContextId,
    Signal,
    Slot,
    useContextProvider,
    useSignal,
    useStore,
    useVisibleTask$
} from "@builder.io/qwik";
import type {RequestHandler} from "@builder.io/qwik-city";
import MainNavbar from "~/components/main-navbar";
import {routeLoader$} from "@builder.io/qwik-city";
import client from "~/api/feathersAPI";
import Footer from "~/components/footer";
import {log} from "util";
import AdminDashboard from "~/routes/admin-dashboard/index";
import DashboardSideNav from "~/components/dashboard-side-nav";
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
export const ActiveCategoryContextId = createContextId <Signal<string>>('activeCategory');
export default component$(() => {
    const activeCategory = useSignal("");
    useContextProvider(ActiveCategoryContextId, activeCategory);

    return (
        <div class='bg-gray-100 flex gap-3'>
            <DashboardSideNav />
            <Slot/>
        </div>
    );
});
