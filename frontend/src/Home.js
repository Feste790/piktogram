import React, { useState, useEffect } from 'react';
import './styles.css';

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
            <div className="main-content">
                <div className="text-display">
                    <p>{error || result || 'TEST Tekstu'}</p>
                </div>
                <div className="camera-window">
                </div>
                <div className="buttons-container">
                    <button onClick={handleRecognize}>Rozpoznaj!</button>
                </div>
                <div className="text-display">
                    {error ? <p>Error: {error}</p> : stats ? (
                        <div>
                            <p>Temperatura CPU: {stats.CPU_Temp || 'Brak danych'}</p>
                            <p>Uzycie CPU: {stats.CPU_Usage|| 'Brak danych'}</p>
                            <p>Uzycie RAM: {stats.RAM_Usage || 'Brak danych'}</p>
                            <p>Uzycie Dysku: {stats.DISC_Usage || 'Brak danych'}</p>
                        </div>
                    ) : <p>Loading...</p>}
                </div>
            </div>
        </div>
    );
};

export default Home;