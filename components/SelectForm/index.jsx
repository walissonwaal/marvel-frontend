'use client'
import Select from 'react-select';
import Image from 'next/image';

const SelectForm = ({ characters, onChange }) => {
  return (
    <Select
      characters={characters}
      isSearchable={false}
      components={{
        DropdownIndicator: () => <Image className='mr-2' src='/img/icon-chevron-down.svg' width={20} height={20} />
        ,
      }}
      onChange={onChange}
      placeholder="Selecione uma opção"
      styles={{
        control: (provided, state) => ({
          ...provided,
          borderRadius: '0.375rem',
          borderColor: state.isFocused ? '#6366F1' : provided.borderColor,
          boxShadow: state.isFocused ? '0 0 0 3px rgba(99, 102, 241, 0.2)' : provided.boxShadow,
        }),
        option: (provided, state) => ({
          ...provided,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.10rem',
          color: state.isSelected ? 'white' : 'inherit',
          backgroundColor: state.isSelected ? '#6366F1' : state.isFocused ? '#E5E7EB' : 'transparent',
        }),
      }}
      formatOptionLabel={(option) => (
        <div className="flex items-center">
          <img src={option.image} alt={option.label} className="w-6 h-6 rounded-full" />
          <span>{option.label}</span>
        </div>
      )}
    />
  );
};

export default SelectForm;
