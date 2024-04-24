import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from './pages/login';
import { Home } from './pages/Home';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
