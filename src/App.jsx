import React, { useState } from 'react';
import InputField from './components/InputField';

function App() {
  const [alas, setAlas] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [luas, setLuas] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'alas') setAlas(value);
    if (name === 'tinggi') setTinggi(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (alas && tinggi) {
      const hasil = 0.5 * parseFloat(alas) * parseFloat(tinggi);
      setLuas(hasil);
      setSubmitted(true);
    } else {
      setLuas(null);
      setSubmitted(false);
    }
  };

  return (
    <div className="min-h-screen bg-purple-800 flex flex-col items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="bg-purple-700 p-6 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">Program Hitung Luas Segitiga</h2>

        <InputField label="Alas" value={alas} onChange={handleChange} name="alas" />
        <InputField label="Tinggi" value={tinggi} onChange={handleChange} name="tinggi" />

        <button
          type="submit"
          className="bg-white text-purple-700 px-4 py-2 rounded-md hover:bg-purple-100 w-full font-semibold"
        >
          Hitung
        </button>

        {submitted && luas !== null && (
          <p className="mt-4 text-white font-semibold text-center">Hasil Hitung Luas Segitiga : {luas}</p>
        )}

        {!submitted && luas === null && (
          <p className="mt-4 text-white text-center">Masukkan Alas & Tinggi !</p>
        )}
      </form>
    </div>
  );
}

export default App;
