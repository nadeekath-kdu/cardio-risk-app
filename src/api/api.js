import axios from "axios";

const API_URL = "https://cardio-risk-prediction.onrender.com/predict";

export const getPrediction = async (formData) => {
    try {
        const response = await axios.post(API_URL, formData);
        return response.data.risk_prediction;
    } catch (error) {
        console.error("Error:", error);
        return "Error making prediction";
    }
};
