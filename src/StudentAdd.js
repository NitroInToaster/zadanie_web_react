import { useState } from 'react';
function StudentAdd(props) {
    // let inname = "";
    // let insurname = "";
    // let ingrades = "";
    const [inname, setName] = useState("");
    const [insurname, setSurname] = useState("");
    const [ingrades, setGrades] = useState("");
    // const onClickAddStudent = () => {
    //     console.log(inname, insurname, ingrades)
    // };
    function onClickAddStudent(event) {
        event.preventDefault();
        console.log(inname, insurname, ingrades)
        
        let avg = ingrades.split(",").map(Number);
        console.log(avg);


        let average = avg.reduce((a, b) => a + b, 0) / avg.length;
        console.log(average);


        const newStudent = {
            studentName: inname,
            studentSurname: insurname,
            studentGrades: average,
            id: Math.floor(Math.random() * 10000)
        };
        props.newStudentFromChild(newStudent);
        setName("");
        setSurname("");
        setGrades("");
    }


    return (
        // <nav className="student-add">
        //     <h1>Add Student</h1>
        //     <input type="text" id="name" name="name" value={inname} placeholder="Name" required onChange={(event) => setName(event.target.value)}/>
        //     <input type="text" id="surname" name="surname" value={insurname} placeholder="Surname" required onChange={(event) => setSurname(event.target.value)}/>
        //     <input type="text" id="grades" name="grades"value={ingrades} placeholder="Grades" required onChange={(event) => setGrades(event.target.value)}/>
        //     <button type="submit">Add</button>
        // </nav>

        <form onSubmit={onClickAddStudent}>
            <label>Add Student</label>
            <input 
                type="text" 
                id="name" 
                name="name" 
                value={inname} 
                placeholder="Name" 
                required 
                onChange={(event) => setName(event.target.value)}/>
            <input 
                type="text" 
                id="surname" 
                name="surname" 
                value={insurname} 
                placeholder="Surname" 
                required 
                onChange={(event) => setSurname(event.target.value)}/>
            <input 
                type="text" 
                id="grades" 
                name="grades" 
                value={ingrades} 
                placeholder="Grades" 
                required 
                onChange={(event) => setGrades(event.target.value)}/>
            <button type="submit">Add</button>
        </form>
    );
}
 
export default StudentAdd;