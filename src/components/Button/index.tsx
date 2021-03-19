import React, { FC, ReactNode, useCallback } from 'react';

interface IProps {
  onClick?: () => void;
  children: ReactNode;
}

export const Button: FC<IProps> = (props) => {
  const { onClick, children } = props;

  const handleClick = useCallback(() => {
    onClick && onClick();
  }, [onClick]);

  if (!children) {
    return null;
  }

  return (
    <button type="button" onClick={handleClick}>
      {children}
    </button>
  );
};
