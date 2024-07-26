import { Button, Input } from "antd";
import styled, { css } from "styled-components";

const flex = css`
  display: flex;
`;

const Container = styled.div`
  ${flex}
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 85vh;
  min-height: 85vh;
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
  grid-template-columns: 150px 150px 150px 150px 150px 150px;
  justify-content: center;
  gap: 2rem;
  width: 60%;
  margin-bottom: 2rem;
  @media (max-width: 1190px) {
    grid-template-columns: 170px 170px 170px 170px;
  }

  @media (min-width: 1400px) {
    grid-template-columns: 180px 180px 180px 180px 180px 180px;
  }

  @media (min-width: 1500px) {
    grid-template-columns: 220px 220px 220px 220px 220px 220px;
    gap: 1rem;
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
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

const SearchInput = styled(Input)`
  width: 400px;
  height: 54px;
  font-size: 20px;
  ::placeholder {
    font-size: 20px;
  }
  @media (max-width: 992px) {
    width: 350px;
    height: 50px;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 47px;
    font-size: 16px;
  }

  @media (max-width: 567px) {
    width: 250px;
    height: 40px;
    font-size: 14px;
  }
`;

const SearchButton = styled(Button)`
  ${flex}
  justify-content: center;
  align-items: center;
  column-gap: 12px;
  width: 140px;
  height: 54px;
  font-size: 20px;
  @media (max-width: 992px) {
    width: 120px;
    height: 50px;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 47px;
    font-size: 16px;
  }

  @media (max-width: 567px) {
    width: 90px;
    height: 40px;
    font-size: 14px;
  }
`;

const Footer = styled.footer`
  ${flex}
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15vh;
  overflow-y: hidden;
  margin-top: auto;
  padding-top: 15px;
  font-family: var(--mono);
  background-color: var(--footerColor);
  @media (max-width: 992px) {
    height: 80px;
  }

  @media (max-width: 768px) {
    height: 60px;
  }

  @media (max-width: 567px) {
    height: 40px;
  }
`;

Footer.Title = styled.h3`
  color: #ffffff;
  font-size: 16px;
  font-family: var(--mono);
  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 567px) {
    font-size: 14px;
  }
`;

export {
  Container,
  Form,
  SearchContainer,
  MainWrapper,
  ProfileWrapper,
  UserProfile,
  SearchInput,
  SearchButton,
  Footer,
};
