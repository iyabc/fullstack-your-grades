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
    courseNumber: "100A",
    courseName: "Course 1",
    units: 5,
    grade: "A",
  },
  {
    courseNumber: "600A",
    courseName: "Course 2",
    units: 10,
    grade: "C+",
  },
  {
    courseNumber: "600B",
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
    <div className="bg-regal-blue-950 text-white lg:px-5">
      <div className="flex justify-center my-10">
        <h1 className="font-bold text-2xl">Your Grades</h1>
      </div>
      <div className="flex flex-col gap-2 lg:flex-row">
        <div className="flex justify-center lg:justify-left h-fit">
          <Form
            formValues={formValues}
            handleInputChange={handleFormInputChange}
            handleSubmit={handleFormSubmit}
          />
        </div>
        <div className="w-full">
          <Table data={tableData} />
        </div>
      </div>
    </div>
  );
}

export default App;
