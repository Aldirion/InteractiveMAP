<script setup lang="ts">
import { useStoreAuthorization } from '@/store/authorization';
import { onMounted, ref } from 'vue';
import NavigationPanelUserProfile from '@/components/user/NavigationPanelUserProfile.vue';
import LoaderComponent from '../common/LoaderComponent.vue';
import TextFieldInput from '@/components/user/TextFieldInput.vue';
import { BASE_URL } from '@/interfaces/variables';

const store = useStoreAuthorization();
let userEmail = ref('');
let userBio = ref('');
let userTelegram = ref('');
let userPhone = ref('');
let userImg = ref<null | File>(null);

onMounted(async () => {
  userEmail.value = store.userData!.email !== 'nan' ? store.userData!.email : '';
  userBio.value = store.userData!.bio ? store.userData!.bio : '';
  userTelegram.value = store.userData!.telegram_username !== 'nan' ? store.userData!.telegram_username : '';
  userPhone.value = store.userData!.phone_number !== 'nan' ? store.userData!.phone_number : '';
});

async function saveNewData() {
  await fetch(`${BASE_URL}/users/me/change`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('access')}`,
    },
    body: JSON.stringify({
      email: userEmail.value,
      bio: userBio.value,
      phone_number: userPhone.value,
      telegram_username: userTelegram.value,
    }),
  });
}

const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });

async function onFileChange(e: Event) {
  let target = e.target as HTMLInputElement;
  let files = target.files || [];

  if (!files.length) return;

  userImg.value = files[0];
}

async function saveUserImage() {
  if (userImg.value) {
    const formData = new FormData();
    formData.append('avatar', userImg.value);

    await fetch(`${BASE_URL}/users/me/change`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
      },
      body: formData,
    });

    store.imgPath = await toBase64(userImg.value);
  }
}
</script>

<template>
  <div class="profile">
    <NavigationPanelUserProfile />

    <LoaderComponent v-if="store.userData === null" />
    <div class="personal-data" v-else>
      <div class="user-photo">
        <div class="img-container">
          <img class="user-img" :src="store.imgPath" alt="user photo" />
        </div>

        <div class="user-general-info">
          <div>
            <h4 class="img-title">
              {{ store.userData.lastname }} {{ store.userData.firstname }} {{ store.userData.patronymic }}
            </h4>
            <p class="user-post-sub">{{ store.userData.post_subdivision }}</p>
            <p class="user-post">{{ store.userData.post_title }}</p>
          </div>

          <div class="file-container">
            <input type="file" name="file" class="inputfile" accept="image/png, image/jpeg" @change="onFileChange" />
            <button @click="saveUserImage" class="material-symbols-outlined file-save">done</button>
          </div>
        </div>
      </div>

      <form @submit.prevent="" class="user-data">
        <fieldset class="form-part">
          <legend class="title">Контактная информация</legend>

          <TextFieldInput
            @accept="saveNewData"
            title="Электронная почта"
            type="email"
            v-model="userEmail"
            name="email"
          />
          <TextFieldInput @accept="saveNewData" title="Телеграм" v-model="userTelegram" name="telegram" />

          <TextFieldInput
            title="Номер телефона"
            v-model="userPhone"
            type="tel"
            @accept="saveNewData"
            name="phone"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          />

          <TextFieldInput @accept="saveNewData" name="bio" title="БИО" type="textarea" v-model="userBio" />
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
  padding-bottom: 300px;
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

.img-container {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.user-img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  object-position: center;
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
  color: var(--color-background-mute);
  cursor: pointer;
}

.user-general-info {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.user-data {
  display: flex;
  gap: 20px;
}

.user-post {
  color: var(--vt-orage-light);
}

.user-post:hover {
  cursor: pointer;
}

.user-post-sub {
  color: var(--color-subtext);
}

.form-part {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.title {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.inputfile::file-selector-button {
  border-radius: 4px;
  padding: 0 16px;
  height: 40px;
  cursor: pointer;
  color: var(--color-text);
  background-color: var(--color-background);
  border: 1px solid var(--color-background-mute);
  box-shadow: 0px 1px 0px var(--color-background-mute);
  margin-right: 16px;
  transition: background-color 0.3s ease;
}

.inputfile::file-selector-button:hover {
  background-color: var(--color-background-mute);
}

.inputfile::file-selector-button:active {
  background-color: var(--color-background-soft);
}

.file-container {
  display: flex;
  gap: 20px;
}

.file-save {
  border: 1px solid var(--color-background-mute);
  background-color: var(--color-background);
  border-radius: 5px;
  color: var(--vt-accept-color);
  transition: background-color 0.3s linear;
}

.file-save:hover,
.custom-file-upload:hover {
  cursor: pointer;
  background-color: var(--color-background-mute);
}
</style>
