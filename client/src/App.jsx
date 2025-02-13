import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import TasksPage from "./pages/TasksPage"
import { AuthProvider } from "./context/AuthContext"
import TaksFormPage from "./pages/TaskFormPage"
import ProfilePage from "./pages/ProfilePage"
import ProtectedRoute from "./ProtectedRoute"
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          
          <Route element={<ProtectedRoute/>}>
          <Route path="/tasks" element={<TasksPage/>} />
          <Route path="/add-task" element={<TaksFormPage/>} />
          <Route path="/tasks/:id" element={<TaksFormPage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
export default App 