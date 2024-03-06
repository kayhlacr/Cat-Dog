import Dog from "./Dog";

export default function DogList({ dogs }) {
  return (
    <div className="Dogs">
      {dogs.map((dog) => (
        <Dog key={dog.id} dog={dog} />
      ))}
    </div>
  );
}
