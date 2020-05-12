import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import styled from 'styled-components';
// import { Ionicons } from '@expo/vector-icons'
import Card from './components/Card';
import Logo from './components/Logo.js';
import { NotificationIcon } from './components/Icons';

export default function App() {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          <TitleBar>
            <Avatar source={require(`./assets/avatar-default.jpg`)} />
            <Title>Welcome back, </Title>
            <Name>Carlos</Name>
            {/* <Ionicons
              name="ios-notifications"
              size={32}
              color="#4775f2"
              style={{ position: "absolute", right: 20, top: 5 }}
            /> */}
            <NotificationIcon
              style={{ position: "absolute", right: 20, top: 5 }}
            />
          </TitleBar>
          <ScrollView
            style={{ flexDirection: "row", padding: 20, paddingLeft: 12, paddingTop: 30 }} horizontal={true}
          >
            <Logo image={require('./assets/logo-framerx.png')} text="Framer X" />
            <Logo image={require('./assets/logo-figma.png')} text="Figma" />
          </ScrollView>
          <Subtitle>Continue Learning</Subtitle>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingBottom: 30 }}
          >
            <Card
              title="Styled Components"
              image={require('./assets/background2.jpg')}
              logo={require('./assets/logo-react.png')}
              caption="React Native"
              subtitle="5 of 12 sections"
            />
            <Card
              title="Styled Components 2"
              image={require('./assets/background1.jpg')}
              logo={require('./assets/logo-react.png')}
              caption="React Native"
              subtitle="5 of 12 sections"
            />
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
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
  margin-top: 20px;
  text-transform: uppercase;
`;
