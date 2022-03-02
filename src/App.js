import Category from './Components/Category'
import Navbar from './Components/Navbar';
import './App.css';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="products" element={<div>
          <h1>products</h1>
          <p>here is my react website design.</p>
          </div>} 
          />
      </Routes>
     </div>
  );
}

export default App;
