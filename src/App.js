import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Logout from './pages/Logout';
import PrivateRoute from './routes/PrivateRoute';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
      <Router>
        <Header/>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="/logout" element={<Logout />} />
                </Route>

                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />

            </Routes>
        <Footer/>
      </Router>
  );
}

export default App;