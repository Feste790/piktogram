import React, { useState } from 'react';
// Usuniêto Link, bo nie jest u¿ywany
// import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleRecognize = async () => {
        try {
            const response = await fetch('http://localhost/api', {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error(`B³¹d: ${response.status}`);
            }
            const data = await response.json();
            setResult(data.test || data.result || 'Brak danych'); // Dopasowanie do ró¿nych struktur odpowiedzi
            setError(null);
        } catch (err) {
            setError(err.message);
            setResult(null);
        }
    };

    return (
        <div className="main-background">
            <div className="main-content">
                <div className="text-display">
                    <p>{error || result || 'TEST Tekstu'}</p>
                </div>
                <div className="camera-window">
                    Kamera tu
                </div>
                <div className="buttons-container">
                    <button onClick={handleRecognize}>Rozpoznaj</button>
                </div>
            </div>
        </div>
    );
};

export default Home;