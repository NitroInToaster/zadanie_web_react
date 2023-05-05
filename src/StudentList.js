// import { inname } from './StudentAdd';
// import { insurname } from './StudentAdd';
// import { ingrades } from './StudentAdd';
function StudentList(props) {
    console.log(props.newStudentFromChild);

    return (
        <div className="student-list">
            <h1>Student List</h1>
            <ul>
                {props.newStudentFromChild.length !== 0 &&
                    props.newStudentFromChild.map((student) => (
                        <li key={student.id}>
                            <p>{`${student.studentName} ${student.studentSurname}`}</p>
                            <div className="grade">{student.studentGrades}</div>
                        </li>
                ))}
            </ul>
        </div>
    );
}
 
export default StudentList;