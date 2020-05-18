import React, { Component } from 'react';
import { Button } from 'react-native';
import styled from 'styled-components';

class CoursesScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    return (
      <Container>
        <Text>Courses Screen</Text>
      </Container>
    );
  }
}

export default CoursesScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`

`;
