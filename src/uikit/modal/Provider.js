import React, { useState } from 'react';
import Context from './Context';

const Provider = ({ children }) => {
  const [activeModal, setActiveModal] = useState(null);

  const dismissModal = () => setActiveModal(null);

  return (
    <Context.Provider value={{ activeModal, openModal: setActiveModal, dismissModal }}>
      <div>{children}</div>
    </Context.Provider>
  );
};

export default Provider;