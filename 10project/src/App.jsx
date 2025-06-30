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
  useEffect(() => {
    const saveData = localStorage.getItem("students");
    if (saveData) {
      setFormData(JSON.parse(saveData));
    }
  }, []);
  function handleDelete(index) {
    // const data = formData[index]
    // const remData = formData.splice(index,1);
    // console.log(remData);
    // const updatedData = [...formData];
    const updatedData = formData.filter((_, i) => i !== index);
    console.log(updatedData);
    setFormData(updatedData);
  }
  return (
    <div className="container">
      <h1 className="heading">Student Management</h1>
      {/* Form */}
      <div className="form-section">
        <label>Name:</label>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
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

        <button
          onClick={() => {
            const newData = { name, age, course };
            if (editIndex === null) {
              const updatedData = [...formData, newData];
              setFormData(updatedData);
              localStorage.setItem("students", JSON.stringify(updatedData));
              console.log(formData);
            } else {
              const updated = [...formData];
              updated[editIndex] = newData;
              setFormData(updated);
              localStorage.setItem("students", JSON.stringify(updated));
              setEditIndex(null);
            }

            setAge("");
            setName("");
            setCourse("");
          }}
          className="submit-btn"
        >
          Submit
        </button>
      </div>

      <hr />

      {/* Search and Filter */}
      <div className="filter-section">
        <input
          type="text"
          placeholder="Search by name"
          onChange={(e) => setSearchName(e.target.value)}
        />
        <select
          onChange={(e) => {
            setSearchCourse(e.target.value);
          }}
        >
          <option value="">-- Filter by course --</option>
          <option value="React">React</option>
          <option value="Node.js">Node.js</option>
          <option value="Python">Python</option>
        </select>
        <button
          onClick={() => {
            const data = formData.filter((v) => {
              return v.name === searchName && v.course === searchCourse;
            });
            setFilteredData(data);
          }}
          className="search-btn"
        >
          Search
        </button>
      </div>

      <hr />

      {/* Table */}
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {(filteredData.length > 0 ? filteredData : formData).map((e, key) => {
            return (
              <tr key={key}>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.course}</td>
                <td>
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
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
