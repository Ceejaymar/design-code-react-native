import React, { Component } from 'react';
import { ScrollView, SafeAreaView, TouchableOpacity, Animated, Easing, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
// import { Ionicons } from '@expo/vector-icons'
import Card from '../components/Card';
import Logo from '../components/Logo.js';
import { NotificationIcon } from '../components/Icons';
import Course from '../components/Course';
import Menu from '../components/Menu';
import Avatar from '../components/Avatar';

const CardsQuery = gql`
  {
    cardsCollection {
      items {
        title
        subtitle
        image {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        subtitle
        caption
        logo {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
      }
    }
  }
`;

function mapStateToProps(state) {
  return { action: state.action, name: state.name };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () => dispatch({
      type: "OPEN_MENU"
    })
  }
}

class HomeScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props)

    this.state = {
      scale: new Animated.Value(1),
      opacity: new Animated.Value(1),
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action === "openMenu") {
      Animated.timing(this.state.scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in(),
      }).start();

      Animated.spring(this.state.opacity, {
        toValue: 0.5
      }).start();
    }

    if (this.props.action === "closeMenu") {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in(),
      }).start();

      Animated.spring(this.state.opacity, {
        toValue: 1,
      }).start();
    }
  }

  render() {
    const barColor = this.props.action === "openMenu" ? "light-content" : "dark-content";

    return (
      <RootView>
        <StatusBar barStyle={barColor} />
        <Menu />
        <AnimatedContainer style={{ transform: [{ scale: this.state.scale }], opacity: this.state.opacity }}>
          <SafeAreaView>
            <ScrollView>
              <TitleBar>
                <TouchableOpacity
                  onPress={this.props.openMenu}
                  style={{ position: 'absolute', top: 0, left: 20 }}
                >
                  <Avatar source={require(`../assets/avatar-default.jpg`)} />
                </TouchableOpacity>
                <Title>Welcome back, </Title>
                <Name>{this.props.name}</Name>
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
                style={{ flexDirection: "row", padding: 20, paddingLeft: 12, paddingTop: 30 }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {logos.map(logo => (
                  <Logo key={logo.text} image={logo.image} text={logo.text} />
                ))}
              </ScrollView>
              <Subtitle>Continue Learning</Subtitle>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ paddingBottom: 30 }}
              >
                {/* <Query query={CardsQuery}>
                  {({ loading, error, data }) => {
                    if (loading) return <Message>Loading...</Message>;
                    if (error) return <Message>Error...</Message>;

                    return (
                      <CardsContainer>
                        {data.cardsCollection.items.map(card => (
                          <TouchableOpacity key={card.title} onPress={() => {
                            this.props.navigation.push("Section", {
                              section: card,
                            });
                          }}>
                            <Card
                              title={card.title}
                              image={card.image}
                              logo={card.logo}
                              caption={card.caption}
                              subtitle={card.subtitle}
                            />
                          </TouchableOpacity>
                        ))}
                      </CardsContainer>
                    )
                  }}
                </Query> */}
                {cards.map(card => (
                  <TouchableOpacity key={card.title} onPress={() => {
                    this.props.navigation.push("Section", {
                      section: card,
                    });
                  }}>
                    <Card
                      title={card.title}
                      image={card.image}
                      logo={card.logo}
                      caption={card.caption}
                      subtitle={card.subtitle}
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <Subtitle>Popular Courses</Subtitle>
              {courses.map(course => (
                <Course
                  key={course.title}
                  image={course.image}
                  title={course.title}
                  subtitle={course.subtitle}
                  avatar={course.avatar}
                  logo={course.logo}
                  caption={course.caption}
                  author={course.author}
                />
              ))}
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
      </RootView>
    );
  }
}

const RootView = styled.View`
  background: black;
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  background-color: #F0F3F5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Message = styled.Text`
  margin: 20px;
  color: #bebece;
  font-size: 15px;
  font-weight: 500;
`;

const CardsContainer = styled.View`
  flex-direction: row;
  padding-right: 12px;
`;

// const Avatar = styled.Image`
//   width: 44px;
//   height: 44px;
//   background-color: black;
//   border-radius: 22px;
// `;

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

const logos = [
  {
    image: require("../assets/logo-framerx.png"),
    text: "Framer X"
  },
  {
    image: require("../assets/logo-figma.png"),
    text: "Figma"
  },
  {
    image: require("../assets/logo-studio.png"),
    text: "Studio"
  },
  {
    image: require("../assets/logo-react.png"),
    text: "React"
  },
  {
    image: require("../assets/logo-swift.png"),
    text: "Swift"
  },
  {
    image: require("../assets/logo-sketch.png"),
    text: "Sketch"
  }
];

const cards = [
  {
    title: "React Native for Designers",
    image: require("../assets/background11.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require("../assets/logo-react.png")
  },
  {
    title: "Styled Components",
    image: require("../assets/background12.jpg"),
    subtitle: "React Native",
    caption: "2 of 12 sections",
    logo: require("../assets/logo-react.png")
  },
  {
    title: "Props and Icons",
    image: require("../assets/background13.jpg"),
    subtitle: "React Native",
    caption: "3 of 12 sections",
    logo: require("../assets/logo-react.png")
  },
  {
    title: "Static Data and Loop",
    image: require("../assets/background14.jpg"),
    subtitle: "React Native",
    caption: "4 of 12 sections",
    logo: require("../assets/logo-react.png")
  }
];

const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("../assets/background13.jpg"),
    logo: require("../assets/logo-studio.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design and interactive prototype"
  },
  {
    title: "React for Designers",
    subtitle: "12 sections",
    image: require("../assets/background11.jpg"),
    logo: require("../assets/logo-react.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Learn to design and code a React site"
  },
  {
    title: "Design and Code with Framer X",
    subtitle: "10 sections",
    image: require("../assets/background14.jpg"),
    logo: require("../assets/logo-framerx.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Create powerful design and code components for youHomeScreen"
  },
  {
    title: "Design System in Figma",
    subtitle: "10 sections",
    image: require("../assets/background6.jpg"),
    logo: require("../assets/logo-figma.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption:
      "Complete guide to designing a site using a collaborative design tool"
  }
];

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
