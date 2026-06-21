function FeaturedDishes() {
  const dishes = [
  {
    name: "Grilled Salmon",
    price: "$24",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288"
  },

  {
    name: "Steak Deluxe",
    price: "$32",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947"
  },

  {
    name: "Truffle Pasta",
    price: "$18",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9"
  },

  {
    name: "Lobster Thermidor",
    price: "$45",
    image:
      "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg"
  },

  {
    name: "Wagyu Beef",
    price: "$55",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e"
  },

  {
    name: "Seafood Platter",
    price: "$38",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
  }
];
  return (
    <section id="menu" className="section">
      <h2>Featured Dishes</h2>

      <div className="cards">
        {dishes.map((dish) => (
          <div className="card" key={dish.name}>

  <img
    src={dish.image}
    alt={dish.name}
    className="dish-image"
  />

  <h3>{dish.name}</h3>

  <p>{dish.price}</p>

</div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedDishes;