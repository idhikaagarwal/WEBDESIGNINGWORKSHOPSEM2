import "./App.css";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import ProductCard from "./components/ProductCard";

import products from "./data/product";
function App() {

  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showCart, setShowCart] = useState(false);


  const addToCart = (product) => {
  setCartCount(prev => prev + 1);

  setCartItems(prev => [
    ...prev,
    product.title
  ]);
};

const removeFromCart = (product) => {

  setCartCount(prev => Math.max(0, prev - 1));

  setCartItems(prev => {
    const index = prev.lastIndexOf(product.title);

    if (index === -1) return prev;

    return prev.filter((_, i) => i !== index);
  });

};

  return (
    <>
   <Navbar
  cartCount={cartCount}
  cartItems={cartItems}
  setSelectedCategory={setSelectedCategory}
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
  showCart={showCart}
  setShowCart={setShowCart}
/>

      <Categories
  setSelectedCategory={setSelectedCategory}
/>

      <img
        className="banner"
        src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
        alt="Amazon Banner"
      />

      <div className="products">
      {products
     .filter(
       (product) =>
         (selectedCategory === "all" ||
          product.category === selectedCategory) &&
           product.title
           .toLowerCase()
           .includes(searchTerm.toLowerCase())
           )
        .map((product) => (
          <ProductCard
        key={product.id}
        product={product}
        addToCart={addToCart}
       removeFromCart={removeFromCart}
/>
        ))}
      </div>

     <footer>
          Back to Top
     </footer>
    </>
  );
}

export default App;