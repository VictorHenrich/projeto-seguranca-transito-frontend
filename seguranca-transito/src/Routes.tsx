import ContainerApp from './Components/ContainerApp';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import PrivateRoute from './Components/PrivateRoute';
import HomePage from './Pages/Home';
import LoginPage from './Pages/Login';
import ChatPage from './Pages/Chat';
import SettingsPage from './Pages/Settings';
import Unauthorized from './Pages/Unauthorized';

export default function ApplicationRoutes(){

    const routes = createBrowserRouter([
        {
            path: "/unauthorized",
            element: <Unauthorized />
        },
        {
            path: '/',
            element: <LoginPage/>
        },
        {
            path: '/home',
            element: <ContainerApp />,
            children: [
                {
                    path: "",
                    element: <HomePage />
                },
                {
                    path: "chat",
                    element: <ChatPage />
                },
                {
                    path: "settings",
                    element: <SettingsPage />
                }
            ]
        }
    ]);

    return <RouterProvider router={routes}/>
}