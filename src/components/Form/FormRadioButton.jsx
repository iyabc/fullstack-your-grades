const FormRadioButton = ({ id, value, handleChange }) => {
  return (
    <div className="flex">
      <input
        id={id}
        type="radio"
        value={value}
        onChange={handleChange}
        name="grade-radio"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
      />
      <label
        htmlFor={id}
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {value}
      </label>
    </div>
  );
};

export default FormRadioButton;
