import { useState } from "react";
function Navbar({
  cartCount,
  cartItems,
  setSelectedCategory,
  searchTerm,
  setSearchTerm,
  showCart,
  setShowCart
}) {
  const [showProfile, setShowProfile] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  return (
    <nav className="navbar">
 <div className="logo-section">

 <div
  className="logo"
  onClick={() => setSelectedCategory("all")}
  
>
  amazon<span>.in</span>
</div>

  <div className="location">
  <span className="deliver">
    📍 Deliver to Idhika
  </span>

  <span className="city">
    Ghaziabad 201009
  </span>
</div>

</div>
     <div className="search-bar">

  <select>
    <option>All</option>
  </select>

  <input
    type="text"
    placeholder="Search Amazon.in"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />

  <button>🔍</button>

</div>
      <div className="nav-links">
       <div className="profile-section">

  <p
    onClick={() => setShowProfile(!showProfile)}
    style={{ cursor: "pointer" }}
  >
    Hello, Idhika ▼
  </p>

  {showProfile && (

    <div className="profile-dropdown">

      <p>My Profile</p>

      <p>My Orders</p>

      <p>Settings</p>

    </div>

  )}

</div>
        <div className="profile-section">

  <p
    onClick={() => setShowOrders(!showOrders)}
    style={{ cursor: "pointer" }}
  >
    Returns & Orders ▼
  </p>

  {showOrders && (

    <div className="profile-dropdown">

      <p>✓ iPhone 15</p>
      <p>Delivered May 25</p>

      <p>✓ Running Shoes</p>
      <p>Delivered May 20</p>

      <p>✓ Headphones</p>
      <p>Delivered May 15</p>

    </div>

  )}

</div>
       <div className="profile-section">

  <h3
    onClick={() => setShowCart(!showCart)}
    style={{ cursor: "pointer" }}
  >
    🛒 Cart ({cartCount})
  </h3>

{showCart && (

  <div className="profile-dropdown">

    <p><strong>Your Cart</strong></p>
{Object.entries(
  cartItems.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {})
).map(([item, count]) => (
  <p key={item}>
    {item} × {count}
  </p>
))}

    <p><strong>Total Items: {cartCount}</strong></p>

  </div>

)}

</div>
 </div>

    </nav>
  );
}

export default Navbar;