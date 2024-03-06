import Cat from "./Cat";

export default function CatList({ cats }) {
  return (
    <div className="Cats">
      {cats.map((cat) => (
        <Cat key={cat.id} cat={cat} />
      ))}
    </div>
  );
}
