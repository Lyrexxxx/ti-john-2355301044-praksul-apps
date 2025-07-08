import React from 'react';

const InputField = ({ label, value, onChange, name }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-semibold">{label}</label>
      <input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-300 px-4 py-2 w-full rounded-md"
        placeholder={`Masukkan ${label.toLowerCase()}`}
      />
    </div>
  );
};

export default InputField;
