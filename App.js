import React from 'react';
import { Text} from 'react-native';
import styled from 'styled-components';
import Card from './components/Card';

export default function App() {
  return (
    <Container>
      <TitleBar>
        <Avatar source={require(`./assets/avatar-default.jpg`)} />
        <Title>Welcome back, </Title>
        <Name>Carlos</Name>
      </TitleBar>
      <Subtitle>Continue Learning</Subtitle>
      <Card />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #F0F3F5;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background-color: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  color: #b8bece;
  font-size: 16px;
  font-weight: 500;
`;

const Name = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: bold;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-size: 15px;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`;
