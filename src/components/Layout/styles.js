import styled from '@emotion/styled'

export const Main = styled.main((props) => {
  const { paddingTop, paddingBottom, paddingLeft, paddingRight } = props;
  return {
    maxWidth: '1024px',
    margin: '0 auto',
    marginTop: '70px',
    userSelect: 'none',
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
  }
})