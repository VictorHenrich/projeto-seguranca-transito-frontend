import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './Pages/Home';
import LoginPage from './Pages/Login';


export default function ApplicationRoutes(){

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <LoginPage/>
        },
        {
            path: '/home',
            element: <HomePage />
        }
    ]);

    return <RouterProvider router={routes}/>
}