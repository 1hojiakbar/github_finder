import React from "react";
import { Container, Form } from "./style";
import Search from "../Generic/Input/search";
import Button from "../Generic/Button/index";

const Navbar = () => {
  return (
    <Container>
      <h1>Navbar</h1>
      <Form>
        <Search placeholder={"search"} inpWidth={"100%"} size={"large"} />
        <Button type={"primary"} title={"submit"} size={"large"} />
      </Form>
    </Container>
  );
};

export default Navbar;
