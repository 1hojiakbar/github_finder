import styled, { css } from "styled-components";

const flex = css`
  display: flex;
`;

const Container = styled.div`
  ${flex}
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Form = styled.form`
  ${flex}
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  column-gap: 5px;
  height: max-content;
  margin-top: 5rem;
`;

export { Container, Form };
