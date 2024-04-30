<script setup lang="ts">
import { ref } from 'vue';
import LogoSVG from '@/assets/logo.svg';
import router from '@/router';
import { BASE_URL } from '@/interfaces/variables';

let isHiddenPassword = ref(true);
let isHiddenError = ref(false);

let login = defineModel('login');
let password = defineModel('password');

function checkPassword() {
  isHiddenPassword.value = !isHiddenPassword.value;
}

function authorization() {
  fetch(`${BASE_URL}/auth/token/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: login.value,
      password: password.value,
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then((json) => {
      localStorage.setItem('refresh', json.refresh);
      localStorage.setItem('access', json.access);
      isHiddenError.value = false;
      router.push('/map');
    })
    .catch((response) => {
      isHiddenError.value = true;

      if (response.status !== 401) {
        console.log('Server error');
      }
    });
}
</script>

<template>
  <main class="authorization">
    <div class="authorization-container">
      <div class="authorization-title">
        <LogoSVG class="svg" />
      </div>

      <form class="authorization-form" @submit.prevent="authorization">
        <p>Авторизация пользователя</p>
        <input class="input-text size" type="text" placeholder="Введите логин" v-model="login" />
        <div class="input-password">
          <input
            class="input-text size"
            v-model="password"
            :type="isHiddenPassword ? 'password' : 'text'"
            placeholder="Введите пароль"
            name="password"
            autocomplete="on"
          />
          <span v-if="isHiddenPassword" @click="checkPassword()" class="material-symbols-outlined check-btn"
            >visibility_off</span
          >
          <span v-else @click="checkPassword()" class="material-symbols-outlined check-btn">visibility</span>
        </div>
        <p class="error" v-if="isHiddenError">Неправильный логин или пароль</p>
        <button class="button size" type="submit">авторизоваться</button>
      </form>
    </div>
  </main>
</template>

<style lang="css" scoped>
.authorization {
  width: 100%;
  min-height: 80vh;
  padding-bottom: 400px;
  padding-top: 100px;
}

.authorization-container {
  display: flex;
  margin: 0 auto;
  width: 50vw;
  height: 60vh;
  transition: width 0.3s linear;
}

.authorization-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  color: var(--color-text);
  background-color: var(--vt-c-black-mute);
  transition:
    width 0.2s linear,
    height 0.2s linear;
}

.authorization-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 50%;
  height: 100%;
  color: var(--color-text);
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 1rem;
  background-color: var(--color-background-soft);
  transition:
    width 0.2s linear,
    height 0.2s linear;
}

.size {
  width: 15vw;
  height: 2.5rem;
  padding: 0.375rem 0.375rem;
  border-radius: 0.2rem;
  transition: width 0.3s linear;
}

.input-text {
  outline: none;
  font-size: 1rem;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
}

.input-password {
  position: relative;
}

.check-btn {
  position: absolute;
  font-size: 1.5rem;
  right: 0.375rem;
  top: 50%;
  transform: translate(0, -50%);
  color: var(--vt-c-divider-dark-2);
  transition: color 0.4s linear;
}

.check-btn:hover {
  cursor: pointer;
  color: var(--vt-c-black);
  transition: color 0.4s linear;
}

.button {
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  color: var(--vt-c-white-soft);
  background-color: var(--vt-c-black-mute);
  transition: background-color 0.3s linear;
}

.button:hover {
  cursor: pointer;
  background-color: #533e9c;
  transition: background-color 0.3s linear;
}

.svg {
  width: 90%;
}

.error {
  display: block;
  font-weight: lighter;
  color: red;
  width: 300px;
  text-align: center;
  line-height: 22px;
  font-size: 0.8rem;
}

@media only screen and (max-width: 1430px) {
  .authorization-container {
    width: 80%;
  }

  .size {
    width: 18vw;
  }
}

@media only screen and (max-width: 1130px) {
  .authorization-container {
    display: block;
  }

  .authorization-title {
    width: 100%;
    height: 30%;
  }

  .authorization-form {
    width: 100%;
    height: 70%;
  }

  .size {
    width: 300px;
  }
}

@media only screen and (max-width: 600px) {
  .authorization-container {
    width: 100%;
  }

  .size {
    width: 250px;
  }
}

@media only screen and (max-width: 360px) {
  .size {
    width: 220px;
  }
}
</style>
