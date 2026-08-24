function Student({ name, age, section, student_number, course }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Section: {section}</p>
      <p>Student Number: {student_number}</p>
      <p>Course: {course}</p>
    </div>
  );
}

export default Student;
