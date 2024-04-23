<script setup lang="ts"></script>

<template>
  <div class="container">
    <h1 class="erorr">404</h1>
    <div class="error-description">
      <div>
        <h2 class="title">Ой!</h2>
        <h2 class="sub-title">Страница не найдена</h2>
      </div>
      <RouterLink to="/map" class="button">Вернуться на главную</RouterLink>
    </div>
  </div>
</template>

<style lang="css" scoped>
.container {
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
}

.erorr {
  width: 45%;
  font-size: 15rem;
  font-weight: bold;
  text-align: center;
  color: var(--vt-c-black-mute);
}

.error-description {
  display: flex;
  flex-direction: column;
  width: 45%;
  gap: 50px;
}

.title {
  font-size: 6rem;
  font-weight: bold;
}

.sub-title {
  font-size: 3rem;
}

.button {
  display: block;
  user-select: none;
  padding: 10px;
  border-radius: 50px;
  color: var(--vt-c-white);
  background-color: var(--vt-c-black-mute);
  text-align: center;
  text-transform: uppercase;
}

@media only screen and (max-width: 1050px) {
  .container {
    flex-direction: column;
    gap: 20px;
  }

  .erorr {
    width: 100%;
    font-size: 12rem;
  }

  .error-description {
    width: 100%;
  }

  .button {
    width: 300px;
    margin: 0 auto;
  }

  .title {
    font-size: 4rem;
    text-align: center;
  }

  .sub-title {
    font-size: 2rem;
    text-align: center;
  }
}

@media only screen and (max-width: 550px) {
  .erorr {
    font-size: 10rem;
  }

  .title {
    font-size: 3rem;
    text-align: center;
  }

  .sub-title {
    font-size: 1.5rem;
    text-align: center;
  }
}
</style>
