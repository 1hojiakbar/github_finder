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
  flex-direction: column;
  width: 100%;
  height: 50vh;
  column-gap: 5px;
  height: max-content;
`;

const SearchContainer = styled.div`
  ${flex}
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;
  margin-top: 1rem;
`;

const MainWrapper = styled.div`
  padding: 0 10%;
`;

export { Container, Form, SearchContainer, MainWrapper };
