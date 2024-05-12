<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStoreRegions } from '@/store/store';
import RouterByPagesComponent from '../common/RouterByPagesComponent.vue';
import LoaderComponent from '../common/LoaderComponent.vue';
import { useStoreAuthorization } from '@/store/authorization';
import type { UserData } from '@/interfaces/user';

const route = useRoute();

const regionCode = route.params.region_code as string;
const userId = route.params.user_id as string;

let regionName = ref<string | null>(null);
let userData = ref<UserData | null>(null);
let isLoaded = ref(false);

const store = useStoreRegions();
const storeAuthorization = useStoreAuthorization();

onMounted(async () => {
  const regionsData = await store.getRegions();
  userData.value = await storeAuthorization.getAnotherUserData(userId);
  regionName.value = regionsData[regionCode].title;
  isLoaded.value = true;
});
</script>

<template>
  <LoaderComponent v-if="!isLoaded" />
  <div v-else>
    <RouterByPagesComponent :region-name="regionName!" />
    <div class="user">
      <div class="container-img">
        <img :src="userData?.avatar" alt="user photo" class="img" />
      </div>

      <div class="container-data">
        <span class="user-name">{{ userData?.lastname }} {{ userData?.firstname }} {{ userData?.patronymic }}</span>

        <span v-for="post in userData?.posts" :key="post.tab_number">
          <p class="user-post">{{ post.post_title }}</p>
          <p class="user-post-sub">{{ post.subdivision_title }}</p>
        </span>
      </div>
    </div>
    <h2 v-if="userData?.eduinstitutions.length !== 0" class="edunstitution-title">
      Список образовательных учреждений под руководством:
    </h2>
    <div class="edunstitution">
      <span
        v-for="institution in userData?.eduinstitutions"
        :key="institution.edu_inst_title"
        class="edunstitution-item"
      >
        <span class="institution">{{ institution.edu_inst_title }}</span>
      </span>
    </div>
  </div>
</template>

<style lang="css" scoped>
.user {
  display: flex;
  justify-content: center;
  gap: 50px;
}

.container-img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  object-position: center;
}

.user-name {
  font-size: 2rem;
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

.edunstitution {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;
}

.edunstitution-title {
  text-align: center;
  font-size: 1.4rem;
  margin: 30px 0;
}

.edunstitution-item {
  width: 50%;
  background-color: var(--color-background-soft);
  padding: 20px;
  border-radius: 5px;
  margin: 0 auto;
}
</style>
