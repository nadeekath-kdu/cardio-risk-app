import React from "react";

const Prediction = ({ prediction, setPrediction }) => {
    console.log("Predictions:", prediction);
    if (prediction === null) return null;

    // Define risk levels and corresponding messages
    const riskLevels = ["<10%", "10% to <20%", "20% to <30%", "30% to <40%", ">=40%"];
    const riskMessages = [
        "✅ Very Low Risk",
        "⚠️ Low Risk",
        "⚠️ Moderate Risk",
        "⚠️ High Risk",
        "⚠️ Very High Risk"
    ];
    console.log("prediction:", prediction);
    // Determine the risk message based on the prediction
    const riskMessage = riskMessages[prediction];
    const riskLevel = riskLevels[prediction];

    return (
        <div className={`text-center mt-4 alert ${prediction >= 1 ? "alert-danger" : "alert-success"}`}>
            <h3>{riskMessage}</h3>
            <p className="fw-bold">Risk Level: {prediction}</p>
            {/* <button className="btn btn-outline-secondary mt-2" onClick={() => setPrediction(null)}>Clear Result</button> */}
        </div>
    );
};

export default Prediction;