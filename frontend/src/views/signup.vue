<template>
  <div>
    <form class="container">
      <div class="left-form">
        <h2 class="headingform">PERSONAL DETAILS</h2>
        <input
          class="input-text"
          type="text"
          name="email"
          placeholder="E-MAIL"
          v-model="email" />
        <div class="input-text-box">
          <input
            class="input-text"
            type="password"
            name="password"
            placeholder="PASSWORD"
            v-model="password" />
        </div>
        <div class="input-text-box">
          <input
            class="input-text"
            type="text"
            name="fname"
            placeholder="NAME"
            v-model="fname" />
        </div>
        <div class="checkbox">
          <div>
            <input
              class="form-input-checkbox__input"
              type="checkbox"
              name="newsletterCheck"
              value="false" />
          </div>
          <div>
            <h6 class="checkbox__label">
              I want to receive personalized commercial communications by email.
            </h6>
          </div>
        </div>
        <div class="checkbox">
          <div>
            <input
              class="form-input-checkbox__input"
              type="checkbox"
              name="newsletterCheck"
              value="false" />
          </div>
          <div>
            <h6 class="checkbox__label">
              I have read and understand the Privacy and Cookies Policy
            </h6>
          </div>
        </div>
        <input type="submit" class="signupbtn" value="CREATE ACCOUNT" />
        <button class="signupbtn">LOGIN</button>
        <router-link to="/login" class="form-link"
          >Already have an account? Login here.</router-link
        >
      </div>
      <div class="right-form">
        <div class="input-text-box">
          <h1 class="dot">.</h1>
        </div>
        <div class="input-text-box1">
          <input
            class="input-text"
            type="password"
            name="fname"
            placeholder="REPEAT PASSWORD"
            v-model="confirmpassword" />
        </div>
        <div class="input-text-box">
          <input
            class="input-text"
            type="text"
            name="fname"
            placeholder="SURNAME"
            v-model="lname" />
        </div>
        <div class="input-text-box"></div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

interface User {
  fname: string;
  lname: string;
  email: string;
  password: string;
}

export default defineComponent({
  name: "SignupForm",
  data() {
    return {
      email: "",
      password: "",
      confirmpassword: "",
      fname: "",
      lname: "",
      error: "",
    };
  },
  methods: {
    async handleSubmit(event: Event) {
      event.preventDefault();

      const newUser: User = {
        fname: this.fname,
        lname: this.lname,
        email: this.email,
        password: this.password,
      };

      try {
        const res = await axios.post(
          "http://localhost:5000/register",
          newUser,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        window.localStorage.setItem("User", JSON.stringify(res.data));
        window.location.href = "/";
      } catch (err) {
        console.error(err);
        this.error = "An error occurred during signup";
      }
    },
  },
});
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  margin: 5%;
  height: 60%;
  margin-top: 40px;
}

input {
  width: 80%;
  padding: 5px 12px 0 20px;
  margin: 18px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid gray;
  font-size: 70%;
}

.number-box {
  display: flex;
}

.input-text-box1 {
  display: flex;
}

.tele {
  width: 25%;
  margin-top: 9%;
}

.teleinput {
  margin-left: -10%;
  width: 96%;
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
  background-color: white;
  color: rgb(6, 6, 6);
  margin-top: 16%;
  display: flex;
  flex-flow: column nowrap;
  padding: 14px 28px;
  cursor: pointer;
  border: 0.5px solid black;
}

.left-form {
  width: 30%;
}

.right-form {
  width: 40%;
}

.dot {
  color: white;
}

.input-text-options {
  font-size: 90%;
  color: gray;
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
  font-size: 98%;
  color: black;
  font-weight: bold;
  justify-content: space-between;
  margin-left: 70px;
  margin-top: 50px;
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
