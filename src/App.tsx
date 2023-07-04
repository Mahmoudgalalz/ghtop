import { Main } from './pages'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Helmet} from "react-helmet";
import { User } from './pages/user';
import { Waiting } from './pages/waiting';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Main/>,
    },
    {
      path:"/:id",
      element:<User/>,
    },
    {
      path:"/waiting",
      element:<Waiting/>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
