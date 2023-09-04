import { useState } from 'react';

type TPassword = {
    visible: boolean;
    togglePasswordVisibility: ()=>void;
    inputType: string;
}

const usePasswordToggle = () =>{
  const [visible, setVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setVisible(!visible);
  };

  const inputType = visible ? 'text' : 'password';

  return<TPassword> { visible, togglePasswordVisibility, inputType };
}

export default usePasswordToggle;