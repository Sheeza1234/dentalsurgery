"use client";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm, ValidationError } from '@formspree/react';
import Link from "next/link";


const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    patientType: "new",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    contactMethod: [],
    treatment: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData({
      ...formData,
      contactMethod: checked
        ? [...formData.contactMethod, value]
        : formData.contactMethod.filter((method) => method !== value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://formspree.io/f/mvgqgnpo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        alert("Appointment request sent successfully!");

        setFormData({
          patientType: "new",
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          contactMethod: [],
          treatment: "",
          preferredDate: "",
          preferredTime: "",
          message: "",
        });

      } else {
        alert("Failed to send. Please try again.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("An error occurred.");
    }
  };



  return (
    <div>
      <div style={{ fontFamily: "OptimaModoki, sans-serif" }} className="flex items-center justify-center w-full bg-[#B6E5FD] py-10">
        <div className="max-w-4xl w-full p-8 >rounded-lg">
          <Link href="/appointment">
          <h2 className="text-6xl font-semibold text-[#1C4C57] mb-6 text-center">Request an Appointment</h2></Link>

          <form onSubmit={handleSubmit} className="space-y-4 text-xl">
            {/* Patient Type */}
            <div className="flex gap-6 ">
              <label className="flex items-center text-2xl space-x-2 text-gray-700">
                <input
                  type="radio"
                  name="patientType"
                  value="new"
                  checked={formData.patientType === "new"}
                  onChange={handleInputChange}
                  className="form-radio text-[#1C4C57]"
                />
                <span>New Patient</span>
              </label>
              <label className="flex items-center text-2xl space-x-2 text-gray-700">
                <input
                  type="radio"
                  name="patientType"
                  value="existing"
                  checked={formData.patientType === "existing"}
                  onChange={handleInputChange}
                  className="form-radio text-purple-600"
                />
                <span>Existing Patient</span>
              </label>
            </div>

            {/* Name */}
            <label className="flex items-center text-2xl space-x-2 text-gray-700">Name*</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <input
                type="text"
                name="firstName"
                placeholder="Enter Your First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="border border-[#1C4C57] p-3 w-full rounded-md focus:ring-2 focus:ring-[#1C4C57] outline-none"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Enter Your Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="border border-[#1C4C57] p-3 w-full rounded-md focus:ring-2 focus:ring-[#1C4C57] outline-none"
                required
              />
            </div>

            {/* Email */}
            <label className="flex items-center text-2xl space-x-2 text-gray-700 mt-12">Email*</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="border border-[#1C4C57] p-3 w-full rounded-md focus:ring-2 focus:ring-[#1C4C57] outline-none"
              required
            />

            {/* Mobile */}
            <label className="flex items-center text-2xl space-x-2 text-gray-700 mt-12">Mobile*</label>
            <div className="w-full">
              <PhoneInput
                country={"au"}
                onlyCountries={["au"]}
                disableDropdown={true}
                value={formData.mobile}
                onChange={(phone) => setFormData({ ...formData, mobile: phone })}
                inputClass="border border-[#1C4C57] text-4xl rounded-md focus:ring-2 focus:ring-[#1C4C57] outline-none"
                containerClass="w-full"
              />


            </div>


            {/* Preferred Contact Method */}
            <div>
              <p className="text-gray-700 mb-2 text-2xl mt-12">Preferred Contact Method:</p>
              <div className="flex flex-col gap-2">
                {["Call", "SMS", "Email"].map((method) => (
                  <label key={method} className="flex items-center space-x-2 text-gray-700">
                    <input
                      type="checkbox"
                      value={method}
                      checked={formData.contactMethod.includes(method)}
                      onChange={handleCheckboxChange}
                      className="form-checkbox text-[#1C4C57]"
                    />
                    <span>{method}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Treatment Selection */}
            <label className="flex items-center text-2xl space-x-2 text-gray-700 mt-12">Treatment*</label>
            <select
              name="treatment"
              value={formData.treatment}
              onChange={handleInputChange}
              className="border border-[#1C4C57] p-3 w-full rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
            >
              <option value="">-- Please Select Treatment --</option>
              <option value="Emergency Dental Appointment">Emergency Dental Appointment</option>
              <option value="Toothache Treatment">Toothache Treatment</option>
              <option value="Dental Checkup And Clean">Dental Checkup And Clean</option>
              <option value="Fill the gap(Missing Tooth Solutions)">Fill the gap(Missing Tooth Solutions)</option>
              <option value="All-on-4 Dental Implants">All-on-4 Dental Implants</option>
              <option value="Dentures">Dentures</option>
              <option value="Smile MakeOver(Cosmetic Dentistry) ">Smile MakeOver(Cosmetic Dentistry)</option>
              <option value="Treat tooth discoloration">Treat tooth discoloration</option>
              <option value="Family Dentistry">Family Dentistry</option>


            </select>

            {/* Preferred Date & Time */}
            <label className="text-2xl text-gray-700 mt-12">Preferred Date and Time*</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                className="border border-[#1C4C57] p-3 w-full rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
                required
              />

              <input
                type="time"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className="border border-[#1C4C57] p-3 w-full rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
                required
              />
            </div>
            <label className="flex items-center text-2xl space-x-2 text-gray-700 mt-12">Message*</label>
            <textarea
              name="message"
              rows="4"
              placeholder="How can we help?"
              value={formData.message}
              onChange={handleInputChange}
              className="border border-[#1C4C57] p-3 w-full rounded-md focus:ring-2 focus:ring-purple-400 outline-none"
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#1C4C57] text-white text-2xl font-semibold py-3 px-6 rounded-md transition duration-300"
            >
              Please Contact Us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
