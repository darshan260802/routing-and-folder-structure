import { Route, Routes,Navigate } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {

  const isLoggedIn = false;

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate  to={isLoggedIn ? '/home' : '/login'} replace />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='*' element={<Navigate  to={'/'} replace />} />
      </Routes>
    </div>
  );
}

export default App;
