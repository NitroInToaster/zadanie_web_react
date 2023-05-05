import { useState } from "react";
import StudentAdd from './StudentAdd';
import StudentList from './StudentList';

function App() {
  const [data, setData] = useState([]);
  function getStudentData(data) {
    setData((prev) => [...prev, data]);
  }
  console.log(data);

  return (
    <div className="App">
      <StudentAdd newStudentFromChild={(data) => getStudentData(data)}/>
      <StudentList newStudentFromChild={data}/>
    </div>
  );
}

export default App;
