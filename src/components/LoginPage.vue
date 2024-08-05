<template>
  <div class="container">
    <div class="logo">
      <PetLogo class="logo-icon" /> <span>PetCare.</span>
    </div>
    <div class="login-card">
      <div class="header">
        <div class="title">LOGIN</div>
      </div>
      <form @submit.prevent="handleLogin">
        <div class="input-container">
          <UserIcon class="icon" />
          <input
            class="input"
            type="text"
            v-model="username"
            id="username"
            placeholder="Username"
            required
          />
        </div>
        <div class="input-container">
          <LockIcon class="icon" />
          <input
            class="input"
            type="password"
            v-model="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" class="login-button">Login</button>
        <p v-if="errorMessage">{{ errorMessage }}</p>
      </form>
      <button type="button" class="signup-button" @click="handleSignup">
        Sign Up
      </button>
      <a href="#" class="forgot-password" @click="handleForgotPassword">
        Forgot your password?
      </a>
    </div>
  </div>
</template>

<script>
import credentials from "@/assets/data/credentials.json";
import LockIcon from "@/assets/icons/lock.svg";
import PetLogo from "@/assets/icons/pet-logo.svg";
import UserIcon from "@/assets/icons/user.svg";

export default {
  components: { UserIcon, LockIcon, PetLogo },
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    handleLogin() {
      const user = credentials.find(
        (cred) =>
          cred.username === this.username && cred.password === this.password
      );

      if (user) {
        this.$store.dispatch("login");
        this.$router.push({ name: "Dashboard" });
      } else {
        this.errorMessage = "Invalid username or password.";
      }
    },
    handleSignup() {
      alert("Sign Up functionality is not yet implemented.");
    },
    handleForgotPassword() {
      alert("Password recovery functionality is not yet implemented.");
    },
  },
};
</script>

<style scoped>
.container {
  color: #546070;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 50px;
}

.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.logo span {
  font-size: 24px;
  color: #0b1c33;
  padding-left: 0px;
}

.logo-icon {
  width: 100px;
}

.login-card {
  background-color: #fefefe;
  padding: 28px;
  border-radius: 16px;
  border: 1px solid #dae3f8;
  width: 100%;
  max-width: 400px;
}

.header {
  min-width: 180px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  width: 100%;
  justify-content: space-between;
}

.title {
  margin-top: 0px;
}

.input-container {
  display: flex;
  border: 1px solid #dae3f8;
  border-radius: 8px;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-bottom: 24px;
}

.input {
  border: none;
  height: 100%;
  width: 100%;
  font-size: 16px;
  padding: 0 12px;
  box-sizing: border-box;
  border-radius: 0px 8px 8px 0px;
  outline: none; 
}

.icon {
  width: 20px;
  height: 20px;
  margin-left: 16px;
  margin-right: 12px;
}

.login-button {
  background-color: #3788e5;
  color: #fefefe;
  border: 0px;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  margin-bottom: 12px;
}

.login-button:hover {
  background-color: #2874c2;
}

.signup-button {
  background-color: #fefefe;
  color: #546070;
  border: 1px solid #dae3f8;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  margin-bottom: 24px;
}

.signup-button:hover {
  background-color: #e6e9f1;
}

.forgot-password {
  display: block;
  text-align: center;
  color: #3788e5;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.3s;
}

.forgot-password:hover {
  text-decoration: underline;
  color: #2874c2;
}
</style>
