'use client'
import { useState } from 'react';

interface Props {
  label: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export default function Select({ label, options, defaultValue = '', onChange }: Props) {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    onChange?.(value);
  };

  const selectedOption = options.find(opt => opt.value === selectedValue)

  return (
    <div className='flex flex-col gap-[6px] relative'>
      <label className="text-[14px] lg:text-[16px] font-normal">{label}</label>
      <div 
        className='bg-white/80 text-black rounded-[16px] h-[40px] lg:h-[48px] px-[22px] flex items-center cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='bg-transparent outline-none w-full border-b border-gray/30 text-gray/30'>
          {selectedOption?.label || 'Выберите интрересующий продукт'}
        </div>
        <svg 
          className='ml-[5px] transition-transform transition-all duration-300 ease-in-out data-[open=true]:rotate-180 opacity-30' 
          width="16" 
          height="16"
          data-open={isOpen} 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>

      {isOpen && (
        <div className='absolute top-full left-0 right-0 mt-1 bg-white rounded-[16px] shadow-lg z-10 overflow-hidden text-gray/80'>
          {options.map((option) => (
            <div
              key={option.value}
              className={`px-[22px] py-[10px] hover:bg-gray/30 cursor-pointer ${
                selectedValue === option.value ? 'bg-gray-200' : ''
              }`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}