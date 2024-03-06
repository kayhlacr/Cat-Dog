import StudentList from "../components/StudentList";
import { students } from "../data";

export default function StudentPage() {
  return (
    <div className="container">
      <h1>Students</h1>
      <StudentList students={students} />
    </div>
  );
}
