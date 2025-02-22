import React from "react";

const GradesTable = (props) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">درس</th>
            <th className="py-2 px-4 border-b">نمره</th>
          </tr>
        </thead>
        <tbody>
          {props.grades.map((grade, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{grade.course.name}</td>
              <td className="py-2 px-4 border-b">{grade.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GradesTable;
