import React from "react";
import { Footer as FooterWrapper } from "./style";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterWrapper.Title>
        &#169; 2024 - {new Date().getFullYear()} Powered by Xojiakbar Isroilov
      </FooterWrapper.Title>
    </FooterWrapper>
  );
};

export default Footer;
