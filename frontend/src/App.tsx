import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignUp from "./routes/SignUp"
import SignIn from "./routes/SignIn"
import MainLayout from "./components/layouts/MainLayout"
import DashboardLayout from "./components/layouts/DashboardLayout"


function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Route>
            <Route element={<DashboardLayout />}>
              <Route path="/chat" />
            </Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
