import React, { Component } from 'react';
import {
    Link,
    withRouter
} from 'react-router-dom';
import './AppHeader.css';
import { Layout, Menu, Dropdown, Icon } from 'antd';
const Header = Layout.Header;
    
class AppHeader extends Component {
    constructor(props) {
        super(props);   
        this.handleMenuClick = this.handleMenuClick.bind(this);   
    }

    handleMenuClick({ key }) {
      if(key === "logout") {
        this.props.onLogout();
      }
    }

    render() {
        let menuItems;
        if(this.props.currentUser) {
          menuItems = [
            <Menu.Item key="/">
              <Link to="/">
                <Icon type="home" style={{"fontSize":"20px"}} className="nav-icon" />
              </Link>
            </Menu.Item>,
            <Menu.Item key="/myportal" className="profile-menu">
              <MyPortalDropdownMenu 
                currentUser={this.props.currentUser} 
                handleMenuClick={this.handleMenuClick}/>
            </Menu.Item>,
            <Menu.Item key="/myprofile" className="profile-menu">
            <ProfileDropdownMenu 
              currentUser={this.props.currentUser} 
              handleMenuClick={this.handleMenuClick}/>
            </Menu.Item>,
            <Menu.Item key="/settings" className="profile-menu">
              <SettingsDropdownMenu 
                currentUser={this.props.currentUser} 
                handleMenuClick={this.handleMenuClick}/>
            </Menu.Item>
          ]; 
        } else {
          menuItems = [
            <Menu.Item key="/login">
              <Link to="/login">Login</Link>
            </Menu.Item>                 
          ];
        }

        return (
            <Header className="app-header">
            <div className="container">
              <div className="app-title" >
                <Link to="/">Portal</Link>
              </div>
              <Menu
                className="app-menu"
                mode="horizontal"
                selectedKeys={[this.props.location.pathname]}
                style={{ lineHeight: '64px' }} >
                  {menuItems}
              </Menu>
            </div>
          </Header>
        );
    }
}

function ProfileDropdownMenu(props) {
  const dropdownMenu = (
    <Menu onClick={props.handleMenuClick} className="profile-dropdown-menu">
      <Menu.Item key="user-info" className="dropdown-item" disabled>
        <div className="user-full-name-info">
          {props.currentUser.name}
        </div>
        <div className="username-info">
          @{props.currentUser.username}
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="personprofile" className="dropdown-item">
        <Link to="/users/profile">My Personal Profile</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="careerprofile" className="dropdown-item">
        <Link to={`/users/${props.currentUser.username}`}>My Career Profile</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="salarydetails" className="dropdown-item">
        <Link to={`/users/${props.currentUser.username}`}>My Salary Details</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="leaves" className="dropdown-item">
        <Link to={`/users/${props.currentUser.username}`}>My Leaves</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="attendences" className="dropdown-item">
        <Link to={`/users/${props.currentUser.username}`}>My Attendences</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" className="dropdown-item">
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown 
      overlay={dropdownMenu} 
      trigger={['hover']}
      getPopupContainer = { () => document.getElementsByClassName('profile-menu')[0]}>
      <a className="ant-dropdown-link">
      <span className="title-wrapper"><Icon style={{"fontSize":"20px"}} type="user" />My Profile<Icon type="down"/></span>
      </a>
    </Dropdown>
  );
}
function SettingsDropdownMenu(props){
  const dropdownMenu = (
    <Menu onClick={props.handleMenuClick} className="profile-dropdown-menu">
      <Menu.Divider />
      <Menu.Item key="settings" className="dropdown-item">
        <Link to={`/users/${props.currentUser.username}`}>My Settings</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="preferences" className="dropdown-item">
        <Link to={`/users/${props.currentUser.username}`}>My Preferences</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="updatepass" className="dropdown-item">
        <Link to={`/users/${props.currentUser.username}`}>Update Password</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown 
      overlay={dropdownMenu} 
      trigger={['hover']}
      getPopupContainer = { () => document.getElementsByClassName('profile-menu')[0]}>
      <a className="ant-dropdown-link">
      <span className="title-wrapper"><Icon style={{"fontSize":"20px"}} type="setting" />Settings<Icon type="down"/></span>
      </a>
    </Dropdown>
  );
}
function MyPortalDropdownMenu(props){
  const dropdownMenu = (
    <Menu onClick={props.handleMenuClick} className="profile-dropdown-menu">
      <Menu.Item key="home" className="dropdown-item">
        <Link to={`/users/${props.currentUser.username}`}>Home</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="directory" className="dropdown-item">
        <Link to={`/users/${props.currentUser.username}`}>Company directory</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown 
      overlay={dropdownMenu} 
      trigger={['hover']}
      getPopupContainer = { () => document.getElementsByClassName('profile-menu')[0]}>
      <a className="ant-dropdown-link">
        <span className="title-wrapper"><Icon style={{"fontSize":"20px"}} type="appstore" />My Portal<Icon type="down"/></span>
      </a>
    </Dropdown>
  );
}


export default withRouter(AppHeader);