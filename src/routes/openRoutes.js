import { Login,NotFound } from '../pages'



const protectedRoutes = [
    {
        path: "/",
        component: <Login />,
    },
    {
        path: "/notfound",
        component: <NotFound />,
    },


]

export default protectedRoutes;