import Student from "./Student";

export default function StudentList({ students }) {
  return (
    <div className="Students">
      {students.map((student) => (
        <Student key={student.id} student={student} />
      ))}
    </div>
  );
}
