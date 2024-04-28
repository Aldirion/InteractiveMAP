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

:slotted(.item-icon) {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--vt-c-divider-dark-1);
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

:slotted(.item-img) {
  color: var(--vt-purple-light);
  font-size: 5rem;
}

:slotted(.item-count) {
  width: 120px;
  color: var(--vt-purple-light);
  font-weight: bold;
  text-align: center;
  margin: auto 0;
}
</style>
