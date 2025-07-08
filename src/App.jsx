import React, { useState } from 'react';
import InputField from './components/InputField';

function App() {
  const [alas, setAlas] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [luas, setLuas] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [history, setHistory] = useState([]); // ✅ Tambahan

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

  // ✅ Fungsi tombol "Simpan Riwayat"
  const handleSave = () => {
    if (luas !== null && alas && tinggi) {
      const entry = {
        alas,
        tinggi,
        luas,
        waktu: new Date().toLocaleString()
      };
      setHistory([...history, entry]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Hitung Luas Segitiga</h2>

        <InputField label="Alas" value={alas} onChange={handleChange} name="alas" />
        <InputField label="Tinggi" value={tinggi} onChange={handleChange} name="tinggi" />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
        >
          Hitung
        </button>

        {/* ✅ Tombol Simpan Riwayat */}
        {luas !== null && (
          <button
            type="button"
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mt-2 w-full"
          >
            Simpan Riwayat
          </button>
        )}

        {/* Conditional Rendering */}
        {submitted && luas !== null && (
          <p className="mt-4 text-green-600 font-semibold">Luas Segitiga: {luas}</p>
        )}

        {!submitted && luas === null && (
          <p className="mt-4 text-red-500 font-medium">Silahkan isi alas & tinggi</p>
        )}
      </form>

      {/* ✅ Tampilkan Riwayat */}
      {history.length > 0 && (
        <div className="bg-white p-4 mt-6 rounded-md shadow-md w-full max-w-md">
          <h3 className="text-lg font-semibold mb-2">Riwayat Perhitungan:</h3>
          <ul className="list-disc list-inside space-y-1">
            {history.map((item, index) => (
              <li key={index}>
                {item.waktu} - Alas: {item.alas}, Tinggi: {item.tinggi}, Luas: {item.luas}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
