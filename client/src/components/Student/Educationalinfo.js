import React, { useRef } from 'react'

function Educationalinfo() {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
      // You can handle the file upload logic here (e.g., upload to a server)
    }
  };

  const handleChooseFileClick = () => {
    fileInputRef.current.click(); // Trigger the file input dialog
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Educational Info</h1>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Previous Exam Passed*</label>
        <input
          type="text"
          value="S.Y.M.Sc.(Comp. Sci.)"
          readOnly
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Eligibility No.:</label>
        <input
          type="text"
          value="12023235863"
          readOnly
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mb-6">
        <p className="text-sm text-gray-600">Note: Marksheet is mandatory.</p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Upload Educational Documents</label>
        <div className="mt-1">
          <select className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option>Select Documents*</option>
            <option>First Year Marksheet</option>
            <option>Second Year Marksheet</option>
            <option>Aadhaar Card</option>
            <option>Marksheet</option>
          </select>
        </div>
        <div className="mt-2">
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
          <button
            onClick={handleChooseFileClick}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Choose File
          </button>
          <span className="ml-2 text-sm text-gray-500">No file chosen</span>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Your uploaded Documents </h2>
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="text-sm text-gray-700">First Year Marksheet</span>
            <span className="ml-2 text-green-500">✅</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-700">Second Year Marksheet</span>
            <span className="ml-2 text-green-500">✅</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-700">Aadhaar Card</span>
            <span className="ml-2 text-green-500">✅</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-700">Marksheet</span>
            <span className="ml-2 text-green-500">✅</span>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Save Next</button>
      </div>
    </div>
  );
};


export default Educationalinfo
