import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Layout } from 'antd';
import Nav from './scenes/Nav'
import Body from './scenes/Body'
import LoginModal from './components/LoginModal'
import LogoutModal from './components/LogoutModal'

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: null
    };
  }

  openLoginModal = () => {
    this.loginModal.openLoginModal();
  }

  openLogoutModal = () => {
    this.logoutModal.openLogoutModal();
  }

  updateLoggedInStatus = () => {
    this.setState({ userData: JSON.parse(localStorage.getItem('iflixAuth')) });
  }

  render() {
    const {
      userData
    } = this.state;

    return (
      <Router>
        <Layout>
          <LoginModal ref={loginModal => this.loginModal = loginModal} updateLoggedInStatus={this.updateLoggedInStatus} />
          <LogoutModal ref={logoutModal => this.logoutModal = logoutModal} updateLoggedInStatus={this.updateLoggedInStatus} />
          <Nav openLoginModal={this.openLoginModal} openLogoutModal={this.openLogoutModal} userData={userData} />
          <Body userData={userData} />
        </Layout>
      </Router>
    );
  }
}

export default Parent;