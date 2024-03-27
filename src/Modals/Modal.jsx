import React from 'react';

export const Modal = ({ children, onClose }) => (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={onClose}>&times;</span>
      {children}
    </div>
  </div>
);