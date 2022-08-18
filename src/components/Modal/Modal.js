import React, { useEffect, useRef, useState } from 'react';
import "./Modal.scss";

const Modal = props => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(props.active)
  }, []);
  return (
    <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
      {props.children}
    </div>
  )
}

export const ModalContent = props => {
  const contentRef = useRef(null);

  const closeModal = () => {
    contentRef.current.parentNode.classList.remove('active');
    if (props.onClose) props.onClose();
  }

  return (
    <div ref={contentRef} className='modal__content'>
      {props.children}
      <div
        className='modal__content--close'
        onClick={closeModal}
      >
        <i className="bx bx-x"></i>
      </div>
    </div>
  )
}

export default Modal;