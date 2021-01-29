import styled from '@emotion/styled';

export const Button = styled.button`
  color: ${(props) => (props.color ? props.color : 'black')};
  background: ${(props) => (props.bg ? props.bg : 'white')};
  border: 2px solid ${(props) => (props.color ? props.color : 'black')};
  min-height: 30px;
  cursor: pointer;
  min-width: 90px;
  border-radius: 5px;
  margin: 10px 10px 10px 0px;
  font-size: 13px;
  font-weight: 600;
  opacity: 1;
  transition: 0.2s;
  &:hover {
    opacity: 0.6;
  }
`;
