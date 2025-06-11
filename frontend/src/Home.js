import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {

    const [result, setResult] = useState(null);

    const handleRecognize = () => {
        fetch('http://localhost/api', {
            method: "GET"
        })
            .then(response => response.json())
            .then(data => setResult(data.test))
    };

    return (
        <div className="main-background">
            <div className="main-content">
                <div className="text-display">
                    <p>{result || 'TEST Tekstu'}</p>
                </div>
                <div className="camera-window">
                    Kamera tu
                </div>
                <div className="buttons-container"> 
                    <button >Rozpoznaj</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
