import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ProductDetails from "./pages/ProductDetails";
import Cart from './components/Cart'
function App() {
  return (
    <div className="min-h-screen text-slate-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route
          path="*"
          element={<Home />}
        />
         <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
