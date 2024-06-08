import { Button, Image } from "antd";
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
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  margin-top: 25px;
  margin-bottom: 20px;
  height: 400px;
  border-radius: 12px;
  background-color: #1f2544;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
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
  width: 30%;
`;

const UserImage = styled(Image)`
  cursor: pointer;
`;

UserProfileDataWrapper.Followers = styled.div`
  ${flex}
  justify-content: space-between;
  column-gap: 17px;
`;

const UserDataWrapper = styled.div`
  width: 70%;
  padding: 0 5%;
`;

const ViewButton = styled(Button)`
  ${flex}
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 30px 0;
  width: 100%;
  font-size: 18px;
  height: 50px;
  column-gap: 20px;
  & i {
    font-size: 26px;
  }
`;

export {
  Container,
  UserDataContainer,
  UserProfileDataWrapper,
  UserImgContainer,
  UserImage,
  UserDataWrapper,
  ViewButton,
};
