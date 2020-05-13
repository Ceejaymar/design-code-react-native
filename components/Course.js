import React from 'react';
import styled from 'styled-components';

const Course = ({ image, logo, subtitle, title, avatar, caption, author }) => (
  <Container>
    <Cover>
      <Image source={image} />
      <Logo source={logo} resizeMode="contain" />
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
    </Cover>
    <Content>
      <Avatar source={avatar} />
      <Caption>{caption}</Caption>
      <Author>Taught by {author}</Author>
    </Content>
  </Container>
);

const Container = styled.View`
  width: 335px;
  height: 335px;
  background-color: white;
  margin: 10px 20px;
  border-radius: 14px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  height: 260px;
  justify-content: flex-end;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  position: absolute;
`;

const Logo = styled.Image`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 90px;
  left: 50%;
  margin-left: -24px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  margin-left: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: white;
  margin: 4px 0 20px 20px;
  width: 170px;
`;

const Content = styled.View`
  padding-left: 62px;
  height: 75px;
  justify-content: center;
`;

const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 16px;
`;

const Caption = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: #3c4560;
`;

const Author = styled.Text`
  font-size: 13px;
  font-weight: 500;
  color: #b8bece;
  margin-top: 4px;
`;

export default Course;
