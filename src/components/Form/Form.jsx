import Button from "../Button";
import FormInputBox from "./FormInputBox";
import FormRadioButton from "./FormRadioButton";

const Form = ({ formValues, handleInputChange, handleSubmit }) => {
  return (
    <form
      className="bg-deep-koamaru-700 w-fit p-5"
      onSubmit={(e) => handleSubmit(e)}>
      <FormInputBox
        label="Course Number"
        id="courseNumber"
        type="string"
        value={formValues.courseNumber}
        handleChange={(e) => handleInputChange(e)}
      />
      <FormInputBox
        label="Course Name"
        id="courseName"
        type="string"
        value={formValues.courseName}
        handleChange={(e) => handleInputChange(e)}
      />
      <FormInputBox
        label="Units"
        id="units"
        type="number"
        value={formValues.units}
        handleChange={(e) => handleInputChange(e)}
      />
      <div className="mb-3">
        <p className="mb-3">Grade</p>
        <FormRadioButton
          id="grade"
          value="A"
          handleChange={(e) => handleInputChange(e)}
        />
        <FormRadioButton
          id="grade"
          value="B+"
          handleChange={(e) => handleInputChange(e)}
        />
        <FormRadioButton
          id="grade"
          value="B"
          handleChange={(e) => handleInputChange(e)}
        />
        <FormRadioButton
          id="grade"
          value="C+"
          handleChange={(e) => handleInputChange(e)}
        />
        <FormRadioButton
          id="grade"
          value="C"
          handleChange={(e) => handleInputChange(e)}
        />
        <FormRadioButton
          id="grade"
          value="D"
          handleChange={(e) => handleInputChange(e)}
        />
        <FormRadioButton
          id="grade"
          value="F"
          handleChange={(e) => handleInputChange(e)}
        />
      </div>
      <Button
        text="Submit"
        type="submit"
      />
    </form>
  );
};

export default Form;
