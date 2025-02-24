import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    role: "",
    lastName: "",
    firstName: "",
    middleName: "",
    motherName: "",
    dob: "",
    mobileNumber: "",
    email: "",
    course: "",
    year: "",
    gender: "",
    password: "",
    terms: false,
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.terms) {
      setResponseMessage("Please agree to the terms and conditions.");
      return;
    }

    axios
      .post("http://localhost:5000/signup", formData)
      .then((response) => {
        setResponseMessage(response.data.message);
      })
      .catch((error) => {
        setResponseMessage("An error occurred. Please try again later." + JSON.stringify(error));
      });
      window.location.reload();
  };

  return (
    <div className="form-wrapper Signup bg-gray-100 p-6 rounded-xl shadow-md max-w-lg mx-auto">
      <form className="signupform" onSubmit={(e)=>{handleSubmit(e)}}>
        <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>

        <select
          id="mySelect"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="cap">Cap User</option>
        </select>

        <div className="container grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {formData.role !== "teacher" && formData.role !== "cap" && (
            <>
              <div>
                <label htmlFor="middle-name" className="block text-sm font-medium text-gray-700">
                  Middle Name:
                </label>
                <input
                  type="text"
                  name="middleName"
                  placeholder="Middle Name"
                  value={formData.middleName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="mother-name" className="block text-sm font-medium text-gray-700">
                  Mother Name:
                </label>
                <input
                  type="text"
                  name="motherName"
                  placeholder="Mother Name"
                  value={formData.motherName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                  DOB:
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </>
          )}

          <div>
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
              Mobile Number:
            </label>
            <input
              type="text"
              name="mobileNumber"
              placeholder="Number"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email ID:
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label htmlFor="course" className="block text-sm font-medium text-gray-700">
              Course:
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="art">Arts</option>
              <option value="commerce">Commerce</option>
              <option value="science">Science</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="academic_year" className="block text-sm font-medium text-gray-700">
            Academic Year:
          </label>
          <select
            name="year"
            id="academic_year"
            value={formData.year}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="First Year">First Year</option>
            <option value="Second Year">Second Year</option>
            <option value="Third Year">Third Year</option>
            <option value="Fourth Year">Fourth Year</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Gender:</label>
          <div className="flex items-center gap-4">
            <div>
              <input
                type="radio"
                name="gender"
                value="male"
                id="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                value="female"
                id="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Create Password:
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="remember mt-4">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="terms" className="text-sm">
            I agree to the terms & conditions
          </label>
        </div>

        <button
          className="button w-full bg-blue-600 text-white py-2 px-4 rounded-lg mt-6 hover:bg-blue-700"
          type="submit"
        >
          Signup
        </button>

        {responseMessage && (
          <p className="text-center mt-4 text-sm text-red-600">{responseMessage}</p>
        )}

        <div className="Signup-link text-center mt-4">
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
