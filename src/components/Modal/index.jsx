import { useEffect, useRef } from "react";
import "./style.scss";

const Modal = ({ children, onClose, onOpen }) => {
  const ref = useRef(null);
  useEffect(() => {
    const checkIfClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", checkIfClickOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickOutside);
    };
  });
  return onOpen ? (
    <div className="modal-wrapper">
      <div className="modal-content" ref={ref}>
        <div onClick={(e) => e.stopPropagation()}>
        {children}
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
