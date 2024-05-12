<script setup lang="ts">
import router from '@/router';
import { computed, reactive } from 'vue';
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
  worker: {
    title: 'Работник',
    url: '/map/region/team/worker',
  },
  schools: {
    title: 'Школы',
    url: '/map/region/schools',
  },
  spo: {
    title: 'СПО',
    url: '/map/region/spo',
  },
};

const props = defineProps<{
  regionName: string;
}>();

const path = route.fullPath.split('/');
path.shift();
let regionCode = path[1];

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
        title: pathTitles['region'].title.replace('region', props.regionName),
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
      <div class="arrow" v-if="idx != titlesRoute.length - 1">>></div>
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
  text-align: center;
  margin: auto 0;
}

.page:hover {
  cursor: pointer;
}

.arrow {
  margin: auto 0;
}

@media only screen and (max-width: 550px) {
  .router-container {
    margin: 20px 0 30px;
    gap: 10px;
  }

  .page {
    font-size: 0.9rem;
  }
}
</style>
