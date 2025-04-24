import ExperienceView from '@/views/ExperienceView.vue';
import HomeView from '@/views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import ContactView from '@/views/ContactView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/experience',
            name: 'experience',
            component: ExperienceView,
        },
        {
            path: '/experience/:id',
            name: 'experienceItem',
            component: ExperienceView,
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactView,
        },
        {
            path: '/:catchAll(.*)',
            name: 'notFound',
            component: NotFoundView,
        },
    ],
});

export default router;
