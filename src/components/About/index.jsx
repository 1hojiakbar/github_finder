import React from "react";
import { Container, DataWrapper } from "./style";
import { Button, Space, Typography } from "antd";
const { Paragraph, Text } = Typography;

const About = () => {
  return (
    <Container>
      <DataWrapper>
        <DataWrapper.Title>About this Github Finder App</DataWrapper.Title>
        <DataWrapper.Paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
          laborum nulla ratione inventore distinctio facilis quos quas
          voluptatum consectetur, cum nobis quis. Fuga, iure exercitationem eos
          doloribus laudantium veritatis repellendus, culpa ipsum laboriosam
          fugit impedit rem eligendi magni facere. Inventore sint quo ipsa,
          exercitationem dolorem totam maiores dolores illo aut voluptatibus,
          voluptas, possimus modi officiis voluptates deserunt corrupti porro
          illum cum est? Saepe quis tenetur numquam quasi optio deleniti
          debitis. Vel vitae possimus veniam nobis, quia voluptatem perspiciatis
          saepe veritatis.
        </DataWrapper.Paragraph>
        <Paragraph
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "0.9rem",
            color: "white",
            borderRadius: "0.6rem",
            padding: "0.4rem 0.7rem",
            border: "1px solid #333",
          }}
        >
          View this project on my
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
            border: "1px solid #333",
          }}
        >
          Created by
          <Button type="link" href="https://github.com/1hojiakbar">
            Profile
          </Button>
        </Paragraph>
      </DataWrapper>
    </Container>
  );
};

export default About;
