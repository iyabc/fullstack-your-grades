const columnHeaders = ["Course Number", "Course Name", "Units", "Grade"];

const Table = ({ data }) => {
  console.log(data);
  return (
    <table className="bg-slate-700 w-full">
      <th className="flex">
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
        {data.map((item, index) => {
          return (
            <tr
              key={index}
              className="flex justify-between text-center">
              <td>{item.courseNumber}</td>
              <td>{item.courseName}</td>
              <td>{item.units}</td>
              <td>{item.grade}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
