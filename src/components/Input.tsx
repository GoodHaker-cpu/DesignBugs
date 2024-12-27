import React from 'react';
import { Check } from 'lucide-react';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function Input({ value, onChange, placeholder = "Enter your text..." }: InputProps) {
  const hasValue = value.trim().length > 0;

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 
          focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
          outline-none transition-all duration-300
          text-gray-700 text-lg"
        placeholder={placeholder}
      />
      
      <div className={`absolute right-4 top-1/2 -translate-y-1/2 
        transition-all duration-300 transform
        ${hasValue ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
        <div className="bg-green-500 rounded-full p-1">
          <Check className="w-5 h-5 text-white" strokeWidth={3} />
        </div>
      </div>
    </div>
  );
}