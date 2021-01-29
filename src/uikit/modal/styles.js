import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/css";

export const fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
`;

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-150px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const blowUp = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const slide = keyframes`
  0% {
    transform: translateY(1000px) scaleY(1.5);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scaleY(1);
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  z-index: 1200;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.4;
  background-color: #000000;
`;

export const Body = styled.div`
  position: fixed;
  z-index: 1300;
  right: 0;
  left: 0;
  top: 0;
  overflow: overlay;
  max-height: 350px;
  width: 562px;
  margin: 80px auto;
  padding: 40px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 0 10px 0 rgba(62, 65, 72, 0.1);
  &.entering {
    animation: ${blowUp} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  }
  &.exiting {
    animation: ${fadeOut} 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    animation-fill-mode: forwards;
  }
`;

export const DismissButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  color: #3e4148;
  &:focus {
    outline: none;
  }
`;
