<script setup lang="ts"></script>

<template>
  <div class="item">
    <slot></slot>
  </div>
</template>

<style lang="css" scoped>
.item {
  display: flex;
  justify-content: space-between;
  background-color: var(--color-background-soft);
  border-radius: 5px;
  padding: 10px;
}

:slotted(.img-container) {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

:slotted(.item-img) {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  object-position: center;
}

:slotted(.item-name) {
  font-size: 1.2rem;
  color: var(--color-text);
}

:slotted(.item-sub) {
  color: var(--vt-c-subtext-light-1);
  font-size: 0.8rem;
}

:slotted(.item-about) {
  color: var(--vt-c-subtext-light-1);
}

:slotted(.item-address) {
  margin-top: 20px;
  color: var(--vt-orage-light);
}

:slotted(.item-count) {
  width: 120px;
  color: var(--vt-purple-light);
  font-weight: bold;
  text-align: center;
  margin: auto 0;
}

@media only screen and (max-width: 600px) {
  :slotted(.item-name) {
    font-size: 1rem;
  }

  :slotted(.item-address) {
    margin-top: 10px;
    font-size: 0.8rem;
  }
}

@media only screen and (min-width: 3000px) {
  :slotted(.item-name) {
    font-size: 1.1vw;
  }

  :slotted(.item-sub) {
    font-size: 0.8vw;
  }

  :slotted(.img-container) {
    width: 4vw;
    height: 4vw;
  }
}
</style>
