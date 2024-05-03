import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  padding: 1.5rem 0 0 0;
`;

DataWrapper.Title = styled.h1`
  color: #fff;
  margin-bottom: 2rem;
`;

DataWrapper.Paragraph = styled.p`
  color: #fff;
  line-height: 27px;
  padding: 1rem 0.7rem;
  background-color: #333;
`;

export { Container, DataWrapper };
