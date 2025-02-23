import React from "react";

const PredictionResult = ({ prediction, error }) => {
  return (
    <div className="mt-4">
      {error && (
        <p className="text-red-500 text-center p-2 bg-red-100 rounded-lg">
          {error}
        </p>
      )}
      {prediction !== null && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
          <h3 className="font-semibold">Prediction:</h3>
          <p className="text-lg">{prediction}</p>
        </div>
      )}
    </div>
  );
};

export default PredictionResult;
