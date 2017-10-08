import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import skeleton from '../styles/skeleton.css';
import hero from '../styles/hero.css';

import {setCurrentUser, setPendingUser, handleInputChange, handleSubmit} from '../reducers/user.jsx';

const NewUserForm = ({setPendingUser, setCurrentUser, handleInputChange, handleSubmit}) => 
  <div style={{backgroundColor:"white"}}>
    <br/>
    <br/>
    <div className={skeleton.row}>
      <div className={skeleton["u-full-width"]}>
        <label htmlFor="EmailInput">Your email</label>
        <input 
          className={skeleton.six} 
          type="email" 
          placeholder="test@mailbox.com" 
          id="EmailInput"
          onChange={e => handleInputChange(e.target.value, "email")}
        />
      </div>
      <div className={skeleton["u-full-width"]}>
        <label htmlFor="UserNameInput">Your UserName</label>
        <input 
          className={skeleton.six} 
          type="text" 
          placeholder="username" 
          id="UserNameInput"
          onChange={e => handleInputChange(e.target.value, "username")}
        />
      </div>
      <div className={skeleton["u-full-width"]}>
        <label htmlFor="PasswordInput">Your Password</label>
        <input 
          className={skeleton.six} 
          type="password" 
          placeholder="password" 
          id="PasswordInput"
          onChange={e => handleInputChange(e.target.value, "password")}
        />
        <input 
          className={skeleton.six} 
          type="password" 
          placeholder="password match" 
          id="PasswordInputMatch"
          onChange={e => handleInputChange(e.target.value, "passwordMatch")}
        />
      </div>
      <div className={skeleton["u-full-width"]}>
        <label htmlFor="SubmitButton">Submit</label>
        <button id="SubmitButton" className="button-primary" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  </div>

const mapStateToProps = ({user}) => ({user});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    setCurrentUser,
    setPendingUser,
    handleInputChange,
    handleSubmit
  }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm);