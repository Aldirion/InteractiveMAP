<script setup lang="ts">
defineEmits<{
  (e: 'edit'): void;
  (e: 'reject'): void;
  (e: 'accept'): void;
}>();

let showPanel = defineModel({ default: false });
</script>

<template>
  <button class="material-symbols-outlined edit btn" @click="$emit('edit')" v-if="!showPanel">edit</button>

  <div class="panel-btn" v-if="showPanel">
    <button class="material-symbols-outlined clear btn" @click="$emit('reject')">close</button>
    <button class="material-symbols-outlined accept btn" @click="$emit('accept')">done</button>
  </div>
</template>

<style lang="css" scoped>
.btn {
  border: 1px solid var(--color-background-mute);
  border-radius: 5px;
  background-color: var(--color-background-soft);
  transition: background-color 0.3s ease;
}

.edit {
  color: var(--color-text);
}

.accept {
  color: var(--vt-accept-color);
}

.btn:hover {
  cursor: pointer;
  background-color: var(--color-background-mute);
}

.clear {
  color: var(--vt-orage-light);
}

.panel-btn {
  display: flex;
  gap: 10px;
}

@media only screen and (min-width: 3000px) {
  .btn {
    border: 0.1vw solid var(--color-background-mute);
    border-radius: 0.3vw;
    width: 2.5vw;
    font-size: 1.2vw;
  }
}
</style>
