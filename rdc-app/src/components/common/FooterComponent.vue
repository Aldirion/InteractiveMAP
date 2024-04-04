<script setup lang="ts">
  import VkSVG from '@/assets/vk.svg';
  import TelegramSVG from '@/assets/telegram.svg';
  import WebSVG from '@/assets/web.svg';
  import LogoSVG from '@/assets/logo-min.svg';
</script>

<template>
  <footer class="footer">
    <div class="about-company">
      <div class="company-logo-container">
        <LogoSVG class="main-logo" />
      </div>
      <div class="about-container">
        <h4 class="footer-title">ФГБУ «Росдетцентр»</h4>
        <p class="about-company-text">
           - федеральное государственное бюджетное учреждение, деятельность которого целиком сосредоточена на развитии и воспитании детей и молодёжи.
        </p>
      </div>
    </div>

    <div class="navigation">
      <h4 class="footer-title">О сайте</h4>
      <a class="footer-link" href="#">Личный кабинет</a>
      <a class="footer-link" href="#">Главная</a>
      <a class="footer-link" href="#">Выбрать регион</a>
    </div>

    <div class="social">
      <h4 class="footer-title">Соцсети</h4>
      <div class="social-container">
        <a href="https://vk.com/rosdetcenter">
          <VkSVG class="logo" />
        </a>
        <a href="https://t.me/rosdetcenter">
          <TelegramSVG class="logo" />
        </a>
        <a href="http://rusdetcenter.ru/">
          <WebSVG class="logo" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="css" scoped>
  .footer {
    display: flex;
    justify-content: space-around;
    align-items: start;
    gap: 50px;
    margin-top: 20vh;
    width: 100%;
    height: 250px;
  }

  .about-company {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .about-container {
    width: 300px;
  }

  .about-company-text {
    font-size: 14px;
    color: rgb(188, 188, 189);
    line-height: 1.3;
  }

  .footer-title {
    font-size: 18px;
    padding-top: 50px;
    padding-bottom: 20px;
  }

  .company-logo-container {
    position: relative;
    overflow: hidden;
    width: 150px;
    height: 150px;
    margin-top: 50px
  }

  .main-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
  }

  .navigation {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .logo {
    width: 40px;
    fill: var(--vt-c-text-dark-2);
  }

  .logo:hover {
    cursor: pointer;
  }

  .footer-link {
    text-decoration: none;
    color: var(--vt-c-text-dark-2);
  }

  .footer-link:hover {
    color: var(--vt-c-black-mute);
    transition: color .3s linear;
  }

  .social-container {
    display: flex;
    gap: 15px;
    padding-top: 10px;
  }
</style>