import React, { useState, useEffect } from 'react';

export const Toggle = ({
  id = null,
  children,
  onChange = null,
  reset = false,
}: {
  id?: string;
  children: React.ReactNode;
  onChange?: (newState: boolean, id: string) => void;
  reset?: boolean;
}) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    reset && setToggle(false);
  }, [reset]);

  const handleToggleState = () => {
    const newState = !toggle;
    setToggle(newState);
    onChange && onChange(newState, id);
  };

  return (
    <div onClick={handleToggleState}>
      {typeof children === 'function' ? children(toggle) : children}
    </div>
  );
};

export default Toggle;
