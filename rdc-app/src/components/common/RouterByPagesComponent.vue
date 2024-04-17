<script setup lang="ts">
import router from '@/router';
import { useStoreRegions } from '@/store/store';
import { computed, onMounted, reactive, ref, type Ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const store = useStoreRegions();
const { getRegionData } = store;

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
path.shift();
let regionName: Ref<string | null> = ref(null);
let regionCode = path[1];

onMounted(async () => {
  regionName.value = (await getRegionData(regionCode)).title;
});

let titlesRoute = computed(() => {
  let titles: { title: string; url: string }[] = reactive([]);

  path.forEach((pageName, idx) => {
    if (pageName in pathTitles) {
      titles.push({
        title: pathTitles[pageName].title,
        url: pathTitles[pageName].url.replace('region', regionCode),
      });
    }

    if (pageName.includes('RU-') || idx === 1) {
      titles.push({
        title: pathTitles['region'].title.replace('region', regionName.value!),
        url: pathTitles['region'].url.replace('region', regionCode),
      });
    }
  });
  return titles;
});

function redirectTopage(pagePath: string) {
  router.push(pagePath);
}
</script>

<template>
  <div class="router-container">
    <template v-for="(pageName, idx) in titlesRoute" :key="pageName.title">
      <a class="page" @click="redirectTopage(pageName.url)">
        {{ pageName.title }}
      </a>
      <div v-if="idx != titlesRoute.length - 1">>></div>
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
