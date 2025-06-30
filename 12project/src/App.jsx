// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [course, setCourse] = useState("");
//   const [formData, setFormData] = useState([]);
//   const [searchName,setSearchName] = useState("")
//   const [searchCourse,setSearchCourse] = useState("");
//   const [filteredData,setFilteredData] = useState([]);
//   const [editIndex,setEditIndex] = useState(null)
//   function handleSearch(){
//     const updatedData = formData.filter((e)=>{
//       return (e.name === searchName) && (e.course === searchCourse)
//     })
//     setFilteredData(updatedData)
//   }
//   function handleDelete(index){
//     const updatedData = formData.filter((_,i)=> i !== index);
//     setFormData(updatedData)
//   }
//   return (
//     <div className="container">
//       <h1 className="heading">Student Management</h1>

//       {/* 📝 Form */}
//       <div className="form-section">
//         <label>Name:</label>
//         <input
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           type="text"
//           placeholder="Enter name"
//         />

//         <label>Age:</label>
//         <input
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//           type="number"
//           placeholder="Enter age"
//         />

//         <label>Course:</label>
//         <input
//           value={course}
//           onChange={(e) => setCourse(e.target.value)}
//           type="text"
//           placeholder="Enter course"
//         />

//         <button
//           onClick={() => {
//             const newData = { name, age, course };
//             if(editIndex === null){
//               setFormData([...formData, newData]);
//             }else {
//               const updatedData = [...formData];
//               updatedData[editIndex] = newData;
//               setFormData(updatedData)
//               setEditIndex(null)
//             }
//             setName("");
//             setAge("");
//             setCourse("");
//           }}
//           className="submit-btn"
//         >
//          {editIndex !== null ? "Update" : "Submit"}
//         </button>
//       </div>
//       <hr />
//       <input type="search" placeholder="enter name" value={searchName} onChange={(e)=>{
//         setSearchName(e.target.value)
//       }}/>
//       <select name="" id="" value={searchCourse} onChange={(e)=>setSearchCourse(e.target.value)}>
//         <option value="">--Select--</option>
//         <option value="react">React</option>
//         <option value="nodejs">NodeJs</option>
//         <option value="java">Java</option>
//         <option value="js">JS</option>
//       </select>
//       <br />
//       <button onClick={()=>{
//         handleSearch()
//       }}>Search</button>
//       <hr />

//       {/* 📋 Table */}
//       <table className="student-table" border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Course</th>
//             <th>Button</th>
//           </tr>
//         </thead>
//         <tbody>
//           {(filteredData.length > 0 ? filteredData : formData).map((e, key) => (
//             <tr key={key}>
//               <td>{e.name}</td>
//               <td>{e.age}</td>
//               <td>{e.course}</td>
//               <td>
//                 <div>
//                   <button
//                   onClick={()=>{
//                     setName(e.name)
//                     setAge(e.age)
//                     setCourse(e.course)
//                     setEditIndex(key)
//                   }}
//                   className="edit-btn">Edit</button>
//                   <button
//                   onClick={()=>{
//                     handleDelete(key);
//                   }}
//                   className="delete-btn">Delete</button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [formData, setFormData] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchCourse, setSearchCourse] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [error,setError] = useState("")
  function handleSearch() {
    if(searchName.trim() === "" && searchCourse.trim()){
      setFilteredData([])
       return;
      
    }
    const updatedData = formData.filter((e) => {
      const nameMatch = e.name.toLowerCase().includes(searchName.trim().toLowerCase())
      const courseMatch = e.course.toLowerCase().includes(searchCourse.trim().toLowerCase())
      return nameMatch && courseMatch
    });
    setFilteredData(updatedData);
  }

  function handleDelete(index) {
    const updatedData = formData.filter((_, i) => i !== index);
    setFormData(updatedData);
    setFilteredData([]);
  }
  useEffect(()=>{
    const saved = localStorage.getItem("students");
    if(saved){
      setFormData(JSON.parse(saved))
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("students", JSON.stringify(formData))
  },[formData])
  return (
    <div className="container">
      <h1 className="heading">Student Management</h1>

      {/* 📝 Form */}
      <div className="form-section">
        <label>Name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter name"
        />

        <label>Age:</label>
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          placeholder="Enter age"
        />

        <label>Course:</label>
        <input
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          type="text"
          placeholder="Enter course"
        />
        {error && <p
        style={{color :"red"}}
        >{error}</p>}
        <button
          onClick={() => {
            if(!name.trim()){
              setError("Name cannot be empty")
              return;
            }
            if(!age || age <= 0){
              setError("Age cannot be empty")
              return;
            }
            if(!course.trim()){
              setError("Course cannot be empty")
              return;
            }
            if(isNaN(age) || Number(age) <= 0){
              setError("Age must be valid number")
              return;
            }
            const newData = { name, age, course };
            if (editIndex === null) {
              setFormData([...formData, newData]);
            }else{
              const updatedData = [...formData]
              updatedData[editIndex] = newData;
              setFormData(updatedData)
              setEditIndex(null)
            }
            // Reset fields
            setName("");
            setAge("");
            setCourse("");
            setError("")
          }}
          className="submit-btn"
        >
          Submit
        </button>
      </div>
      <hr />
      <input
        type="search"
        name=""
        id=""
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
      <select
        name=""
        id=""
        value={searchCourse}
        onChange={(e) => setSearchCourse(e.target.value)}
      >
        <option value="">--Select--</option>
        <option value="react">React</option>
        <option value="java">java</option>
        <option value="js">js</option>
        <option value="ai">ai</option>
        <option value="Angular">Angular</option>
      </select>
      <br />
      <button
        onClick={() => {
          handleSearch();
        }}
      >
        Search
      </button>
      <hr />
      {/* 📋 Table */}
      <table className="student-table" border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody>
          {(filteredData.length > 0 ? filteredData : formData).map((e, key) => (
            <tr key={key}>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.course}</td>
              <td>
                <div>
                  <button
                    onClick={() => {
                      setName(e.name);
                      setAge(e.age);
                      setCourse(e.course);
                      setEditIndex(key);
                    }}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(key);
                    }}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
