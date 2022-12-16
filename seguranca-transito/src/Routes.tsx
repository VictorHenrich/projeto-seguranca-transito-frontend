import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './Pages/Home';


export default function ApplicationRoutes(){

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <HomePage/>
        }
    ]);

    return <RouterProvider router={routes}/>
}