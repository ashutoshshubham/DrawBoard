import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login2 from './components/Login2';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
// import Drawboard from './components/Drawboard';
import Drawboard2 from './components/Drawboard2';
import Drawboard3 from './components/Drawboard3';
import Drawboard4 from './components/Drawboard4';
import Trial from './components/Trial';




function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route element={<Navigate to='login2'/>} path='/'/>
        <Route element={<Login2/>} path='login2'/>
        <Route element={<SignUp/>} path='signup'/>
        {/* <Route element={<Drawboard/>} path='board'/> */}
        <Route element={<Drawboard2/>} path='board2'/>
        <Route element={<Drawboard3/>} path='board3'/>
        <Route element={<Drawboard4/>} path='board4'/>
        <Route element={<Trial/>} path='trial'/>
        <Route element={<NotFound/>} path='*'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
