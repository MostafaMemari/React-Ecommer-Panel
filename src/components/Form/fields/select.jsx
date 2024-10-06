import { ErrorMessage, Field } from 'formik';
import React from 'react';

const Select = ({ options, name, label, className, firstItem, handleOnchange }) => {
  const setOptions = () => {
    return (
      <>
        <option value="">{firstItem}</option>
        {options.map((o) => (
          <option key={o.id} value={o.id}>
            {o.value}
          </option>
        ))}
      </>
    );
  };

  return (
    <div className="mt-4">
      <div className="flex items-center">
        <Field name={name}>
          {({ field, form }) => (
            <select
              {...field}
              className="form-select mt-2 sm:ml-2"
              id={name}
              onChange={(e) => {
                field.onChange(e);
                if (handleOnchange) {
                  handleOnchange(e.target.value, form);
                }
              }}
            >
              {setOptions()}
            </select>
          )}
        </Field>
        {label && (
          <span className="ml-4 px-4 py-2 text-center text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md">
            {label}
          </span>
        )}
      </div>
      <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
    </div>
  );
};

export default Select;
