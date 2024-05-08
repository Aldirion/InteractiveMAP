<script setup lang="ts">
import { ref } from 'vue';
import EditingButtonsPanel from '../user/EditingButtonsPanel.vue';

const emit = defineEmits<{
  (e: 'accept'): void;
}>();

let fieldValue = defineModel<string>({ default: `` });

defineProps<{
  type?: string | undefined;
  title: string;
  pattern?: string;
  name: string;
}>();

let initValue = fieldValue.value;
const isEnabled = ref(false);

function startEdit() {
  isEnabled.value = true;
  initValue = fieldValue.value;
}

function acceptChanges() {
  emit('accept');

  isEnabled.value = false;
}

function rejectChanges() {
  fieldValue.value = initValue;
  isEnabled.value = false;
}
</script>

<template>
  <label class="label-inputs">
    {{ title }}
    <div class="input-edit">
      <textarea
        v-model="fieldValue"
        v-if="type === 'textarea'"
        class="input-text textarea"
        :name="name"
        :disabled="!isEnabled"
      ></textarea>
      <input
        v-else
        class="input-text"
        :type="type || 'text'"
        :name="name"
        v-model="fieldValue"
        :pattern="pattern"
        :disabled="!isEnabled"
      />

      <EditingButtonsPanel v-model="isEnabled" @edit="startEdit" @accept="acceptChanges" @reject="rejectChanges" />
    </div>
  </label>
</template>

<style lang="css" scoped>
.label-inputs {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
}

.input-edit {
  display: flex;
  gap: 10px;
}

.input-text {
  outline: none;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--color-text);
  background-color: var(--color-background);
  background-clip: padding-box;
  border: 1px solid var(--color-background-mute);
  border-radius: 0.25rem;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}

.input-text:focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem var(--color-background-mute);
}

.input-text:disabled,
.input-text[readonly] {
  background-color: var(--color-background-soft);
  opacity: 1;
}

.textarea {
  height: calc(6.25rem + 2px);
}

@media only screen and (min-width: 3000px) {
  .input-text {
    height: calc(2.25vw + 2px);
    padding: 0.375vw 0.75vw;
    font-size: 1vw;
    border: 0.1vw solid var(--color-background-mute);
    border-radius: 0.3vw;
  }

  .textarea {
    height: calc(6.25vw + 2px);
  }
}
</style>
