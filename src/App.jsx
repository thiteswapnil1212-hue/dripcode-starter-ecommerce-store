// E-commerce Store — starter. Your logic goes here.
// Steps: https://skill-grid-weld.vercel.app/projects/ecommerce-store
import { Routes, Route, Link } from "react-router-dom";
import { useCart } from "./context/CartContext.jsx";

export default function App() {
  const { count } = useCart();
  return (
    <div>
      <header>
        <Link to="/">Store</Link> | <Link to="/cart">Cart ({count})</Link>
      </header>
      <Routes>
        {/* TODO: / catalog, /product/:id detail, /cart, /checkout */}
        <Route path="/" element={<p>Catalog goes here.</p>} />
        <Route path="/cart" element={<p>Cart goes here.</p>} />
        <Route path="/checkout" element={<p>Checkout goes here.</p>} />
      </Routes>
    </div>
  );
}
