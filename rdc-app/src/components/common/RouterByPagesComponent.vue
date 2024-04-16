<script setup lang="ts">
import router from '@/router';
import { useRoute } from 'vue-router';
const route = useRoute();

const pathTitles: { [key: string]: { title: string; url: string } } = {
  map: {
    title: 'главная карта',
    url: '/map',
  },
  region: {
    title: 'region',
    url: '/map/region',
  },
  'educational-spaces': {
    title: 'Воспитательные пространства',
    url: '/map/region/educational-spaces',
  },
  team: {
    title: 'Региональная команда',
    url: '/map/region/team',
  },
};

const path = route.fullPath.split('/');
let titles: { title: string; url: string }[] = [];
path.shift();
let regionCode = path[1];
console.log(path);

path.forEach((pageName, idx) => {
  if (pageName in pathTitles) {
    titles.push({
      title: pathTitles[pageName].title,
      url: pathTitles[pageName].url,
    });
  }

  if (pageName.includes('RU-') || idx === 1) {
    titles.push({
      title: pathTitles['region'].title,
      url: pathTitles['region'].url.replace('region', regionCode),
    });
  }
});

function redirectTopage(pagePath: string) {
  router.push(pagePath);
}
</script>

<template>
  <div class="router-container">
    <template v-for="(pageName, idx) in titles" :key="pageName.title">
      <a class="page" @click="redirectTopage(pageName.url)">
        {{ pageName.title }}
      </a>
      <div v-if="idx != titles.length - 1">>></div>
    </template>

  </div>
</template>

<style lang="css" scoped>
.router-container {
  margin: 20px 0 50px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.page {
  text-transform: uppercase;
  user-select: none;
}

.page:hover {
  cursor: pointer;
}
</style>
