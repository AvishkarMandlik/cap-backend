import React, { useState } from 'react'

function PhotoSignature() {
  const [photo, setPhoto] = useState(null);
  const [signature, setSignature] = useState(null);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSignatureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSignature(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Upload Documents</h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">File Specifications</h2>
        <div className="space-y-2">
          <p className="text-sm text-gray-700">Type: JPEG/JPG/PNG</p>
          <p className="text-sm text-gray-700">Dimensions: 320px X 240px</p>
          <p className="text-sm text-gray-700">Size: &lt;600kb</p>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Candidate Photo</label>
        <div className="mt-2">
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="hidden"
            id="photo-upload"
          />
          <label
            htmlFor="photo-upload"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
          >
            Choose File
          </label>
          <span className="ml-2 text-sm text-gray-500">
            {photo ? "File chosen" : "No file chosen"}
          </span>
        </div>
        {photo && (
          <div className="mt-4">
            <img
              src={photo}
              alt="Candidate Photo"
              className="w-80 h-60 object-cover border border-gray-300 rounded-md"
            />
          </div>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Candidate Sign</label>
        <div className="mt-2">
          <input
            type="file"
            accept="image/*"
            onChange={handleSignatureChange}
            className="hidden"
            id="signature-upload"
          />
          <label
            htmlFor="signature-upload"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
          >
            Choose File
          </label>
          <span className="ml-2 text-sm text-gray-500">
            {signature ? "File chosen" : "No file chosen"}
          </span>
        </div>
        {signature && (
          <div className="mt-4">
            <img
              src={signature}
              alt="Candidate Signature"
              className="w-80 h-60 object-cover border border-gray-300 rounded-md"
            />
          </div>
        )}
      </div>

      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
          Upload
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Next
        </button>
      </div>
    </div>
  );
};

export default PhotoSignature
