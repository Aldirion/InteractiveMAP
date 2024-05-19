<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStoreRegions } from '@/store/store';
import RouterByPagesComponent from '../common/RouterByPagesComponent.vue';
import ListComponent from '@/components/common/ListComponent.vue';
import LoaderComponent from '@/components/common/LoaderComponent.vue';
import ListItemComponent from '@/components/common/ListItemComponent.vue';
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
  if (regionCode) {
    const regionsData = await store.getRegions();
    regionName.value = regionsData[regionCode].title;
  }

  userData.value = await storeAuthorization.getAnotherUserData(userId);
  isLoaded.value = true;
});
</script>

<template>
  <LoaderComponent v-if="!isLoaded" />
  <div v-else>
    <RouterByPagesComponent :region-name="regionName!" v-if="regionCode" />
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

    <div class="institutions-container">
      <ListComponent
        v-if="userData?.eduinstitutions.length"
        :title="`Список образовательных учреждений под руководством (${userData?.eduinstitutions.length})`"
        :opened="userData?.eduinstitutions.length < 5"
      >
        <ListItemComponent v-for="institution in userData?.eduinstitutions" :key="institution.edu_inst_title">
          <div class="item-about">
            <p class="item-name">{{ institution.edu_inst_title }}</p>
          </div>
        </ListItemComponent>
      </ListComponent>
    </div>
  </div>
</template>

<style lang="css" scoped>
.user {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 50px;
  margin-top: 20px;
}

.container-img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.institutions-container {
  display: flex;
  justify-content: center;
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

.edunstitution-title {
  text-align: center;
  font-size: 1.4rem;
  margin: 30px 0;
}

@media only screen and (max-width: 520px) {
  .user {
    flex-direction: column;
    align-items: center;
  }
}
</style>
