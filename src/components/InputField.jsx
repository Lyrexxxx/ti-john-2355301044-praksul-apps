import React from "react";
import { HiPencilAlt } from "react-icons/hi";

const InputField = ({
  label,
  value,
  onChange,
  name,
  icon: Icon = HiPencilAlt,
}) => {
  return (
    <div className="mb-6">
      <label className="block mb-2 font-bold text-white">{label}</label>
      <div className="flex items-center border border-purple-500 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-purple-300 bg-white">
        <span className="px-3 text-purple-700">
          <Icon className="w-5 h-5" />
        </span>
        <input
          type="number"
          name={name}
          value={value}
          onChange={onChange}
          className="px-4 py-2 w-full outline-none text-purple-700 placeholder-purple-400 bg-white"
          placeholder={`Masukkan ${label.toLowerCase()}`}
        />
      </div>
    </div>
  );
};

export default InputField;
