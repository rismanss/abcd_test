import React from 'react';

export default React.createContext({
  activeModal: null,
  modals: [],
  openModal: () => null,
  dismissModal: () => null,
  register: () => null,
});
