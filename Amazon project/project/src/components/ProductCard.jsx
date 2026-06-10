import { useState } from "react";

function ProductCard({
  product,
  addToCart,
  removeFromCart
}) {
const [quantity, setQuantity] = useState(0);
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
      />

      <h3>{product.title}</h3>

        <p className="rating">⭐⭐⭐⭐⭐</p>

   <p className="discount">{product.discount}</p> 
      <p>{product.price}</p>
      

 {quantity === 0 ? (

  <button
    onClick={() => {
      setQuantity(1);
      addToCart(product);
    }}
  >
    Add to Cart
  </button>

) : (

  <div className="quantity-controls">

    <button
      onClick={() => {
        if (quantity > 0) {
          setQuantity(quantity - 1);
          removeFromCart(product);
        }
      }}
    >
      -
    </button>

    <span>{quantity}</span>

    <button
      onClick={() => {
        setQuantity(quantity + 1);
        addToCart(product);
      }}
    >
      +
    </button>

  </div>

)}
    </div>
  );
}

export default ProductCard;