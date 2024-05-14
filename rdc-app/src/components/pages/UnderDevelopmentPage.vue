<script setup lang="ts">
import Barricade from '@/assets/barricade.svg';
import router from '@/router';
</script>

<template>
  <div class="container">
    <h1 class="title">В разработке</h1>
    <Barricade class="svg" />
    <div @click="router.go(-1)" class="animated-button">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Вернуться назад
    </div>
  </div>
</template>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vw;
  height: 70vh;
  margin-top: 3vw;
}

.wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.title {
  text-align: center;
  font-size: 3vw;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-text);
}

.svg {
  width: 20%;
  margin: 0 auto;
}

.animated-button {
  background: var(--color-background-soft);
  padding: 1vw 4vw;
  margin: 12px;
  display: inline-block;
  -webkit-transform: translate(0%, 0%);
  transform: translate(0%, 0%);
  overflow: hidden;
  color: var(--vt-c-text-light-3);
  font-size: 1vw;
  letter-spacing: 2.5px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.animated-button:hover {
  cursor: pointer;
}

.animated-button::before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: var(--vt-orage-light);
  opacity: 0;
  -webkit-transition: 0.2s opacity ease-in-out;
  transition: 0.2s opacity ease-in-out;
}

.animated-button:hover::before {
  opacity: 0.2;
}

.animated-button span {
  position: absolute;
}

.animated-button span:nth-child(1) {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(linear, right top, left top, from(rgba(43, 8, 8, 0)), to(var(--vt-c-text-light-3)));
  background: linear-gradient(to left, rgba(43, 8, 8, 0), var(--vt-c-text-light-3));
  -webkit-animation: 2s animateTop linear infinite;
  animation: 2s animateTop linear infinite;
}

@keyframes animateTop {
  0% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

.animated-button span:nth-child(2) {
  top: 0px;
  right: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(linear, left bottom, left top, from(rgba(43, 8, 8, 0)), to(var(--vt-c-text-light-3)));
  background: linear-gradient(to top, rgba(43, 8, 8, 0), var(--vt-c-text-light-3));
  -webkit-animation: 2s animateRight linear -1s infinite;
  animation: 2s animateRight linear -1s infinite;
}

@keyframes animateRight {
  0% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
  100% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}

.animated-button span:nth-child(3) {
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(linear, left top, right top, from(rgba(43, 8, 8, 0)), to(var(--vt-c-text-light-3)));
  background: linear-gradient(to right, rgba(43, 8, 8, 0), var(--vt-c-text-light-3));
  -webkit-animation: 2s animateBottom linear infinite;
  animation: 2s animateBottom linear infinite;
}

@keyframes animateBottom {
  0% {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  100% {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
}

.animated-button span:nth-child(4) {
  top: 0px;
  left: 0px;
  height: 100%;
  width: 2px;
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(43, 8, 8, 0)), to(var(--vt-c-text-light-3)));
  background: linear-gradient(to bottom, rgba(43, 8, 8, 0), var(--vt-c-text-light-3));
  -webkit-animation: 2s animateLeft linear -1s infinite;
  animation: 2s animateLeft linear -1s infinite;
}

@keyframes animateLeft {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
  100% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
  }
}
</style>
