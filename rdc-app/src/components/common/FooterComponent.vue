<script setup lang="ts">
import VkSVG from '@/assets/vk.svg';
import TelegramSVG from '@/assets/telegram.svg';
import WebSVG from '@/assets/web.svg';
import { useStoreAuthorization } from '@/store/authorization';

const store = useStoreAuthorization();
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

    <div class="navigation" v-if="store.isAuthorized">
      <h4 class="footer-title">О сайте</h4>
      <RouterLink to="/personal-account" class="footer-link">Личный кабинет</RouterLink>
      <RouterLink to="/rdc-team" class="footer-link">Федеральная команда</RouterLink>
      <RouterLink to="/map" class="footer-link">Выбрать регион</RouterLink>
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
  position: absolute;
  left: 0;
  bottom: 0;
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

@media only screen and (min-width: 3000px) {
  .footer {
    height: 10vw;
  }

  .company-logo-container {
    width: 6vw;
    height: 6vw;
    margin-top: 2vw;
  }

  .about-container {
    width: 18vw;
  }

  .about-company {
    gap: 0.5vw;
  }

  .about-company-text {
    font-size: 0.8vw;
  }

  .footer-title {
    font-size: 1vw;
    padding-top: 2vw;
    padding-bottom: 0.5vw;
  }

  .navigation {
    gap: 0.3vw;
    font-size: 0.7vw;
  }

  .logo {
    width: 2vw;
  }

  .social-container {
    gap: 0.5vw;
    padding-top: 0.5vw;
  }
}

@media only screen and (max-width: 1130px) {
  .footer {
    height: 200px;
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

  .footer-title {
    font-size: 1rem;
    padding-top: 30px;
    padding-bottom: 15px;
  }

  .company-logo-container {
    width: 100px;
    height: 100px;
  }

  .about-company-text {
    font-size: 12px;
  }

  .footer-link {
    font-size: 0.9rem;
  }

  .social-container {
    gap: 7px;
    padding-top: 0px;
  }

  .logo {
    width: 30px;
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

  .about-company-text {
    display: none;
  }
}

@media only screen and (max-width: 620px) {
  .footer {
    gap: 20px;
  }

  .footer-link,
  .footer-title {
    text-align: center;
  }

  .logo {
    width: 25px;
  }

  .about-container {
    width: 120px;
    text-align: center;
  }
}

@media only screen and (max-width: 420px) {
  .footer {
    height: 180px;
  }

  .about-container {
    width: 100px;
  }

  .company-logo-container {
    width: 70px;
    height: 70px;
  }

  .footer-link {
    font-size: 0.7rem;
  }

  .footer-title {
    font-size: 15px;
  }
}
</style>
