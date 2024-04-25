import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from './pages/login';
import { Home } from './pages/Home';
import "react-toastify/dist/ReactToastify.css"
import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
