import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: name => dispatch({
      type: "UPDATE_NAME",
      name: name
    })
  }
}

class Avatar extends Component {
  constructor() {
    super();

    this.state = {
      photo: "https://cl.ly/55da82beb939/download/avatar-default.jpg",
    };
  }

  componentDidMount() {
    fetch("https://uifaces.co/api?limit=1&random", {
      method: "GET",
      headers: {
        "X-API-KEY": "b8584b7773c05ac056cab0594908bf",
        "Accept": "application/json",
        'Cache-Control': 'no-cache'
      }
    })
      .then(data => data.json())
      .then(data => {
        this.setState({ photo: data[0].photo })

        this.props.updateName(data[0].name);
      })
  }

  render() {
    return (
      <Image source={{ uri: this.state.photo }} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;
