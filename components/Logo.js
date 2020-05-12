import React from 'react';
import styled from 'styled-components';

const Logo = ({ image, text }) => (
    <Container>
      <Image source={image} resizeMode="contain" />
      <Text>{text}</Text>
    </Container>
);

const Container = styled.View`
  flex-direction: row;
  background-color: white;
  height: 60px;
  padding: 12px 16px 12px;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.05);
  align-items: center;
  margin: 0 8px;
`;

const Image = styled.Image`
  width: 36px;
  height: 36px;
`;

const Text = styled.Text`
  font-size: 17px;
  font-weight: 600;
  margin-left: 8px;
`;

export default Logo;
