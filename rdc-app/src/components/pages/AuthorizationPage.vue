<script>
export default {
  
}
</script>

<template>
  <div class="authorization">
    <div class="authorization-container">
      <div class="authorization-title">
        <svg viewBox="0 0 512 512" class="svg">
          <title />
          <path
            d="M256,368a16,16,0,0,1-7.94-2.11L108,285.84a8,8,0,0,0-12,6.94V368a16,16,0,0,0,8.23,14l144,80a16,16,0,0,0,15.54,0l144-80A16,16,0,0,0,416,368V292.78a8,8,0,0,0-12-6.94L263.94,365.89A16,16,0,0,1,256,368Z" />
          <path
            d="M495.92,190.5s0-.08,0-.11a16,16,0,0,0-8-12.28l-224-128a16,16,0,0,0-15.88,0l-224,128a16,16,0,0,0,0,27.78l224,128a16,16,0,0,0,15.88,0L461,221.28a2,2,0,0,1,3,1.74V367.55c0,8.61,6.62,16,15.23,16.43A16,16,0,0,0,496,368V192A14.76,14.76,0,0,0,495.92,190.5Z" />
        </svg>
        <h2 class="title-about">РДЦ</h2>
        <p class="subtitle-about">Пройдите авторизацию для получения доступа к данным</p>
      </div>

      <div class="authorization-form">
        <p>Авторизация пользователя</p>
        <input class="input-text size" type="text" placeholder="Введите логин">
        <input class="input-text size" type="password" placeholder="Введите пароль"> 
        <!-- для возможности показывать пароль инвентировать тип на текст -->
        <button class="button size" type="submit">авторизоваться</button>
      </div>
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
    color: rgb(241, 241, 241);
    background-color: #5c48a3;
  }

  .authorization-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 50%;
    height: 100%;
    color: #212529cc;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 1rem;
    background-color: rgb(241, 241, 241);
  }

  .size {
    width: 60%;
    height: 2.5rem;
    padding: 0.375rem 0.75rem;
    border-radius: .2rem;
  }

  .input-text {
    outline: none;
    font-size: 1rem;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #bdbdbd;
    /* border-radius: 0.25rem; */
  }

  .title-about {
    font-size: 2rem;
    letter-spacing: 2px;
  }

  .button {
    text-transform: uppercase;
    letter-spacing: 1px;
    border: none;
    color: rgb(241, 241, 241);
    background-color: #5c48a3;
  }

  .button:hover {
    cursor: pointer;
  }

  .subtitle-about {
    font-size: .8rem;
    letter-spacing: 1px;
    text-align: center;
  }

  .svg {
    fill: rgb(241, 241, 241);
    width: 40%;
  }

</style>