import { Main } from './pages'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { User } from './pages/user';
import { Waiting } from './pages/waiting';
import { Why } from './components/info';

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
      children:[
        {
          path:'why',
          element:<Why/>
        },
        {
          path:'',
          element:<Waiting/>
        }
    ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
