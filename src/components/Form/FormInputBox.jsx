const FormInputBox = ({ id, type, label, value, handleChange }) => {
  return (
    <div className="flex flex-col mb-4 w-fit">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        className="border-b-2 px-1 border-regal-blue-800 outline-none bg-transparent focus:bg-gray-400/50 duration-500 ease-in-out"
      />
    </div>
  );
};

export default FormInputBox;
