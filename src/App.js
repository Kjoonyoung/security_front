import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import SignUp from './pages/SignUp';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';


function App() {
  return (
      <Router>
        <Routes>
            <Route element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/logout" element={<Logout />} />
            </Route>

            <Route path="/login"
                   element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>}
                         />
            <Route path="/signUp"
                   element={
                        <PublicRoute>
                            <SignUp />
                        </PublicRoute>}
                         />
        </Routes>
      </Router>
  );
}

export default App;