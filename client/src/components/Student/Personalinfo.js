import React from 'react';

const PersonalInfo = () => {
  return (
    <div className="container mx-auto p-4 h-[calc(100vh-8rem)] overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4">Basic Info</h1>

      {/* Admission Details */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Admission Applying For *</label>
        <input
          type="text"
          
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Admission Applying Class *</label>
        <input
          type="text"
          value="S.Y.M.Sc.(Comp. Sci.)"
          readOnly
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Candidate's Name */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Candidate’s Name (As given in 10<sup>th</sup>/12<sup>th</sup> Certificate) *</label>
        <input
          type="text"
          value="Mandlik Avishkar Bapusaheb"
          readOnly
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Permanent Address */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Permanent Address *</label>
        <input
          type="text"
          value="Mandlik Akhada, Baragaan Nandur, Tel.Rahuri"
          readOnly
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* State and City */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">State *</label>
          <input
            type="text"
            value="Maharashtra"
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">City *</label>
          <input
            type="text"
            value="Ahmednagar"
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Gender and Marital Status */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Gender *</label>
          <input
            type="text"
            value="Male"
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Marital Status *</label>
          <input
            type="text"
            value="UnMarried"
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Mother's Name and Pincode */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Mother's Name</label>
          <input
            type="text"
            value="Chhaya"
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Pincode</label>
          <input
            type="text"
            value="413705"
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Local Address */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Local Address *</label>
        <input
          type="text"
          value="Same as Permanent address"
          readOnly
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* DOB and Mobile No */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">DOB *</label>
          <input
            type="text"
            value="27/12/2002"
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Mobile No *</label>
          <input
            type="text"
            value="9370286362"
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Email ID */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Email ID *</label>
        <input
          type="text"
          value="mandlikavit21@gmail.com"
          readOnly
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Place of Birth */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Place Of Birth *</label>
        <input
          type="text"
          value="Shevgaon"
          readOnly
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Is Handicapped */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Is Handicapped</label>
        <input
          type="text"
          value="No"
          readOnly
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Additional Information */}
      <h2 className="text-xl font-bold mt-8 mb-4">Additional Information</h2>

      {/* Blood Group and Nationality */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Blood Group *</label>
          <input
            type="text"
            value="B+"
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Nationality *</label>
          <input
            type="text"
            value="Indian"
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Category and Organ Donation */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Category *</label>
          <input
            type="text"
            value="-Select-"
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Organ Donation</label>
          <input
            type="text"
            value="No"
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Parents/Guardian Name and Email */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Parents/Guardian Name *</label>
          <input
            type="text"
            value="Bapusaheb Navnaith Mandik"
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Parent Email ID</label>
          <input
            type="text"
            value="mandikbapusaheb@gmail.com"
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Occupation and Parent Cell No */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Occupation of Parents *</label>
          <input
            type="text"
            value="Farmer"
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Parent Cell No *</label>
          <input
            type="text"
            value="9359330854"
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Aadhar Card No and Religion */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Aadhar Card No *</label>
          <input
            type="text"
            value="444270223069"
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Religion *</label>
          <input
            type="text"
            value="Hindu"
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Annual Income and Fees Category */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Annual Income of Parents *</label>
          <input
            type="text"
            value="65000"
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Fees Category *</label>
          <input
            type="text"
            value="N.T."
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Caste and Mother Tongue */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Caste *</label>
          <input
            type="text"
            value="Dhangar"
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Mother Tongue *</label>
          <input
            type="text"
            value="Marathi"
            readOnly
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* ABC ID */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">ABC ID *</label>
        <input
          type="text"
          value="543048678297"
          readOnly
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;