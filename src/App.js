import logo from './logo.svg';
import Home from "./components/Home"
import { Routes , Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import FavList from "./components/FavList"
import './App.css';

function App() {
  return (
<>
<Navbar />
<Routes>
   <Route path="/" element={<Home />} />
   <Route path="/favourit" element={<FavList  />} />
      
</Routes>

</>
    
  );
}

export default App;
