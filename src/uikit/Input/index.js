import styled from '@emotion/styled';

export const Input = styled.input`
  color: ${(props) => (props.color ? props.color : 'black')};
  background: ${(props) => (props.bg ? props.bg : 'white')};
  border: 2px solid ${(props) => (props.color ? props.color : 'black')};
  min-height: 28px;
  min-width: 200px;
  border-radius: 5px;
  margin: 10px 10px 10px 0px;
  font-size: 13px;
  opacity: 1;
  transition: 0.2s;
  padding: 5px;
  &:hover {
    opacity: 0.6;
  };
  &:focus {
    width: 350px;
  }
`;
