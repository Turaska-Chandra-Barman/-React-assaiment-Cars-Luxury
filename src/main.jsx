import { Children, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AllComponents from './components/AllComponents.jsx';





const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
        {
          path:'/',
          element:<AllComponents/>
        }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
