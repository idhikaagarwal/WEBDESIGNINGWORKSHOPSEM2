function Categories({ setSelectedCategory }) {
  return (
    <div className="categories">

      <button onClick={() => setSelectedCategory("all")}>
        ☰ All
      </button>

      <button onClick={() => setSelectedCategory("mobiles")}>
        Mobiles
      </button>

      <button onClick={() => setSelectedCategory("fashion")}>
        Fashion
      </button>

      <button onClick={() => setSelectedCategory("electronics")}>
        Electronics
      </button>

      <button onClick={() => setSelectedCategory("kitchen")}>
        Kitchen
      </button>

      <button onClick={() => setSelectedCategory("appliances")}>
        Appliances
      </button>
   </div>
  );
}

export default Categories;