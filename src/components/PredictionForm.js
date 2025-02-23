import React, { useState } from "react";

const PredictionForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    age: "",
    cholesterol: "",
    blood_pressure: "",
    smoking: "",
    diabetes: "",
    sex: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        required
        className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200"
      />
      <input
        type="number"
        name="cholesterol"
        placeholder="Cholesterol"
        value={formData.cholesterol}
        onChange={handleChange}
        required
        className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200"
      />
      <input
        type="number"
        name="blood_pressure"
        placeholder="Blood Pressure"
        value={formData.blood_pressure}
        onChange={handleChange}
        required
        className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200"
      />

      <select
        name="smoking"
        value={formData.smoking}
        onChange={handleChange}
        required
        className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200"
      >
        <option value="">Smoking?</option>
        <option value="1">Yes</option>
        <option value="0">No</option>
      </select>

      <select
        name="diabetes"
        value={formData.diabetes}
        onChange={handleChange}
        required
        className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200"
      >
        <option value="">Diabetes?</option>
        <option value="1">Yes</option>
        <option value="0">No</option>
      </select>

      <select
        name="sex"
        value={formData.sex}
        onChange={handleChange}
        required
        className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200"
      >
        <option value="">Sex</option>
        <option value="1">Male</option>
        <option value="0">Female</option>
      </select>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
      >
        {loading ? "Predicting..." : "Predict Risk"}
      </button>
    </form>
  );
};

export default PredictionForm;
