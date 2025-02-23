import React, { useState } from "react";
import PredictionForm from "../components/PredictionForm";
import PredictionResult from "../components/PredictionResult";
import axios from "axios";

const Home = () => {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://cardio-risk-prediction.onrender.com/predict",
        formData
      );
      setPrediction(response.data.risk_prediction);
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to fetch prediction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
        Cardiovascular Risk Prediction
      </h2>
      <PredictionForm onSubmit={handleSubmit} loading={loading} />
      <PredictionResult prediction={prediction} error={error} />
    </div>
  );
};

export default Home;
