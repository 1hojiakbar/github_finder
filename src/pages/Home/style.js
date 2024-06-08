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

const SearchContainer = styled.div`
  ${flex}
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;
  width: 60%;
  margin: 2rem 0 4rem 0;
`;

const Form = styled.form`
  ${flex}
  justify-content: center;
  align-items: center;
  height: max-content;
  width: 100%;
`;

const MainWrapper = styled.div`
  ${flex}
  justify-content: center;
  width: 100%;
`;

const ProfileWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 2rem;
  width: 60%;
  margin-bottom: 2rem;
`;

const UserProfile = styled.div`
  ${flex}
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0.4rem;
  padding: 5px;
  border-radius: 0.3rem;
  background-color: #b4b4b8;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export {
  Container,
  Form,
  SearchContainer,
  MainWrapper,
  ProfileWrapper,
  UserProfile,
};