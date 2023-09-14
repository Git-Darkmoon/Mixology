import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Landing, About, Cocktail, Error, HomeLayout } from "./pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      {
        path: "cocktail/:id",
        element: <Cocktail />,
      },
      { path: "about", element: <About /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}
export default App
