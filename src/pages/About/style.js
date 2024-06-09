import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 89vh;
  min-height: 400px;
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  padding: 1.5rem 10% 0 10%;
`;

DataWrapper.Title = styled.h1`
  color: #fff;
  font-size: 32px;
  margin-bottom: 2rem;
  @media (max-width: 992px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 567px) {
    font-size: 16px;
  }
`;

DataWrapper.Paragraph = styled.p`
  color: #fff;
  line-height: 27px;
  padding: 1rem 0.7rem;
  font-size: 20px;
  background-color: #333;
  @media (max-width: 992px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 567px) {
    font-size: 14px;
  }
  .about {
    font-family: var(--font);
  }
`;

export { Container, DataWrapper };
