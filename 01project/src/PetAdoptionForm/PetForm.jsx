import  { useState } from "react";
export function PetAdoptionForm() {
  const [value, setValue] = useState({
    name: "",
    age: "",
    email: "",
    mobile: "",
    address: "",
  });
  const [formData, setFormData] = useState([]);
  const [showTable, setShowTable] = useState(false);
  function handleSubmit() {
    setValue({
      name: "",
      age: "",
      email: "",
      mobile: "",
      address: "",
    });
    setFormData((prev) => [...prev, value]);

    console.log(value);
    console.log(formData);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <>
      <h1>Student Form</h1>
      <div>
        <div>
          <label htmlFor="">Student name</label>
          <br />
          <input
            value={value.name}
            type="text"
            onChange={handleChange}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="">Student age</label>
          <br />
          <input
            value={value.age}
            onChange={handleChange}
            type="number"
            name="age"
          />
        </div>
        <div>
          <label htmlFor="">Student email</label>
          <br />
          <input
            value={value.email}
            onChange={handleChange}
            type="email"
            name="email"
          />
        </div>
        <div>
          <label htmlFor="">Student mobile</label>
          <br />
          <input
            value={value.mobile}
            onChange={handleChange}
            type="number"
            name="mobile"
          />
        </div>
        <div>
          <label htmlFor="">Student address</label>
          <br />
          <input
            value={value.address}
            onChange={handleChange}
            type="text"
            name="address"
          />
        </div>
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <br />
      <button
        onClick={() => {
          setShowTable((prev) => !prev);
        }}
      >
        {showTable ? "Hide Table" : "Show table"}
      </button>
      {showTable && <Table formData={formData} />}
    </>
  );
}
function Table({ formData }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
            <td>mobile</td>
            <td>Address</td>
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.email}</td>
                <td>{data.mobile}</td>
                <td>{data.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
