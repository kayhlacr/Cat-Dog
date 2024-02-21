import Dog from "./Dog";

export default function DogList({ dogs }) {
  return (
    <div className="Dogs">
      <h1>Dogs</h1>
      {dogs.map((dog) => (
        <Dog key={dog.id} dog={dog} />
      ))}
    </div>
  );
}
