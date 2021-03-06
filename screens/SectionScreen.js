import React, { Component } from 'react';
import { TouchableOpacity, StatusBar, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components';

class SectionScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount() {
    StatusBar.setBarStyle("light-content", true);
  }

  componentWillUnmount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  render() {
    const { navigation } = this.props;
    const section = navigation.getParam("section");

    return (
      <Container>
        <StatusBar hidden />
        <Cover>
          <Image source={section.image} />
          <Wrapper>
            <Logo source={section.logo} />
            <Subtitle>{section.subtitle}</Subtitle>
          </Wrapper>
          <Title>{section.title}</Title>
          <Caption>{section.caption}</Caption>
        </Cover>
        <TouchableOpacity
          style={{ position: "absolute", top: 20, right: 20 }}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        >
          <CloseView>
            <Ionicons
              name="ios-close"
              size={36}
              color="#4775f2"
              style={{ marginTop: -2 }}
            />
          </CloseView>
        </TouchableOpacity>
        <Content>
          <WebView source={{ 
            html: htmlContent + htmlStyles }} 
            scalesPageToFit={false} 
            scrollEnabled={false} 
            ref="webview"
            onNavigationStateChange={event => {
              if(event.url !== "about:blank") {
                this.refs.webview.stopLoading();
                Linking.openURL(event.url);
              }
            }} 
          />
        </Content>
        {/* <Text>{section.title}</Text>

        <Button title="Close" onPress={() => {
          this.props.navigation.goBack();
        }} /> */}
      </Container>
    );
  }
}

export default SectionScreen;

const htmlContent = `
  <h2>This is a title</h2>
  <p>This <strong>is</strong> a <a href="https://carlosmartinez.dev">link</a></p>
  <img src="https://cl.ly/8861f359ed6d/download/Wave14.jpg">
`;

const htmlStyles = `
  <style>
    * {
      font-family: -apple-system, Roboto;
      margin: 0;
      padding: 0;
      background-color: transparent;
    }

    img {
      width: 100%;
      border-radius: 10px;
      margin-top: 20px;
    }
  </style>
`;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  height: 375px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
  align-items: center;
`;

const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 5px;
  text-transform: uppercase;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;

const Caption = styled.Text`
  color: white;
  font-size: 17px;
  position: absolute;
  left: 20px;
  bottom: 20px;
  width: 300px;
`;

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  height: 100%;
  padding: 20px;
`;
