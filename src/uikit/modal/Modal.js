import React, { useContext } from "react";
import Context from "./Context";
import { Portal } from "react-portal";
import { Transition } from "react-transition-group";
import { Body, DismissButton, Overlay } from "./styles";
import { cx } from "@emotion/css";
import CloseIcon from "@uikit/icons/Close";

const Modal = ({ name, onRequestOpen, styles = {}, children, onDismiss }) => {
  const { activeModal, dismissModal } = useContext(Context);
  const isActive = activeModal === name;

  const handleDismiss = () => {
    onDismiss && onDismiss();
    dismissModal();
  };

  return (
    <Transition
      in={isActive}
      timeout={300}
      onEnter={onRequestOpen}
      mountOnEnter
      unmountOnExit
    >
      {(state) => (
        <Portal>
          <Overlay css={styles.overlay} onClick={handleDismiss} />
          <Body css={styles.body} className={cx(state)}>
            <DismissButton css={styles.dismissButton} onClick={handleDismiss}>
              <CloseIcon />
            </DismissButton>
            {children}
          </Body>
        </Portal>
      )}
    </Transition>
  );
};

export default Modal;