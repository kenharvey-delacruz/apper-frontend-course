import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import "./modal.scss";

const Modal = (props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <div id={props.id} className={`modal ${active ? "active" : ""}`}>
      {props.children}
    </div>
  );
};

Modal.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string,
  children: PropTypes.node,
};

export const ModalContent = (props) => {
  const contentRef = useRef(null);

  // Using videoRef from props to refer to the video element
  const videoRef = props.videoRef;

  const closeModal = () => {
    contentRef.current.parentNode.classList.remove("active");

    // Pause the video if it exists
    if (videoRef && videoRef.current) {
      videoRef.current.pause();
    }

    if (props.onClose) props.onClose();
  };

  return (
    <div ref={contentRef} className="modal__content">
      {props.children}
      <div className="modal__content__close" onClick={closeModal}>
        <i className="bx bx-x"></i>
      </div>
    </div>
  );
};

ModalContent.propTypes = {
  onClose: PropTypes.func,
  videoRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default Modal;
