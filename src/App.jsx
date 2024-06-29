
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SideNav from './components/SideNav'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Analytics from './pages/Analytics'
import Products from './pages/Products'

function App() {

  return (
    <>
      {/* <SideNav/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
