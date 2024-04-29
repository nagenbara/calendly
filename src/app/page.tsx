"use client"
import React, { useState } from 'react';
import CalendlyEmbed from '../components/calendlyEmbed';

const HomePage: React.FC = () => {
    const [showCalendly, setShowCalendly] = useState(false);

    const handleShowCalendly = () => {
        setShowCalendly(true);
    };

    return (
        <div className="container mx-auto px-4 py-10 min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
                Jadwalkan Waktu Anda dengan Kami
            </h1>
            <p className="text-xl text-center mb-10 text-gray-600 max-w-prose">
                Untuk penjadwalan konsultasi atau pertemuan, klik tombol di bawah ini. Kami siap membantu Anda dengan layanan terbaik kami.
            </p>
            <button
                className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                onClick={handleShowCalendly}
            >
                Jadwalkan Pertemuan
            </button>
            {showCalendly && (
                <div className="mt-10 w-full">
                    <CalendlyEmbed url="https://calendly.com/taqwagunawan88" />
                </div>
            )}
        </div>
    );
}

export default HomePage;
