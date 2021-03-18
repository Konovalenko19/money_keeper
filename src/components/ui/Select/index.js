import React, { useState, useCallback } from 'react';

export const Select = (props) => {
  const {
    options = [],
    onChange = () => {},
    id = 'id',
    title = 'title',
  } = props;

  const [selected, setSelected] = useState(null);

  const handleChange = useCallback(
    (value) => {
      setSelected(value);
      onChange(value);
    },
    [onChange]
  );

  if (!options.length) {
    return null;
  }

  return (
    <select onChange={(e) => handleChange(e.target.value)}>
      {options.map((option) => (
        <option
          key={option[id]}
          value={option[id]}
          selected={selected === option[id]}
        >
          {option[title]}
        </option>
      ))}
    </select>
  );
};
