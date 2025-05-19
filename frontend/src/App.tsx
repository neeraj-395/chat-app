import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignUp from "./routes/SignUp"
import SignIn from "./routes/SignIn"
import Chats from './routes/Chats';
import Groups from "./routes/Groups";
import MainLayout from "./components/layouts/MainLayout"
import DashboardLayout from "./components/layouts/DashboardLayout"
import Settings from "./routes/Settings";
import Conversation from "./components/conversation";

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
          <Route path="/chats" element={<Chats />}/>
          <Route path="/groups" element={<Groups />}/>
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
