import { Route, Routes } from 'react-router-dom';
import '../src/assets/main.css';
import './App.css';
import Custom from './components/Custom';
import MainHome from './components/MainHome';
import Profile from './components/Profile';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainHome />}/>
      <Route exact path="/profile" element={<Profile />}/>
      <Route exact path="/custom/:tag" element={<Custom />}/>
    </Routes>
    
  );
}

export default App;
