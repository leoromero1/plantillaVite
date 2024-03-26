import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Page1 } from "../pages/Page1";
import { Page2 } from "../pages/Page2";
import { Page3 } from "../pages/Page3";
import {Home} from "../pages/Home"

const routes = createBrowserRouter([
  {
    path: '/',
    element:<Home />
  },
  {
    path: '/page1',
    element:<Page1/>
  },
  {
    path: '/page2',
    element:<Page2/>
  },
  {
    path: '/page3',
    element:<Page3/>
  },
])

export const Routes = () => {
  return (
    <RouterProvider router={routes}/>
  )
}