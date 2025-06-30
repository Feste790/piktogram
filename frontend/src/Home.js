import React, { useState, useEffect } from 'react';
import './styles.css';
import logo from './logo.png'; // Dodaj œcie¿kê do zielonego logo (jeœli masz plik)

const Home = () => {
    const [stats, setStats] = useState(null);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleRecognize = async () => {
        try {
            const response = await fetch('http://192.168.18.77/api', { method: 'GET' });
            if (!response.ok) throw new Error(`B³¹d: ${response.status}`);
            const data = await response.json();
            setResult(data.test || data.result || 'Brak danych');
            setError(null);
        } catch (err) {
            setError(err.message);
            setResult(null);
        }
    };

    useEffect(() => {
        const interval = setInterval(async () => {
            try {
                const response = await fetch('http://192.168.18.102:5001/info');
                if (!response.ok) throw new Error(`B³¹d: ${response.status}`);
                const data = await response.json();
                setStats(data);
                setError(null);
            } catch (err) {
                setError(err.message);
            }
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="main-background">
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="Piktogram Logo" />
                </div>
                <div className="header-buttons">
                    <button className="header-button">Ustawienia</button>
                    <button className="header-button">Pomoc</button>
                </div>
            </header>
            <div className="main-content">
                <div className="text-display">
                    <p className="result-text">{error || result || 'TEST Tekstu'}</p>
                </div>
                <div className="camera-container">
                    <div className="camera-window">
                        <img src="http://192.168.18.102:5000/video" alt="Stream z kamery" />
                    </div>
                </div>
                <div className="buttons-container">
                    <button onClick={handleRecognize} className="action-button">Rozpoznaj!</button>
                </div>
                <div className="stats-container">
                    <div className="text-display">
                        {error ? <p className="error-text">Error: {error}</p> : stats ? (
                            <div className="stats-grid">
                                <p>Temperatura CPU: {stats.CPU_Temp || 'Brak danych'}</p>
                                <p>U¿ycie CPU: {stats.CPU_Usage || 'Brak danych'}</p>
                                <p>U¿ycie RAM: {stats.RAM_Usage || 'Brak danych'}</p>
                                <p>U¿ycie Dysku: {stats.DISC_Usage || 'Brak danych'}</p>
                            </div>
                        ) : <p className="loading-text">Loading...</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;