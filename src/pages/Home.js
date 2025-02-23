import React, { useState } from "react";
import MultiStepForm from "../components/MultiStepForm";
import Prediction from "../components/Prediction";
import heartImage from "../assets/heart1.jpg";  // Import Image
import "../styles/App.css";

const Home = () => {
    const [prediction, setPrediction] = useState(null);

    return (
        <div className="container home-container">
            <div className="card shadow-sm p-4">
                <div className="row align-items-center">
                    {/* Image on the left */}
                    <div className="col-md-3 text-center">
                        <img src={heartImage} alt="Heart Health" className="heart-image" />
                    </div>
                    
                    {/* Form on the right */}
                    <div className="col-md-9">
                        {/* <h3 className="text-center mb-3">Cardiovascular Risk Prediction</h3> */}
                        <MultiStepForm setPrediction={setPrediction} />
                        <Prediction prediction={prediction} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
