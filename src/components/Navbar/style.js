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
`;

HomeLogo.Title = styled.h2`
  ${flex}
  align-items: center;
  color: #fff;
  font-size: 34px;
  cursor: pointer;
  margin-top: 6.3px;
  font-family: var(--font);
`;

HomeLogo.Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
`;

const NavItems = styled.div`
  ${flex}
  align-items: center;
  justify-content: space-between;
  width: 10%;
  column-gap: 30px;
  margin: 0 60px 0 10px;
`;

const Items = styled(NavLink)`
  ${flex}
  align-items: center;
  color: white;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  padding: 14px 20px 10px 20px;
  transition: all 300ms;
  border-radius: 0.8em;
  font-family: var(--font);
  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;

const Body = styled.div`
  ${flex}
`;

export { Container, Form, NavItems, Items, Body, Nav, HomeLogo };
