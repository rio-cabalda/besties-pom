import { useState } from 'react';

type TPassword = {
  confirmVisible: boolean;
  toggleConfirmPasswordVisibility: ()=>void;
  confirmInputType: string;
}

function useConfirmPasswordToggle() {
  const [confirmVisible, setConfirmVisible] = useState(false);

  const toggleConfirmPasswordVisibility = () => {
    setConfirmVisible(!confirmVisible);
  };

  const confirmInputType = confirmVisible ? 'text' : 'password';

  return<TPassword> { confirmVisible, toggleConfirmPasswordVisibility, confirmInputType };
}

export default useConfirmPasswordToggle;