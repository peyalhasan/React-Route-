import './App.css'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';
import HomePage from './Components/HomePage.jsx';
import AboutPage from './Components/AboutPage.jsx';
import RootLayout from './Components/RootLayout.jsx';

function App() {
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
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
