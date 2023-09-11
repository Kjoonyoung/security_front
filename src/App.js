import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import SignUp from './pages/SignUp';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
      <Router>
        <Header/>
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
        <Footer/>
      </Router>
  );
}

export default App;