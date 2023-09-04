import { useState } from 'react';

function useConfirmPasswordToggle() {
  const [confirmVisible, setConfirmVisible] = useState(false);

  const toggleConfirmPasswordVisibility = () => {
    setConfirmVisible(!confirmVisible);
  };

  const confirmInputType = confirmVisible ? 'text' : 'password';

  return { confirmVisible, toggleConfirmPasswordVisibility, confirmInputType };
}

export default useConfirmPasswordToggle;