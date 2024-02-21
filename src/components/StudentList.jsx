import Student from "./Student";

export default function StudentList({ students }) {
  return (
    <div className="Students">
      <h1>Students</h1>
      {students.map((student) => (
        <Student key={student.id} student={student} />
      ))}
    </div>
  );
}
