<template>
    <div>
      <div class="container-login">
        <div class="left-login-form">
          <h3 class="login-heading">LOG IN TO YOUR ACCOUNT</h3>
          <div class="form-input-label">
            <input
              class="form-input-label"
              type="text"
              id="fname"
              name="email"
              placeholder="E-MAIL"
              v-model="useremail"
            />
            <input
              class="form-input-label"
              type="password"
              id="fname"
              name="password"
              placeholder="PASSWORD"
              style="outline: none; border: none"
              v-model="userpw"
            />
          </div>
  
          <button class="login-btn">LOGIN</button>
          <br />
          <p>{{ Error }}</p>
          <br />
          <a class="forgotpassword" href="#">HAVE YOU FORGOTTEN YOUR PASSWORD?</a>
        </div>
  
        <div class="right-login-form">
          <h4>NEEED ACCOUNT</h4>
          <router-link class="create-btn" to="/signup" type="button">
            REGISTER
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  // import axios from "axios";
  import { defineComponent, ref } from 'vue';
  
  interface LoginForm {
    onSubmit: (useremail: string, userpw: string) => void;
  }
  
  export default defineComponent({
    name: 'LoginForm',
    setup() {
      const useremail = ref('');
      const userpw = ref('');
      const Error = ref('');
      const username = ref('LOG IN');
  
     
      return {
        useremail,
        userpw,
        Error,
        // handleSubmit,
      };
    },
  });
  </script>
  
  <style scoped>
  body {
    background-color: white;
  }
  
  .container-login {
    margin-top: 1.6em;
    width: 60%;
    display: flex;
    color: gray;
    font-size: 90%;
    margin: 14%;
    justify-content: space-between;
    margin: 9%;
    margin-top: 10%;
  }
  
  .right-p {
    margin-top: 2%;
  }
  
  .right-login-form {
    width: 50%;
    margin-top: 8%;
  }
  
  .forgotpassword {
    color: black;
    font-size: 70%;
  }
  
  .left-login-form {
    width: 40%;
  }
  
  .login-heading {
    margin: 4%;
    color: black;
  }
  
  .create-btn {
    background-color: transparent;
    border: 0.5px solid black;
    text-align: center;
    font-size: 90%;
    color: black;
    text-decoration: none;
    padding: 2% 32% 3% 10%;
  }
  
  h4 {
    color: black;
  }
  
  .create-btn:hover {
    border-color: rgb(88, 87, 87);
    cursor: pointer;
  }
  
  .login-btn {
    background-color: black;
    width: 80%;
    height: 13%;
    text-align: center;
    font-size: 90%;
    color: white;
    text-decoration: none;
    margin-top: 6%;
  }
  
  .login-btn:hover {
    color: rgba(255, 255, 255, 0.212);
  }
  
  .container {
    width: 100%;
    display: flex;
    margin: 4%;
  }
  
  .form-input-label {
    width: 80%;
    margin: 18px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid gray;
    font-size: 100%;
  }
  
  .number-box {
    display: flex;
  }
  
  .tele {
    width: 25%;
    margin-top: 9%;
  }
  
  .checkbox {
    width: 100%;
    display: flex;
    margin-top: 1%;
  }
  
  .checkbox__label {
    width: 100%;
    margin-left: 3%;
    font-size: 100%;
    color: gray;
    font-size: 70%;
  }
  
  .signupbtn {
    width: 85%;
    background-color: black;
    color: white;
    margin-top: 16%;
  }
  
  .Left-form {
    width: 30%;
  }
  
  .right-form {
    width: 40%;
  }
  
  .dot {
    color: white;
  }
  
  .changeform-btn {
    display: flex;
    width: 14%;
    justify-content: space-between;
    margin: 4%;
    font-size: 80%;
    font-weight: bold;
  }
  
  .headingform {
    margin: 4%;
    font-size: 98%;
    color: black;
  }
  
  .signup-footer {
    display: flex;
    width: 40%;
    justify-content: space-between;
    margin: 8%;
  }
  
  .list {
    text-decoration: none;
    color: gray;
    font-size: 68%;
  }
  
  .header-heading {
    font-size: 80%;
  }
  </style>
  