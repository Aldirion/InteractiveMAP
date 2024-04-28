<script setup lang="ts"></script>
<template>
  <div class="profile">
    <div class="control-panel">
      <div class="panel-title active-title">
        <span class="material-symbols-outlined">person</span>
        <span>Личные данные</span>
      </div>
      <div class="panel-title">
        <span class="material-symbols-outlined">post</span>
        <span>Должность</span>
      </div>
    </div>

    <div class="personal-data">
      <div class="user-photo">
        <span class="material-symbols-outlined img">account_circle</span>
        <div>
          <h4 class="img-title">ФИО</h4>
          <p>должность</p>
          <span class="img-subtitle">Редактировать изображение</span>
        </div>
      </div>

      <form @submit.prevent="" class="user-data">
        <fieldset class="form-part">
          <legend class="title">Личные данные</legend>

          <label class="label-inputs">
            Фамилия
            <input class="input-text" type="text" name="lastname" />
          </label>

          <label class="label-inputs">
            Имя
            <input class="input-text" type="text" name="firstname" />
          </label>

          <label class="label-inputs">
            Отчество
            <input class="input-text" type="text" name="patronymic" />
          </label>

          <label class="label-inputs">
            Снилс
            <input class="input-text" type="number" name="snils" />
          </label>

          <div class="put-in-one-line">
            <label class="label-inputs">
              Дата рождения
              <input class="input-text" type="date" name="birthday" />
            </label>

            <label class="label-inputs">
              Пол
              <select name="gender">
                <option value="male">Мужской</option>
                <option value="female">Женский</option>
              </select>
            </label>
          </div>
        </fieldset>

        <fieldset class="form-part">
          <legend class="title">Контактная информация</legend>

          <label class="label-inputs">
            Электронная почта
            <input class="input-text" type="email" name="email" />
          </label>

          <label class="label-inputs">
            Телеграм
            <input class="input-text" type="text" name="telegram" />
          </label>

          <label class="label-inputs">
            Номер телефона
            <input class="input-text" type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
          </label>

          <label class="label-inputs">
            БИО
            <textarea class="input-text textarea" name="BIO"></textarea>
          </label>
        </fieldset>
      </form>
    </div>
  </div>
</template>
<style lang="css" scoped>
.profile {
  display: flex;
  gap: 50px;
  min-height: 50vh;
  padding-top: 7vh;
}

.control-panel {
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid var(--color-subtext);
  border-radius: 0.25rem;
  padding: 15px;
}

.personal-data {
  width: 100%;
}

.user-photo {
  display: flex;
  border-bottom: 1px solid var(--color-background-mute);
  padding: 10px 10px 20px;
  margin-bottom: 20px;
  gap: 20px;
}

.img {
  font-size: 125px;
}

.img-title {
  font-size: 2rem;
}

.img-subtitle {
  color: var(--color-subtext);
  user-select: none;
  transition: color 0.3s ease;
}

.img-subtitle:hover {
  color: var(--vt-orage-light);
  cursor: pointer;
}

.panel-title {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
}

.user-data {
  display: flex;
  gap: 20px;
}

.form-part {
  width: 45%;
}

.label-inputs {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
}

.put-in-one-line {
  display: flex;
  gap: 10px;
}

.title {
  margin-bottom: 20px;
  font-size: 1.2rem;
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
  border: 1px solid var(--color-subtext);
  border-radius: 0.25rem;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}

.input-text::placeholder {
  color: #212529;
  opacity: 0.4;
}

.input-text:focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem var(--color-background-mute);
}

.input-text:disabled,
.input-text[readonly] {
  background-color: var(--vt-c-subtext-dark-1);
  opacity: 1;
}

.active-title {
  background-color: var(--color-background-mute);
  border-radius: 0.25rem;
}

.textarea {
  height: calc(4.25rem + 2px);
}
</style>
