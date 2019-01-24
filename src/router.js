import Home from './pages/Home.vue'
import AboutMe from './pages/AboutMe.vue'
import Resume from './pages/Resume'
const router = [
    {
        component: Home,
        path: '/'
    },
    {
        component: AboutMe,
        path: '/aboutMe'
    },
    {
        component: Resume,
        path: '/resume'
    }
];

export default router;