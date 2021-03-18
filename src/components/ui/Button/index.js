import React, { useCallback } from 'react';

export const Button = (props) => {
  const { type = 'button', onClick, children, ...other } = props;

  const handleClick = useCallback(() => {
    onClick && onClick();
  }, [onClick]);

  if (!children) {
    return null;
  }

  return (
    <button type={type} onClick={handleClick} {...other}>
      {children}
    </button>
  );
};
