import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Landing, About, Error, HomeLayout, CocktailDetails } from "./pages"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { loader as landingLoader } from "./pages/Landing"
import { loader as singleCocktailLoader } from "./pages/CocktailDetails"

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
        element: <CocktailDetails />,
        loader: singleCocktailLoader(queryClient),
      },
      { path: "about", element: <About /> },
    ],
  },
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
export default App
