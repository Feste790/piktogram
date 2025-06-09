import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
    const [result, setResult] = useState('');

    const handleRecognize = () => {
        fetch('http://localhost/api', {
            method: 'POST',
        }).then(response => response.json())
          .then(data => {
            setResult(data.result);
        })
    };


    return (
        <fiv className="main-background">
            <div className="main-content">
                <div className="text-display">
                    <p>{result || 'TEST Tekstu'}</p>
                </div>
                <div className="camera-window">
                    Kamera tu
                </div>
                <div className="buttons-container">
                    {
                    <button onClick={handleRecognize}>Rozpoznaj</button>
                    }
                </div>
            </div>
        </fiv>
        
    );
}

export default Home;