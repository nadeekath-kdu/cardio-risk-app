import React from "react";

const Prediction = ({ prediction, setPrediction }) => {
    if (prediction === null) return null;

    const isRisk = prediction !== 0;

    return (
        <div className={`text-center mt-4 alert ${isRisk ? "alert-danger" : "alert-success"}`}>
            <h3>{isRisk ? "⚠️ High Risk Detected" : "✅ No Risk Detected"}</h3>
            <p className="fw-bold">Prediction: {prediction}</p>
            {/* <button className="btn btn-outline-secondary mt-2" onClick={() => setPrediction(null)}>Clear Result</button> */}
        </div>
    );
};

export default Prediction;
