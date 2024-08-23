import { Suspense } from "react"
import { Outlet } from "react-router-dom"

export default function DashboardLayout() {
  return (
    <>
      <h1>sidebar</h1>
      <div className="bg-red-gray">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </>
  )
}
