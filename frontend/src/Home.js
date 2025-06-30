import React, { useState } from 'react';
// Usuniêto Link, bo nie jest u¿ywany
// import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
    const [stats, setStats] = useState(null);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleRecognize = async () => {
        try {
            const response = await fetch('http://192.168.18.77/api', {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error(`B³¹d: ${response.status}`);
            }
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
                    <img src="http://192.168.18.102:5000/video" width="640" height="480" alt="Stream z kamery" />
                </div>
                <div className="buttons-container">
                    <button onClick={handleRecognize}>Rozpoznaj!</button>
                </div>
                <div className="text-display">
                    {error ? <p>Error: {error}</p> : stats ? (
                        <div>
                            <p>Temperatura CPU: {stats.CPU_Temp || 'Brak danych'}</p> {/* Dopasuj klucz JSON */}
                        </div>
                    ) : <p>Loading...</p>}
                </div>
            </div>
        </div>
    );
};

export default Home;