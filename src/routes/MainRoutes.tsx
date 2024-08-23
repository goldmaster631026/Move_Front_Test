import AuthGuard from "../providers/AuthGuard";
import Login from "../pages/auth/Login";
import Main from "../pages/Main";
import AddMovie from "../pages/movies/Add";
import EditMovie from "../pages/movies/Edit";

const MianRoutes = {
    path: "/",
    children: [
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/main",
            element: 
            <AuthGuard>
                <Main />
             </AuthGuard>
        },
        {
            path: "/movies/add",
            element: <AddMovie />
        },
        {
            path: "/movies/edit",
            element: <EditMovie />
        }
    ]
}

export default MianRoutes;