import Cat from "./Cat";

export default function CatList({ cats }) {
  return (
    <div className="Cats">
      <h1>Cats</h1>
      {cats.map((cat) => (
        <Cat key={cat.id} cat={cat} />
      ))}
    </div>
  );
}
