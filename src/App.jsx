import { useState } from "react";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";

const formValuesDefault = {
  courseNumber: 0,
  courseName: "",
  units: 0,
  grade: "",
};

const tableDataDefault = [
  {
    courseNumber: 100,
    courseName: "Course 1",
    units: 5,
    grade: "A",
  },
  {
    courseNumber: 600,
    courseName: "Course 2",
    units: 10,
    grade: "C+",
  },
  {
    courseNumber: 600,
    courseName: "Course 2",
    units: 10,
    grade: "F",
  },
];

function App() {
  const [formValues, setFormValues] = useState(formValuesDefault);
  const [tableData, setTableData] = useState(tableDataDefault);

  const handleFormInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [id]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    setTableData((prevTableData) => [...prevTableData, formValues]);
  };

  return (
    <div className="bg-regal-blue-950 text-white h-screen">
      <Form
        formValues={formValues}
        handleInputChange={handleFormInputChange}
        handleSubmit={handleFormSubmit}
      />
      <Table data={tableData} />
    </div>
  );
}

export default App;
