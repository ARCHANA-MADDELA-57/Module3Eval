import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import UpdatePage from "./pages/Update";
import ProtectedRoute from "./components/ProtectedRoute";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/admin/dashboard" element={
          <ProtectedRoute role="Admin"><AdminDashboard/></ProtectedRoute>
        }/>
        <Route path="/customers/dashboard" element={
          <ProtectedRoute role="Customer"><CustomerDashboard/></ProtectedRoute>
        }/>
        <Route path="/admin/restaurants/update" element={
          <ProtectedRoute role="Admin"><UpdatePage/></ProtectedRoute>
        }/>
      </Routes>
    </Router>
  );
};
 
export default App;