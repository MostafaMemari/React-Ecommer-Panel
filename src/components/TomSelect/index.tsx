import React from "react";
import TomSelect from "../../base-components/TomSelect";

interface TomSelectBoxProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  loading: boolean;
}

const TomSelectBox: React.FC<TomSelectBoxProps> = ({
  options,
  value,
  onChange,
  loading,
  placeholder = "لطفا انتخاب کنید",
}) => {
  const handleChange = (newValue: string) => {
    onChange(newValue);
  };
  return (
    <>
      {loading ? (
        <div className="mt-2 text-sm text-center text-gray-500">در حال بارگذاری...</div>
      ) : (
        <TomSelect
          value={value}
          onChange={handleChange}
          options={{
            placeholder,
          }}
          className="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TomSelect>
      )}
    </>
  );
};

export default TomSelectBox;
