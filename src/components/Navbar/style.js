import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const flex = css`
  display: flex;
`;

const Container = styled.div`
  ${flex}
  flex-direction: column;
`;

const Nav = styled.div`
  ${flex}
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background-color: var(--primaryColor);
  padding: 0 5rem;
  @media (max-width: 800px) {
    padding: 0 32px;
    height: 70px;
  }
`;

const Form = styled.div`
  ${flex}
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  column-gap: 20px;
  height: max-content;
  margin-top: 5rem;
`;

const HomeLogo = styled.div`
  ${flex}
  align-items: center;
  column-gap: 12px;
  @media (max-width: 992px) {
    column-gap: 5px;
  }
`;

HomeLogo.Title = styled.h2`
  ${flex}
  align-items: center;
  color: #fff;
  font-size: 34px;
  cursor: pointer;
  font-family: var(--font);
  @media (max-width: 992px) {
    font-size: 20px;
  }
`;

HomeLogo.Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  @media (max-width: 992px) {
    width: 30px;
    height: 30px;
  }
`;

const NavItems = styled.div`
  ${flex}
  align-items: center;
  justify-content: space-between;
  width: 10%;
  column-gap: 30px;
  margin: 0 60px 0 10px;
  @media (max-width: 992px) {
    margin: 0 100px 0 0;
  }
  @media (max-width: 600px) {
    margin: 0 130px 0 0;
  }
`;

const Items = styled(NavLink)`
  ${flex}
  align-items: center;
  color: white;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  padding: 12px 20px 12px 20px;
  border-radius: 0.8em;
  transition: all 300ms;
  font-family: var(--font);
  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
  @media (max-width: 992px) {
    font-size: 18px;
    padding: 10px 10px 7px 15px;
    border-radius: 0.5em;
  }
`;

const Body = styled.div`
  ${flex}
`;

export { Container, Form, NavItems, Items, Body, Nav, HomeLogo };
