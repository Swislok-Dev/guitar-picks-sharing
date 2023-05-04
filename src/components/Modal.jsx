import React, { useCallback, useEffect } from 'react';

function Modal(props) {
  const { onClose } = props;
  const closeOnEscapeKeyDown = useCallback(
    (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        onClose();
      }
    },
    [onClose]
  );
  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    document.body.addEventListener('click', (e) => {
      if (
        e.target.className == 'modal show' ||
        e.target.value == 'Close'
      ) {
        onClose();
      }
    });
    return function cleanup() {
      document.body.removeEventListener(
        'keydown',
        closeOnEscapeKeyDown
      );
    };
  }, [closeOnEscapeKeyDown, onClose]);

  return (
    <div className={`modal ${props.show ? 'show' : ''}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">
            {props.title}
          </h4>
            <button className="button" onClick={onClose}>
              &times;
            </button>
        </div>
        <div className="modal-body">{props.content}</div>
      </div>
    </div>
  );
}

export default Modal;
