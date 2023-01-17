import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './Pages/Home';
import LoginPage from './Pages/Login';
import ChatPage from './Pages/Chat';


export default function ApplicationRoutes(){

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <LoginPage/>
        },
        {
            path: '/home',
            element: <HomePage />
        },
        {
            path: '/chat',
            element: <ChatPage/>
        }
    ]);

    return <RouterProvider router={routes}/>
}