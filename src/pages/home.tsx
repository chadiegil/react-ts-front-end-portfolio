import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { routes } from "@routes/routes" // Make sure the import path is correct

export default function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(routes.guest.myPortfolio)
    console.log("from home")
  }, [])

  return <div className="bg-blue-500">Home</div>
}
