import { useState } from 'react';
import './App.css';

function App() {
  const [student, setStudent] = useState({
    fullname: '',
    studentId: '',
    department: '',
    courseYr: '',
    picture: ''
  });

  //  ARRAY of students
  const [students, setStudents] = useState([]);

  //  index for prev/next
  const [index, setIndex] = useState(0);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  //  ADD student to array
  const handleSubmit = () => {
    setStudents([...students, student]);

    // reset form
    setStudent({
      fullname: '',
      studentId: '',
      department: '',
      courseYr: '',
      picture: ''
    });

    setIndex(students.length); // move to new student
  };

  const nextStudent = () => {
    if (index < students.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevStudent = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const current = students[index];

  return (
    <div className="App">
      <div className="app-shell">
        <div className="app-panel">
          <div className="panel-header">
            <p className="eyebrow">Student Activity</p>
            <h2>Student Data</h2>
          </div>

          <div className="input-grid">
            <label>
              Student ID
              <input name="studentId" value={student.studentId} onChange={handleChange} />
            </label>

            <label>
              Full Name
              <input name="fullname" value={student.fullname} onChange={handleChange} />
            </label>

            <label>
              Department
              <input name="department" value={student.department} onChange={handleChange} />
            </label>

            <label>
              Course Year
              <input name="courseYr" value={student.courseYr} onChange={handleChange} />
            </label>

            <label>
              Picture Link
              <input name="picture" value={student.picture} onChange={handleChange} />
            </label>
          </div>

          <button className="primary-btn" onClick={handleSubmit}>Add Student</button>
        </div>

        <div className="app-panel">
          <div className="panel-header">
            <p className="eyebrow">Live Preview</p>
            <h2>Student Viewer</h2>
          </div>

          {students.length > 0 ? (
            <div className="viewer-card">
              {current.picture && (
                <img className="avatar" src={current.picture} alt="student" />
              )}

              <h3>{current.fullname}</h3>
              <p>ID: {current.studentId}</p>
              <p>Department: {current.department}</p>
              <p>Year: {current.courseYr}</p>

              <div className="nav-btns">
                <button onClick={prevStudent} disabled={index === 0}>
                  Prev
                </button>

                <span>{index + 1} / {students.length}</span>

                <button onClick={nextStudent} disabled={index === students.length - 1}>
                  Next
                </button>
              </div>
            </div>
          ) : (
            <div className="empty-state">No students added yet</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
