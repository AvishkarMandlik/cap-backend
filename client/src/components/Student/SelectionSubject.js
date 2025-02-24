import React, { useState } from 'react'

function SelectionSubject() {
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const handleSubjectChange = (event, code) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedSubjects([...selectedSubjects, code]);
    } else {
      setSelectedSubjects(selectedSubjects.filter((subject) => subject !== code));
    }
  };

  const handleSaveAndNext = () => {
    console.log("Selected Subjects:", selectedSubjects);
    // You can add logic to save the selected subjects and navigate to the next step
  };

  const semester1Subjects = [
    { code: 'CS-601-MJ', name: 'SOFTWARE ARCHITECTURE AND DESIGN PATTERN' },
    { code: 'CS-602-MJ', name: 'MACHINE LEARNING' },
    { code: 'CS-603-MJ', name: 'INTERNET OF THINGS' },
    { code: 'CS-604-MJP', name: 'LAB COURSE ON CS-601, 603' },
    { code: 'CS-605-MJP', name: 'LAB COURSE CS-602' },
    { code: 'CS-610-MJ', name: 'FULL STACK DEVELOPMENT- II' },
    { code: 'CS-611-MJP', name: 'LAB COURSE ON CS-610-MJ' },
    { code: 'CS-631-RP', name: 'RESEARCH WORK-I' },
  ];

  const semester2Subjects = [
    { code: 'CS-651-MJP', name: 'Full Time Industrial Training (IT)' },
    { code: 'CS-681-RP', name: 'Research Work -II' },
  ];

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Subject Selection</h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Semester 1</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Code</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Select</th>
            </tr>
          </thead>
          <tbody>
            {semester1Subjects.map((subject) => (
              <tr key={subject.code} className="border border-gray-300">
                <td className="border border-gray-300 px-4 py-2">{subject.code}</td>
                <td className="border border-gray-300 px-4 py-2">{subject.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    checked={true}
                    readOnly
                    // onChange={(e) => handleSubjectChange(e, subject.code)}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Semester 2</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Code</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Select</th>
            </tr>
          </thead>
          <tbody>
            {semester2Subjects.map((subject) => (
              <tr key={subject.code} className="border border-gray-300">
                <td className="border border-gray-300 px-4 py-2">{subject.code}</td>
                <td className="border border-gray-300 px-4 py-2">{subject.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    onChange={(e) => handleSubjectChange(e, subject.code)}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSaveAndNext}
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Save and Next
        </button>
      </div>
    </div>
  );
};

export default SelectionSubject
