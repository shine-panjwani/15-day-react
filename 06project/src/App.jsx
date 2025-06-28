import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
const students = [
  { name: "Shine", age: 21, course: "React" },
  { name: "Aman", age: 23, course: "Node.js" },
  { name: "Meena", age: 22, course: "React" },
  { name: "Rahul", age: 20, course: "Python" },
  { name: "Sneha", age: 25, course: "Node.js" },
];

const cellStyle = {
  border: "1px solid white",
  padding: "8px",
  textAlign: "left",
};
function App() {
  const [showTable, setShowTable] = useState(false);
  const [search, setSearch] = useState("");
  const [debouncedData, setDebouncedData] = useState("");

  const [selectedValue, setSelectedValue] = useState("");
  useEffect(() => {
    let interval = setTimeout(() => {
      setDebouncedData(search);
    }, 500);
    return () => clearTimeout(interval);
  }, [search]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        {" "}
        <h1>Table of students : </h1>
        <table
          style={{
            width: "60%",
            margin: "20px auto",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th style={cellStyle}>Name</th>
              <th style={cellStyle}>Age</th>
              <th style={cellStyle}>Course</th>
            </tr>
          </thead>
          <tbody>
            {students.map((v, key) => (
              <tr key={key}>
                <td style={cellStyle}>{v.name}</td>
                <td style={cellStyle}>{v.age}</td>
                <td style={cellStyle}>{v.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <h3>Input : {debouncedData}</h3>
        <select
          onChange={(e) => {
            setSelectedValue(e.target.value);
          }}
          name="course"
        >
          <option>React</option>
          <option>Node.js</option>
          <option>Python</option>
          <option>Java</option>
          <option>C++</option>
        </select>
        <br />
        <br />

        <h3>Selected course : {selectedValue}</h3>
        <button onClick={() => setShowTable((p) => !p)}>
          {showTable ? "Hide Table" : "Show table"}
        </button>

        {showTable && 
        <table>
          <thead>
            <tr>
              <th style={cellStyle}>Name</th>
              <th style={cellStyle}>Age</th>
              <th style={cellStyle}>Course</th>
            </tr>
          </thead>
          <tbody>
            {(students.filter((v) =>((v.course  === selectedValue) &&(v.name ===search)))
            .map((v, index) => {
                return <tr key={index}>
                  <td>{v.name}</td>
                  <td>{v.age}</td>
                  <td>{v.course}</td>
                </tr>
              })
            )}
          </tbody>
        </table>}
      </div>
    </div>
  );
}

export default App;
