import { Link, useParams } from "react-router-dom";
import students from "../data/students.json";

export default function StudentDetails() {
  const { id } = useParams();

  const student = students.find(
    (student) => student.id === parseInt(id)
  );

  if (!student) {
    return (
      <div>
        <h1>Student Not Found</h1>
        <Link to="/students">Back to Students</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Student Details</h1>

      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Student Number:</strong> {student.student_number}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Section:</strong> {student.section}</p>
      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>Email:</strong> {student.gmail}</p>

      <Link to="/students">Back to Students</Link>
    </div>
  );
}