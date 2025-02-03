import { createRouter, createWebHistory } from 'vue-router'
import HomeVIew from '../views/HomeVIew.vue'
import JobsView from '../views/JobsView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import JobView from '../views/JobView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeVIew
    },
    {
        path: '/jobs',
        name: 'Jobs',
        component: JobsView,
    },

    {
        path: '/jobs/:id',
        name: 'job',
        component: JobView,
    },
    {
        path: '/:catchAll(.*)', // Match any path that hasn't been matched by other routes
        name: 'not-found',
        component: NotFoundView,
    },
]


const router = createRouter({
    routes: routes,
    history: createWebHistory(import.meta.env.BASE_URL)
})

export default router;
