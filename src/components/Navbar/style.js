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
  background-color: #444;
  padding: 0 5rem;
`;

Nav.Title = styled.h1`
  color: #fff;
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
  padding: 7px 10px;
  transition: all 300ms;
  border-radius: 0.4em;
  &:hover {
    background-color: #777;
    color: #000;
  }
`;

const Body = styled.div`
  ${flex}
`;

export { Container, Form, NavItems, Items, Body, Nav };
