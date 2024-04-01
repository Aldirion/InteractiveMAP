<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue';
  import HatSVG from '@/assets/hat.svg';
  import EyeSVG from '@/assets/eye.svg';

  let isHiddenPassword = ref(true);

  function checkPassword() {
    isHiddenPassword.value = !isHiddenPassword.value;
  }
</script>

<template>
  <div class="authorization">
    <div class="authorization-container">
      <div class="authorization-title">
        <HatSVG class="svg"/>
        <h2 class="title-about">РДЦ</h2>
        <p class="subtitle-about">Пройдите авторизацию для получения доступа к данным</p>
      </div>

      <form class="authorization-form">
        <p>Авторизация пользователя</p>
        <input class="input-text size" type="text" placeholder="Введите логин">
        <div class="input-password">
          <input class="input-text size" :type="isHiddenPassword ? 'password' : 'text'" placeholder="Введите пароль"> 
          <EyeSVG @click="checkPassword()" class="check-btn"/>
        </div>
        <button class="button size" type="submit">авторизоваться</button>
      </form>
    </div>
  </div>
</template>

<style lang="css" scoped>
  .authorization {
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }

  .authorization-container {
    display: flex;
    width: 45vw;
    height: 60vh;
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
  }

  .authorization-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 50%;
    height: 100%;
    color: var(--color-background);
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 1rem;
    background-color: var(--color-text);
  }

  .size {
    width: 15vw;
    height: 2.5rem;
    padding: 0.375rem  0.375rem;
    border-radius: .2rem;
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
    width: 2rem;
    opacity: .6;
    right: 0.375rem;
    top: 50%;
    transform: translate(0, -50%)
  }

  .check-btn:hover {
    cursor: pointer;
    opacity: 1;
    transition: opacity .4s linear;
  }

  .title-about {
    font-size: 2rem;
    letter-spacing: 2px;
  }

  .button {
    text-transform: uppercase;
    letter-spacing: 1px;
    border: none;
    color: var(--color-text);
    background-color: var(--vt-c-black-mute);
    transition: background-color .3s linear;
  }

  .button:hover {
    cursor: pointer;
    background-color: #533e9c;
    transition: background-color .3s linear;
  }

  .subtitle-about {
    font-size: .8rem;
    letter-spacing: 1px;
    text-align: center;
  }

  .svg {
    fill: var(--color-text);
    width: 40%;
  }

</style>