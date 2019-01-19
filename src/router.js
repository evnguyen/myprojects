import Home from './pages/Home.vue'
import AboutMe from './pages/AboutMe.vue'
const router = [
    {
        component: Home,
        path: '/'
    },
    {
        component: AboutMe,
        path: '/AboutMe'
    }
];

export default router;