import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const [formData, setFormData] = useState([]);

  const [searchCourse, setSearchCourse] = useState("");
  const [debounceSearchCourse, setDebounceSearchCourse] = useState("");
  function handleFormData(e) {
    e.preventDefault();
    const newEntry = { name, age, course };
    setFormData([...formData, newEntry]);
    setAge("");
    setName("");
    setCourse("");
  }
  const [debouncedName, setDebouncedName] = useState("");
  const [debouncedCourse, setDebouncedCourse] = useState("");
  const [serachBtn, setSearchBtn] = useState(false);
  useEffect(() => {
    const interval = setTimeout(() => {
      setDebouncedName(name);
    }, 500);
    return () => clearTimeout(interval);
  }, [name]);
  useEffect(() => {
    const interval = setTimeout(() => {
      setDebouncedCourse(course);
    }, 500);
    return () => clearTimeout(interval);
  }, [course]);
  useEffect(() => {
    const id = setTimeout(() => {
      setDebounceSearchCourse(searchCourse);
    }, 500);

    return () => clearTimeout(id);
  }, [searchCourse]);

  function handleDelete(index) {
    console.log(index);
    const updatedData = [...formData];
    updatedData.splice(index, 1);
    setFormData(updatedData);
  }
  return (
    <>
      <h1>Form to register</h1>
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
        <br />

        <button
          onClick={(e) => {
            handleFormData(e);
          }}
        >
          Add student
        </button>
        <br />
        <br />
        <p>Name : {debouncedName}</p>
        <p>Course : {debouncedCourse}</p>

        <br />
        <br />

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
                      onClick={() => {
                        handleDelete(key);
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

        <div>
          <label>Course : </label>
          <input
            type="text"
            value={searchCourse}
            onChange={(e) => setSearchCourse(e.target.value)}
          />
          <p>Input : {debounceSearchCourse}</p>
          <button
            onClick={() => {
              setSearchBtn(true);
              if (setSearchCourse) {
                setSearchCourse(searchCourse);
              }
            }}
          >
            Search
          </button>
        </div>

        {serachBtn && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>
              {formData
                .filter((e) => {
                  return e.course === searchCourse;
                })
                .map((e, key) => {
                  return (
                    <tr key={key}>
                      <td>{e.name}</td>
                      <td>{e.age}</td>
                      <td>{e.course}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default App;
