import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 86vh;
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
  color: #111;
  font-size: 30px;
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
  font-size: 18px;
  background-color: #222831;
  border-radius: 3px;
  font-family: var(--mono);
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
