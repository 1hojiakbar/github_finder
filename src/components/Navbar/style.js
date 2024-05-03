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
  height: 60px;
  background-color: var(--primaryColor);
  padding: 0 5rem;
`;

Nav.Title = styled.h1`
  ${flex}
  align-items: center;
  column-gap: 7px;
  color: #fff;
  cursor: pointer;
`;

Nav.Title.Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
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

const NavItems = styled.div`
  ${flex}
  align-items: center;
  justify-content: space-between;
  width: 10%;
  column-gap: 10px;
`;

const Items = styled(NavLink)`
  color: white;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  padding: 7px 10px;
  transition: all 300ms;
  border-radius: 0.8em;
  &:hover {
    background-color: #999;
    color: #000;
  }
`;

const Body = styled.div`
  ${flex}
`;

export { Container, Form, NavItems, Items, Body, Nav };
