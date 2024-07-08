import React from "react";
import { Container, DataWrapper } from "./style";
import { Button, Space, Typography } from "antd";
import Footer from "../Home/Footer";
const { Paragraph, Text } = Typography;

const About = () => {
  return (
    <Container>
      <DataWrapper>
        <DataWrapper.Title>About the Github Finder</DataWrapper.Title>
        <DataWrapper.Paragraph>
          Using this github finder you can find github users quickly and easily
          and you can see the profile information of the user you searched for.
        </DataWrapper.Paragraph>
        <Paragraph
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "0.9rem",
            color: "white",
            borderRadius: "0.6rem",
            padding: "0.4rem 0.7rem",
            fontFamily: "var(--mono)",
            background: "#222831",
          }}
        >
          View this project on my:
          <Button
            type="link"
            href="https://github.com/1hojiakbar/github_finder"
            target="_blank"
          >
            Github
          </Button>
        </Paragraph>
        <Paragraph
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "0.3rem",
            color: "white",
            borderRadius: "0.6rem",
            padding: "0.4rem 0.7rem",
            fontFamily: "var(--mono)",
            background: "#222831",
          }}
        >
          Created by:
          <Button type="link" href="https://github.com/1hojiakbar">
            Profile
          </Button>
        </Paragraph>
      </DataWrapper>
      <div style={{ margin: "auto 0 0 0" }}>
        <Footer />
      </div>
    </Container>
  );
};

export default About;
