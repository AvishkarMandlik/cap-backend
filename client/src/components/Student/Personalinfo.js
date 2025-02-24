import { useState } from "react";

const PersonalInfo = () => {
  const [level, setLevel] = useState("undergraduate");
  const [course, setCourse] = useState("BSc");
  const [stream, setStream] = useState("Plain");
  const [year, setYear] = useState("First Year");

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("unmarried");
  const [motherName, setMotherName] = useState("");
  const [pincode, setPincode] = useState("");
  const [localAddress, setLocalAddress] = useState("");
  const [DOB, setDOB] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [POB, setPOB] = useState("");
  const [handicap, setHandicap] = useState("No");

  const [fatherName, setFatherName] = useState("");
  const [fatherMobileNumber, setFatherMobileNumber] = useState("");
  const [fatherOccupation, setFatherOccupation] = useState("");
  const [income, setIncome] = useState("");
  const [category, setCategory] = useState("");
  const [religion, setReligion] = useState("");
  const [caste, setCaste] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [abcid, setAbcid] = useState("");

  const courses = {
    undergraduate: {
      BSc: {
        Plain: ["First Year", "Second Year", "Third Year"],
        Mathematics: ["First Year", "Second Year", "Third Year"],
        Physics: ["First Year", "Second Year", "Third Year"],
        Chemistry: ["First Year", "Second Year", "Third Year"],
        Biology: ["First Year", "Second Year", "Third Year"],
        Computer_Science: ["First Year", "Second Year", "Third Year"],
        Statistics: ["First Year", "Second Year", "Third Year"],
        Biotechnology: ["First Year", "Second Year", "Third Year"],
        Microbiology: ["First Year", "Second Year", "Third Year"],
        Environmental_Science: ["First Year", "Second Year", "Third Year"],
        Zoology: ["First Year", "Second Year", "Third Year"],
        Botany: ["First Year", "Second Year", "Third Year"],
        Geology: ["First Year", "Second Year", "Third Year"],
        Astronomy: ["First Year", "Second Year", "Third Year"],
        Food_Science: ["First Year", "Second Year", "Third Year"],
        Forensic_Science: ["First Year", "Second Year", "Third Year"],
        Agricultural_Science: ["First Year", "Second Year", "Third Year"],
        Home_Science: ["First Year", "Second Year", "Third Year"],
        Nursing: ["First Year", "Second Year", "Third Year"],
        Biochemistry: ["First Year", "Second Year", "Third Year"],
        Genetics: ["First Year", "Second Year", "Third Year"],
        Marine_Biology: ["First Year", "Second Year", "Third Year"],
      },
      BBA: {
        Plain: ["First Year", "Second Year", "Third Year"],
        Finance: ["First Year", "Second Year", "Third Year"],
        Marketing: ["First Year", "Second Year", "Third Year"],
        Human_Resource_Management: ["First Year", "Second Year", "Third Year"],
        International_Business: ["First Year", "Second Year", "Third Year"],
        Entrepreneurship: ["First Year", "Second Year", "Third Year"],
        Digital_Marketing: ["First Year", "Second Year", "Third Year"],
        Information_Technology: ["First Year", "Second Year", "Third Year"],
        Operations_Management: ["First Year", "Second Year", "Third Year"],
        Retail_Management: ["First Year", "Second Year", "Third Year"],
        Hospitality_Management: ["First Year", "Second Year", "Third Year"],
        Logistics_and_Supply_Chain_Management: [
          "First Year",
          "Second Year",
          "Third Year",
        ],
        Event_Management: ["First Year", "Second Year", "Third Year"],
        Healthcare_Management: ["First Year", "Second Year", "Third Year"],
        Sports_Management: ["First Year", "Second Year", "Third Year"],
        Tourism_and_Travel_Management: [
          "First Year",
          "Second Year",
          "Third Year",
        ],
      },
      BCA: {
        Plain: ["First Year", "Second Year", "Third Year"],
        Computer_Science: ["First Year", "Second Year", "Third Year"],
        Artificial_Intelligence: ["First Year", "Second Year", "Third Year"],
        Cyber_Security: ["First Year", "Second Year", "Third Year"],
        Data_Science: ["First Year", "Second Year", "Third Year"],
        Cloud_Computing: ["First Year", "Second Year", "Third Year"],
        Internet_of_Things: ["First Year", "Second Year", "Third Year"],
        Blockchain_Technology: ["First Year", "Second Year", "Third Year"],
        Game_Development: ["First Year", "Second Year", "Third Year"],
        Software_Engineering: ["First Year", "Second Year", "Third Year"],
        Full_Stack_Development: ["First Year", "Second Year", "Third Year"],
        Networking_and_IT_Infrastructure: [
          "First Year",
          "Second Year",
          "Third Year",
        ],
      },
      BCS: {
        Plain: ["First Year", "Second Year", "Third Year"],
        Computer_Science: ["First Year", "Second Year", "Third Year"],
        Artificial_Intelligence: ["First Year", "Second Year", "Third Year"],
        Cyber_Security: ["First Year", "Second Year", "Third Year"],
        Data_Science: ["First Year", "Second Year", "Third Year"],
        Cloud_Computing: ["First Year", "Second Year", "Third Year"],
        Machine_Learning: ["First Year", "Second Year", "Third Year"],
        Internet_of_Things: ["First Year", "Second Year", "Third Year"],
        Blockchain_Technology: ["First Year", "Second Year", "Third Year"],
        Software_Engineering: ["First Year", "Second Year", "Third Year"],
        Full_Stack_Development: ["First Year", "Second Year", "Third Year"],
        Networking_and_Security: ["First Year", "Second Year", "Third Year"],
        Embedded_Systems: ["First Year", "Second Year", "Third Year"],
        Game_Development: ["First Year", "Second Year", "Third Year"],
        Quantum_Computing: ["First Year", "Second Year", "Third Year"],
        Bioinformatics: ["First Year", "Second Year", "Third Year"],
      },
    },
    postgraduate: {
      MSc: {
        Plain: ["First Year", "Second Year"],
        Mathematics: ["First Year", "Second Year"],
        Physics: ["First Year", "Second Year"],
        Chemistry: ["First Year", "Second Year"],
        Biology: ["First Year", "Second Year"],
        Computer_Science: ["First Year", "Second Year"],
        Statistics: ["First Year", "Second Year"],
        Biotechnology: ["First Year", "Second Year"],
        Microbiology: ["First Year", "Second Year"],
        Environmental_Science: ["First Year", "Second Year"],
        Zoology: ["First Year", "Second Year"],
        Botany: ["First Year", "Second Year"],
        Geology: ["First Year", "Second Year"],
        Astronomy: ["First Year", "Second Year"],
        Food_Science: ["First Year", "Second Year"],
        Forensic_Science: ["First Year", "Second Year"],
        Agricultural_Science: ["First Year", "Second Year"],
        Home_Science: ["First Year", "Second Year"],
        Nursing: ["First Year", "Second Year"],
        Biochemistry: ["First Year", "Second Year"],
        Genetics: ["First Year", "Second Year"],
        Marine_Biology: ["First Year", "Second Year"],
        Artificial_Intelligence: ["First Year", "Second Year"],
        Data_Science: ["First Year", "Second Year"],
        Cyber_Security: ["First Year", "Second Year"],
        Cloud_Computing: ["First Year", "Second Year"],
        Machine_Learning: ["First Year", "Second Year"],
        Quantum_Computing: ["First Year", "Second Year"],
        Bioinformatics: ["First Year", "Second Year"],
      },
      MBA: {
        Plain: ["First Year", "Second Year"],
        Finance: ["First Year", "Second Year"],
        Marketing: ["First Year", "Second Year"],
        Human_Resource_Management: ["First Year", "Second Year"],
        International_Business: ["First Year", "Second Year"],
        Entrepreneurship: ["First Year", "Second Year"],
        Digital_Marketing: ["First Year", "Second Year"],
        Information_Technology: ["First Year", "Second Year"],
        Operations_Management: ["First Year", "Second Year"],
        Retail_Management: ["First Year", "Second Year"],
        Hospitality_Management: ["First Year", "Second Year"],
        Logistics_and_Supply_Chain_Management: ["First Year", "Second Year"],
        Event_Management: ["First Year", "Second Year"],
        Healthcare_Management: ["First Year", "Second Year"],
        Sports_Management: ["First Year", "Second Year"],
        Tourism_and_Travel_Management: ["First Year", "Second Year"],
        Business_Analytics: ["First Year", "Second Year"],
        Risk_Management: ["First Year", "Second Year"],
        Public_Relations: ["First Year", "Second Year"],
        Banking_and_Financial_Services: ["First Year", "Second Year"],
        Corporate_Law: ["First Year", "Second Year"],
        Media_Management: ["First Year", "Second Year"],
        "E-Commerce_Management": ["First Year", "Second Year"],
        Real_Estate_Management: ["First Year", "Second Year"],
        Strategic_Management: ["First Year", "Second Year"],
        Leadership_and_Change_Management: ["First Year", "Second Year"],
        Artificial_Intelligence_and_Data_Science: ["First Year", "Second Year"],
      },
      MCA: {
        Plain: ["First Year", "Second Year", "Third Year"],
        Computer_Science: ["First Year", "Second Year", "Third Year"],
        Artificial_Intelligence: ["First Year", "Second Year", "Third Year"],
        Cyber_Security: ["First Year", "Second Year", "Third Year"],
        Data_Science: ["First Year", "Second Year", "Third Year"],
        Cloud_Computing: ["First Year", "Second Year", "Third Year"],
        Machine_Learning: ["First Year", "Second Year", "Third Year"],
        Internet_of_Things: ["First Year", "Second Year", "Third Year"],
        Blockchain_Technology: ["First Year", "Second Year", "Third Year"],
        Software_Engineering: ["First Year", "Second Year", "Third Year"],
        Full_Stack_Development: ["First Year", "Second Year", "Third Year"],
        Networking_and_Security: ["First Year", "Second Year", "Third Year"],
        Embedded_Systems: ["First Year", "Second Year", "Third Year"],
        Game_Development: ["First Year", "Second Year", "Third Year"],
        Big_Data_Analytics: ["First Year", "Second Year", "Third Year"],
        Mobile_Application_Development: [
          "First Year",
          "Second Year",
          "Third Year",
        ],
        Quantum_Computing: ["First Year", "Second Year", "Third Year"],
        Bioinformatics: ["First Year", "Second Year", "Third Year"],
      },
      MCS: {
        Plain: ["First Year", "Second Year"],
        Computer_Science: ["First Year", "Second Year"],
        Artificial_Intelligence: ["First Year", "Second Year"],
        Cyber_Security: ["First Year", "Second Year"],
        Data_Science: ["First Year", "Second Year"],
        Cloud_Computing: ["First Year", "Second Year"],
        Machine_Learning: ["First Year", "Second Year"],
        Internet_of_Things: ["First Year", "Second Year"],
        Blockchain_Technology: ["First Year", "Second Year"],
        Software_Engineering: ["First Year", "Second Year"],
        Full_Stack_Development: ["First Year", "Second Year"],
        Networking_and_Security: ["First Year", "Second Year"],
        Embedded_Systems: ["First Year", "Second Year"],
        Game_Development: ["First Year", "Second Year"],
        Big_Data_Analytics: ["First Year", "Second Year"],
        Mobile_Application_Development: ["First Year", "Second Year"],
        Quantum_Computing: ["First Year", "Second Year"],
        Bioinformatics: ["First Year", "Second Year"],
      },
    },
  };

  return (
    <div className="container mx-auto p-4 h-[calc(100vh-8rem)] overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4">Basic Info</h1>

      {/* Admission Details */}
      <div className="mb-6 flex flex-wrap gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Admission Applying For *
          </label>
          <select
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => {
              setLevel(e.target.value);
              setCourse(Object.keys(courses[e.target.value])[0]);
              setStream(
                Object.keys(
                  courses[e.target.value][
                    Object.keys(courses[e.target.value])[0]
                  ]
                )[0]
              );
              setYear(
                courses[e.target.value][
                  Object.keys(courses[e.target.value])[0]
                ][
                  Object.keys(
                    courses[e.target.value][
                      Object.keys(courses[e.target.value])[0]
                    ]
                  )[0]
                ][0]
              );
            }}
          >
            <option value="undergraduate">Under Graduate</option>
            <option value="postgraduate">Post Graduate</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Course
          </label>
          <select
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => {
              setCourse(e.target.value);
              setStream(Object.keys(courses[level][e.target.value])[0]);
              setYear(
                courses[level][e.target.value][
                  Object.keys(courses[level][e.target.value])[0]
                ][0]
              );
            }}
          >
            {Object.keys(courses[level]).map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Stream
          </label>
          <select
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => {
              setStream(e.target.value);
              setYear(courses[level][course][e.target.value][0]);
            }}
          >
            {Object.keys(courses[level][course]).map((stream) => (
              <option key={stream} value={stream}>
                {stream}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Year
          </label>
          <select
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => setYear(e.target.value)}
          >
            {courses[level][course][stream].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Admission Applying Class */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Admission Applying Class *
        </label>
        <input
          type="text"
          value={`${year} ${course} ${stream}`}
          readOnly
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Candidate's Name */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Candidate’s Name (As given in 10<sup>th</sup>/12<sup>th</sup>{" "}
          Certificate) *
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Permanent Address */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Permanent Address *
        </label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* State and City */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            State *
          </label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            City *
          </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Gender and Marital Status */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Gender *
          </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Marital Status *
          </label>
          <select
            value={maritalStatus}
            onChange={(e) => setMaritalStatus(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="unmarried">Unmarried</option>
            <option value="married">Married</option>
          </select>
        </div>
      </div>

      {/* Mother's Name and Pincode */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Mother's Name
          </label>
          <input
            type="text"
            value={motherName}
            onChange={(e) => setMotherName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Pincode
          </label>
          <label className="block text-sm font-medium text-gray-700">
            Pincode
          </label>
          <input
            type="number"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Local Address */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Local Address *
        </label>
        <input
          type="text"
          value={localAddress}
          onChange={(e) => setLocalAddress(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* DOB and Mobile No */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            DOB *
          </label>
          <input
            type="date"
            value={DOB}
            onChange={(e) => setDOB(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Mobile No *
          </label>
          <input
            type="number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Email ID */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Email ID *
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Place of Birth */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Place Of Birth *
        </label>
        <input
          type="text"
          value={POB}
          onChange={(e) => setPOB(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Is Handicapped */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">
          Is Handicapped
        </label>
        <select
          value={handicap}
          onChange={(e) => setHandicap(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      {/* Additional Information */}
      <h2 className="text-xl font-bold mt-8 mb-4">Additional Information</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Parents/Guardian Name *
          </label>
          <input
            type="text"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Parent Cell No *
          </label>
          <input
            type="number"
            value={fatherMobileNumber}
            onChange={(e) => setFatherMobileNumber(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Category and Organ Donation */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Occupation of Parents *
          </label>
          <input
            type="text"
            value={fatherOccupation}
            onChange={(e) => setFatherOccupation(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Annual Income of Parents *
          </label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Parents/Guardian Name and Email */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category *
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="General">General</option>
            <option value="OBC">OBC</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="NT">NT</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Religion *
          </label>
          <select
            type="text"
            value={religion}
            onChange={(e) => setReligion(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="Hindu">Hindu</option>
            <option value="Muslim">Muslim</option>
            <option value="Christian">Christian</option>
            <option value="Sikh">Sikh</option>
            <option value="Jain">Jain</option>
            <option value="Buddhist">Buddhist</option>
            <option value="Others">Others</option>
          </select>
        </div>
      </div>

      {/* Occupation and Parent Cell No */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Caste *
          </label>
          <input
            type="text"
            value={caste}
            onChange={(e) => setCaste(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Blood Group *
          </label>
          <select
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
      </div>

      {/* Aadhar Card No and Religion */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Aadhar Card No *
          </label>
          <input
            type="number"
            value={aadharNumber}
            onChange={(e) => setAadharNumber(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            ABC ID *
          </label>
          <input
            type="number"
            value={abcid}
            onChange={(e) => setAbcid(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;

