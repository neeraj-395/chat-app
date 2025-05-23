import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import SignUp from "./routes/SignUp"
import SignIn from "./routes/SignIn"
import Groups from "./routes/Groups";
import MainLayout from "./components/layouts/MainLayout"
import DashboardLayout from "./components/layouts/DashboardLayout";
import Settings from "./routes/Settings";
import Chats from "./routes/Chats";
import Profile from "./routes/Profile";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth layout */}
        <Route element={<MainLayout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        {/* Dashboard layout */}
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Navigate to={"/chats"} replace/>} />
          <Route path="/chats" element={<Chats />}/>
          <Route path="/groups" element={<Groups />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
