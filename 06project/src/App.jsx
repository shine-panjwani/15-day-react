import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [formData, setFormData] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterCourse, setFilterCourse] = useState("");

  function handleSorting() {
    const sortedData = [...formData].sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );
    setFormData(sortedData);
  }
  return (
    <>
      <h1>Form</h1>
      <div>
        <div>
          <label htmlFor="">Name : </label>
          <input
            value={name}
            type="text"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Age : </label>
          <input
            value={age}
            type="number"
            name="age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Course : </label>
          <input
            value={course}
            type="text"
            name="course"
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            setFormData([...formData, { name, age, course }]);
            setName("");
            setAge("");
            setCourse("");
          }}
        >
          Submit
        </button>
      </div>
      <br />
      <h1>Table of students</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Arrange in order : </p>
        <button
          onClick={() => {
            handleSorting();
          }}
        >
          Sorted
        </button>
      </div>
      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: "collapse", marginTop: "20px" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((v, key) => {
            return (
              <tr key={key}>
                <td>{v.name}</td>
                <td>{v.age}</td>
                <td>{v.course}</td>
                <td>
                  <button
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => {
          setFilterName(e.target.value);
        }}
        style={{ padding: "6px" }}
      />
      <div>
        <label htmlFor="">Course</label>
        <select name="" id="" onChange={(e) => setFilterCourse(e.target.value)}>
          <option value="">--Select--</option>
          <option value="">React</option>
          <option value="">Nodejs</option>
          <option value="">Javascript</option>
          <option value="">Nextjs</option>
        </select>
      </div>
      <br />
      <button>Filter</button>
      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: "collapse", marginTop: "20px" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {formData
            .filter((e) => {
              const matchName = e.name
                .toLowerCase()
                .includes(filterName.toLowerCase());
              const matchCourse =
                filterCourse === "" ||
                e.course.toLowerCase() === filterCourse.toLowerCase();
              return matchName && matchCourse;
            })
            .map((v, key) => {
              return (
                <tr key={key}>
                  <td>{v.name}</td>
                  <td>{v.age}</td>
                  <td>{v.course}</td>
                  <td>
                    <button
                      style={{
                        padding: "5px 10px",
                        backgroundColor: "red",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default App;
