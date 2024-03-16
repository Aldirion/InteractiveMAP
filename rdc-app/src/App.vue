<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Главная</RouterLink>
        <!-- <RouterLink to="/about">О проекте</RouterLink> -->
        <RouterLink to="/map">Карта</RouterLink>
        <!-- <RouterLink to="/test">TEST</RouterLink> -->
        <a class="theme-toggle"><span class="material-symbols-outlined">dark_mode</span></a>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  /* margin-top: 0; */
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.theme-toggle{
  background-color: transparent;
  color: rgba(94, 121, 221, 1);
  border-color: transparent;
  border-left: 2px solid var(--color-border);
  display: flex;
}
.theme-toggle:hover{
  background-color: var(--color-border);
  border-color: transparent;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display:flex;
  align-items: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 2px solid var(--color-border);
  color: rgba(94, 121, 221, 1);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: center;
    /* margin-left: -1rem; */
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
