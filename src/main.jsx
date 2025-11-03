import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';
import HomePage from './Components/HomePage.jsx';
import AboutPage from './Components/AboutPage.jsx';
import RootLayout from './Components/RootLayout.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path: '/home',
        Component: HomePage
      },
      {
        path: '/about',
        element: <AboutPage></AboutPage>
      }
    ]
  },

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
