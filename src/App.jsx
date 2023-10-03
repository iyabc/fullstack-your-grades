import { useState } from "react";
import Form from "./components/Form/Form";

const formValuesDefault = {
  courseNumber: 0,
  courseName: "",
  units: 0,
  grade: 0,
};

function App() {
  const [formValues, setFormValues] = useState(formValuesDefault);
  const [tableData, setTableData] = useState([]);

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
    </div>
  );
}

export default App;
