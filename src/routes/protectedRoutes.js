import { Profile, Posts, Gallery,Todo } from '../pages'


const protectedRoutes = [
    {
        path: "/profile",
        component: <Profile />,
    },
    {
        path: "/posts",
        component: <Posts />,
    },
    {
        path: "/gallery",
        component: <Gallery />,
    },
    {
        path: "/todo",
        component: <Todo />,
    },
]

export default protectedRoutes;