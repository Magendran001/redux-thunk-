import logo from './logo.svg';

import Navbar from './components/navbar/home';
import Dashboard from './components/Dashborad';
import Regeister from './components/regeistration/regeistration';
import Login from './components/regeistration/login';
import { Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Regeister />}></Route>
      </Routes>
    </div>
  );
}

export default App;
