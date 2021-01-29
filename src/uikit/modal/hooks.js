import React, { useContext } from 'react';
import Context from './Context';

const useModal = () => {
  const ctx = useContext(Context);

  return ctx;
};

export default useModal;