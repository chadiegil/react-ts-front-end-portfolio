import { lazy } from "react"
import { routes } from "./routes"

const Layout = lazy(async () => await import("@components/layouts/layout"))
const Home = lazy(async () => await import("@pages/home"))

export const guestRoutes = {
  element: <Layout />,
  children: [
    {
      path: routes.home,
      element: <Home />,
    },
  ],
}
