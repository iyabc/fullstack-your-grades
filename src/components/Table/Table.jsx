import { useState } from "react";

const columnHeaders = ["Course Number", "Course Name", "Units", "Grade"];

const Table = ({ data }) => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  let totalQPI = 0.0;
  let totalGrade = 0.0;
  let totalUnits = 0;

  data.map((item) => {
    switch (item.grade) {
      case "A":
        totalGrade += 4 * item.units;
        break;
      case "B+":
        totalGrade += 3.3 * item.units;
        break;
      case "B":
        totalGrade += 3 * item.units;
        break;
      case "C+":
        totalGrade += 2.3 * item.units;
        break;
      case "C":
        totalGrade += 2 * item.units;
        break;
      case "D":
        totalGrade += 1 * item.units;
        break;
      case "F":
        totalGrade += 0 * item.units;
        break;
      default:
        break;
    }
    totalUnits += parseInt(item.units);
  });

  totalQPI = totalGrade / totalUnits;
  console.log("Total Grade: ", totalGrade);
  console.log("Total Units: ", totalUnits);
  console.log("Total QPI: ", totalQPI);

  const handleQueryChange = (e) => {
    e.preventDefault();
    const userInput = e.target.value;
    setQuery(userInput.toLowerCase());

    const filteredResults = data.filter(
      (item) =>
        item.courseNumber.toString().toLowerCase().includes(userInput.toLowerCase()) ||
        item.courseName.toString().toLowerCase().includes(userInput.toLowerCase())
    );

    setFilteredData(filteredResults);
  };

  return (
    <div className="bg-regal-blue-900/50 rounded flex flex-col h-full">
      <div className="flex justify-end my-3 px-3">
        <input
          id="query"
          type="text"
          placeholder="Search"
          className="border-b-2 px-1 border-regal-blue-800 outline-none bg-transparent focus:bg-gray-400/50 duration-500 ease-in-out"
          value={query}
          onChange={handleQueryChange}
        />
      </div>
      <div className="relative h-full">
        <table className="w-full mb-10">
          <th className="flex ">
            {columnHeaders.map((label, index) => {
              return (
                <td
                  key={index}
                  className="flex justify-around text-center">
                  {label}
                </td>
              );
            })}
          </th>
          <tbody>
            {(query != "" ? filteredData : data).map((item, index) => {
              return (
                <tr
                  key={index}
                  className={`flex justify-between text-center ${index % 2 ? "bg-gray-200/20" : "bg-gray-400/50"}`}>
                  <td>{item.courseNumber}</td>
                  <td>{item.courseName}</td>
                  <td>{item.units}</td>
                  <td>{item.grade}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className=" w-full text-right bg-regal-blue-100/50 absolute bottom-0 px-3 py-1 rounded-b z-10">
          <p className="font-bold">Total QPI: {totalQPI ? totalQPI.toFixed(2) : "0.00"}</p>
        </div>
      </div>
    </div>
  );
};

export default Table;
