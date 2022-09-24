import { MyHome } from './pages/MyHome'
import { BsHome } from './pages/BsHome'
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MyHome />} />
      <Route path="/bs" element={<BsHome />} />
    </Routes>
  );
}

export default App;
