import { Route, Routes } from 'react-router-dom';
import '../src/assets/main.css';
import './App.css';
import MainHome from './components/MainHome';
import Profile from './components/Profile';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainHome />}/>
      <Route exact path="/profile" element={<Profile />}/>
    </Routes>
    
  );
}

export default App;
