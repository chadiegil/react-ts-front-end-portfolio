import { lazy } from "react"
import { routes } from "./routes"

const Layout = lazy(async () => await import("@components/layouts/layout"))
const MyPorfolio = lazy(
  async () => await import("@pages/my-portfolio/my-portfolio")
)
const Home = lazy(async () => await import("@pages/home"))

export const guestRoutes = {
  element: <Layout />,
  children: [
    {
      path: routes.home,
      element: <Home />,
    },
    {
      path: routes.guest.myPortfolio,
      element: <MyPorfolio />,
    },
  ],
}
