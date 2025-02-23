import React, { useState } from "react";
import { getPrediction } from "../api/api";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft, FaArrowRight, FaRedo, FaCheck } from "react-icons/fa";

const MultiStepForm = ({ setPrediction }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        age: "",
        cholesterol: "",
        blood_pressure: "",
        smoking: "",
        diabetes: "",
        sex: "",
    });

    const [errors, setErrors] = useState({});  // Store validation errors
    const [touched, setTouched] = useState({}); // Track if the field was interacted with

    // Handle input changes (clear errors on typing)
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Mark the field as touched when the user clicks inside
    const handleBlur = (e) => {
        setTouched({ ...touched, [e.target.name]: true });
    };

    // Validate fields based on the current step
    const validateStep = () => {
        let newErrors = {};

        if (step === 1) {
            if (!formData.age) newErrors.age = "Age is required!";
            if (!formData.cholesterol) newErrors.cholesterol = "Cholesterol is required!";
        }
        if (step === 2) {
            if (!formData.blood_pressure) newErrors.blood_pressure = "Blood pressure is required!";
            if (formData.smoking === "") newErrors.smoking = "Please select smoking status!";
        }
        if (step === 3) {
            if (formData.diabetes === "") newErrors.diabetes = "Please select diabetes status!";
            if (formData.sex === "") newErrors.sex = "Please select gender!";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    // Go to the next step only if there are no validation errors
    const nextStep = () => {
        if (validateStep()) setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateStep()) {
            const result = await getPrediction(formData);
            setPrediction(result);
        }
    };

    const handleReset = () => {
        setFormData({
            age: "",
            cholesterol: "",
            blood_pressure: "",
            smoking: "",
            diabetes: "",
            sex: "",
        });
        setPrediction(null);
        setStep(1);
        setErrors({});
        setTouched({});
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card shadow-lg">
                        <div className="card-header bg-primary text-white text-center">
                            <h4>Cardiovascular Risk Prediction</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                {/* Display Errors on Next Click Only */}
                                {Object.keys(errors).length > 0 && (
                                    <div className="alert alert-danger">
                                        <strong>Error!</strong> Please fix the following issues:
                                        <ul className="mb-0">
                                            {Object.values(errors).map((err, index) => (
                                                <li key={index}>{err}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Step 1: Age & Cholesterol */}
                                {step === 1 && (
                                    <>
                                        <div className="mb-3">
                                            <label className="form-label">Age</label>
                                            <input type="number" className="form-control" name="age" placeholder="Enter age" value={formData.age} onChange={handleChange} onBlur={handleBlur} />
                                            {touched.age && errors.age && <div className="text-danger">{errors.age}</div>}
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Cholesterol</label>
                                            <input type="number" className="form-control" name="cholesterol" placeholder="Enter cholesterol level" value={formData.cholesterol} onChange={handleChange} onBlur={handleBlur} />
                                            {touched.cholesterol && errors.cholesterol && <div className="text-danger">{errors.cholesterol}</div>}
                                        </div>
                                    </>
                                )}

                                {/* Step 2: Blood Pressure & Smoking */}
                                {step === 2 && (
                                    <>
                                        <div className="mb-3">
                                            <label className="form-label">Blood Pressure</label>
                                            <input type="number" className="form-control" name="blood_pressure" placeholder="Enter blood pressure" value={formData.blood_pressure} onChange={handleChange} onBlur={handleBlur} />
                                            {touched.blood_pressure && errors.blood_pressure && <div className="text-danger">{errors.blood_pressure}</div>}
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Smoking</label>
                                            <select name="smoking" className="form-select" value={formData.smoking} onChange={handleChange} onBlur={handleBlur}>
                                                <option value="">Select</option>
                                                <option value="1">Yes</option>
                                                <option value="0">No</option>
                                            </select>
                                            {touched.smoking && errors.smoking && <div className="text-danger">{errors.smoking}</div>}
                                        </div>
                                    </>
                                )}

                                {/* Step 3: Diabetes & Sex */}
                                {step === 3 && (
                                    <>
                                        <div className="mb-3">
                                            <label className="form-label">Diabetes</label>
                                            <select name="diabetes" className="form-select" value={formData.diabetes} onChange={handleChange} onBlur={handleBlur}>
                                                <option value="">Select</option>
                                                <option value="1">Yes</option>
                                                <option value="0">No</option>
                                            </select>
                                            {touched.diabetes && errors.diabetes && <div className="text-danger">{errors.diabetes}</div>}
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Sex</label>
                                            <select name="sex" className="form-select" value={formData.sex} onChange={handleChange} onBlur={handleBlur}>
                                                <option value="">Select</option>
                                                <option value="1">Male</option>
                                                <option value="0">Female</option>
                                            </select>
                                            {touched.sex && errors.sex && <div className="text-danger">{errors.sex}</div>}
                                        </div>
                                    </>
                                )}

                                {/* Navigation Buttons */}
                                <div className="d-flex justify-content-between">
                                    {step > 1 && (
                                        <button type="button" className="btn btn-secondary" onClick={prevStep}>
                                            <FaArrowLeft /> Back
                                        </button>
                                    )}
                                    {step < 3 ? (
                                        <button type="button" className="btn btn-primary" onClick={nextStep}>
                                            Next <FaArrowRight />
                                        </button>
                                    ) : (
                                        <>
                                            <button type="submit" className="btn btn-success">
                                                <FaCheck /> Predict Risk
                                            </button>
                                            <button type="button" className="btn btn-danger ms-2" onClick={handleReset}>
                                                <FaRedo /> Reset
                                            </button>
                                        </>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultiStepForm;
