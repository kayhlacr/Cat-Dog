import StudentList from "../components/StudentList";
import { students } from "../data";

export default function StudentPage() {
  return (
    <div className="container">
      <StudentList students={students} />
    </div>
  );
}
