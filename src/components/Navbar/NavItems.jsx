import React from "react";
import { Items, NavItems } from "./style";
import navbar from "../../utils/navbar";

const NavbarItems = () => {
  return (
    <NavItems>
      {navbar.map((value) => {
        return (
          <Items key={value.id} to={value.path}>
            {value.title}
          </Items>
        );
      })}
    </NavItems>
  );
};

export default NavbarItems;
