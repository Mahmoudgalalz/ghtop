import { Main } from './pages'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Main/>,
    },
    {
      path:"/:id",
      element:<Main/>,
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
