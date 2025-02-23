import React, { useState } from "react";
import { getPrediction } from "../api/api";

const Form = ({ setPrediction }) => {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await getPrediction(formData);
        setPrediction(result);
    };

    return (
        <form onSubmit={handleSubmit} className="mt-3">
            <div className="mb-3">
                <input type="number" className="form-control" name="age" placeholder="Age" onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <input type="number" className="form-control" name="cholesterol" placeholder="Cholesterol" onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <input type="number" className="form-control" name="blood_pressure" placeholder="Blood Pressure" onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <select name="smoking" className="form-select" onChange={handleChange} required>
                    <option value="">Smoking?</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </select>
            </div>
            <div className="mb-3">
                <select name="diabetes" className="form-select" onChange={handleChange} required>
                    <option value="">Diabetes?</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </select>
            </div>
            <div className="mb-3">
                <select name="sex" className="form-select" onChange={handleChange} required>
                    <option value="">Sex</option>
                    <option value="1">Male</option>
                    <option value="0">Female</option>
                </select>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary w-100">Predict Risk</button>
            </div>
        </form>
    );
};

export default Form;
