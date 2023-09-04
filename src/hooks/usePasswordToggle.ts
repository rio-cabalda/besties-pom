import { useState } from 'react';

function usePasswordToggle() {
  const [visible, setVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setVisible(!visible);
  };

  const inputType = visible ? 'text' : 'password';

  return { visible, togglePasswordVisibility, inputType };
}

export default usePasswordToggle;