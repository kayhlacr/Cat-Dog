export default function Cat({ cat }) {
  return (
    <div className="CatCard">
      <h2>{cat.name}</h2>
      <p>Breed: {cat.breed}</p>
      <p>Favorite Toy: {cat.favoriteToy}</p>
    </div>
  );
}
