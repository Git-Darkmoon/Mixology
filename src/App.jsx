import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Landing, About, Cocktail, Error, HomeLayout } from "./pages"

import { loader as landingLoader } from "./pages/Landing"
import { QueryClient } from "@tanstack/react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing />, loader: landingLoader(queryClient) },
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
