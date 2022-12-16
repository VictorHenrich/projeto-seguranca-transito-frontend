import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './Pages/Login';


export default function ApplicationRoutes(){

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <LoginPage/>
        }
    ]);

    return <RouterProvider router={routes}/>
}