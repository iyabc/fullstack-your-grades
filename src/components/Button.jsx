const Button = ({ text, type }) => {
  return (
    <button
      className="text-white font-bold bg-regal-blue-600 w-full px-6 py-3 rounded-full hover:cursor-pointer scale-90 duration-300 ease-in-out"
      type={type}>
      {text}
    </button>
  );
};

export default Button;
