import { Outlet } from "react-router"
import CommonLayout from "./components/layout/CommonLayout"

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <CommonLayout>
      <Outlet/>
    </CommonLayout>
    </div>
  )
}

export default App