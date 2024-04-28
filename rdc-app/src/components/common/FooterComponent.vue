<script setup lang="ts">
import VkSVG from '@/assets/vk.svg';
import TelegramSVG from '@/assets/telegram.svg';
import WebSVG from '@/assets/web.svg';
</script>

<template>
  <footer class="footer">
    <div class="about-company">
      <div class="company-logo-container">
        <img class="main-logo" src="../../assets/logo_purple.png" alt="logotype" />
      </div>
      <div class="about-container">
        <h4 class="footer-title">ФГБУ «Росдетцентр»</h4>
        <p class="about-company-text">
          - федеральное государственное бюджетное учреждение, деятельность которого целиком сосредоточена на развитии и
          воспитании детей и молодёжи.
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
  margin-top: 200px;
  padding: 0 10vw;
  width: 100%;
  height: 250px;
  background-color: var(--color-background-soft);
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
  color: var(--color-text);
  line-height: 1.3;
}

.footer-title {
  font-size: 18px;
  font-weight: bold;
  padding-top: 50px;
  padding-bottom: 20px;
}

.company-logo-container {
  position: relative;
  overflow: hidden;
  width: 150px;
  height: 150px;
  margin-top: 50px;
}

.main-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
}

.navigation {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.logo {
  width: 40px;
  fill: var(--vt-purple-light);
}

.logo:hover {
  cursor: pointer;
}

.footer-link {
  text-decoration: none;
  color: var(--color-text);
}

.footer-link:hover {
  color: var(--vt-c-black-mute);
  transition: color 0.3s linear;
}

.social-container {
  display: flex;
  gap: 15px;
  padding-top: 10px;
}

@media only screen and (max-width: 1130px) {
  .footer {
    height: 300px;
  }

  .social-container {
    flex-direction: column;
    align-items: center;
  }

  .about-container {
    width: 200px;
  }

  .footer {
    margin-top: 100px;
  }
}

@media only screen and (max-width: 820px) {
  .about-company {
    flex-direction: column;
  }

  .about-container {
    order: 1;
  }

  .company-logo-container {
    order: 2;
    margin-top: 0px;
  }

  .company-logo-container {
    width: 100px;
    height: 100px;
  }

  .about-company-text {
    display: none;
  }
}

@media only screen and (max-width: 620px) {
  .footer {
    gap: 20px;
    margin-top: 100px;
  }

  .footer-link,
  .footer-title {
    text-align: center;
  }

  .logo {
    width: 30px;
  }

  .footer-title {
    font-size: 16px;
  }

  .about-container {
    width: 120px;
    text-align: center;
  }
}

@media only screen and (max-width: 420px) {
  .company-logo-container {
    width: 80px;
    height: 80px;
  }

  .footer-link {
    font-size: 14px;
  }

  .footer-title {
    font-size: 15px;
  }
}
</style>
