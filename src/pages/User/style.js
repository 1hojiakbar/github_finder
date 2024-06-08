import styled, { css } from "styled-components";

const flex = css`
  display: flex;
`;

const Container = styled.div`
  ${flex}
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const UserDataContainer = styled.div`
  ${flex}
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
  height: 70vh;
  background-color: #27374d;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const UserProfileDataWrapper = styled.div`
  ${flex}
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
`;

const UserImgContainer = styled.div`
  ${flex}
  justify-content: center;
  width: 100%;
`;

UserProfileDataWrapper.Followers = styled.div`
  ${flex}
  width: 50%;
  justify-content: space-between;
`;

export {
  Container,
  UserDataContainer,
  UserProfileDataWrapper,
  UserImgContainer,
};
