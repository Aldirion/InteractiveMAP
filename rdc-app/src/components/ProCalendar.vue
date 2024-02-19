<script>
import { ProCalendar } from "@lbgm/pro-calendar-vue";
const evts = ref([
      {
        date: "2022-11-24T16:00:50.253Z",
        comment: "Faire une livraison à moto de Mont Sinaï à Calavi",
        id: "cl3eddmjz1435801pqwfa5ihd1",
        keywords: "Anniversaire",
        name: "SAGBO Aimé",
      },
      {
        date: "2022-11-19T14:00:00.000Z",
        comment: "",
        id: "cl32rbkjk1700101o53e3e3uhn",
        keywords: "Projet BAMBA",
        name: "MONTCHO Kévin",
      },
      {
        date: "2022-11-17T13:00:36.284Z",
        comment: "",
        id: "cl34856g01439801piot8vp3jr",
        keywords: "Rencontre",
        name: "Cornelia ADADJO",
      },
      {
        date: "2022-11-10T07:00:00.000Z",
        comment: "",
        id: "cl2yk477s136301pbmh49btdg",
        keywords: "Anniversaire",
        name: "Sylla Rahamata",
      },
      {
        date: "2022-11-10T07:00:00.000Z",
        comment: "",
        id: "cl30h76qi116501nu2dc1wnv1",
        keywords: "Réunion",
        name: "Espéra AWO",
      },
    ]);

    const cfg = ref({
      viewEvent: {
        icon: true,
        text: "",
      },
      reportEvent: {
        icon: true,
        text: "",
      },
      searchPlaceholder: "",
      eventName: "",
      closeText: "",
      nativeDatepicker: true, // false ---> use VCalendar DatePicker instead
    });
export default {
    return: {
      evts,
      cfg,
    },
    components: {ProCalendar}
}
</script>

<template>
    <pro-calendar
        :events="evts"
        :loading="false"
        :config="cfg"
        view="week"
        date="'isoStringDate'"
        @calendarClosed="void 0"
/>
</template>