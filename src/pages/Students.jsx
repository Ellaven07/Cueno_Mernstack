import students from "../data/students.json";
import StudentCard from "../components/StudentCard";

export default function Students() {
  return (
    <div>
      <h1>Students</h1>

      {students.map((student) => (
        <StudentCard
          key={student.id}
          id={student.id}
          name={student.name}
          studentNumber={student.student_number}
          course={student.course}
          year={student.year}
          section={student.section}
        />
      ))}
    </div>
  );
}