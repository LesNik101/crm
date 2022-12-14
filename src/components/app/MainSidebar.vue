<template>
  <ul class="sidenav app-sidenav" :class="{ open: isMenuOpen }">
    <SidebarItem v-for="link in links" :key="link.url" :link="link" />
  </ul>
</template>

<script>
import SidebarItem from "@/components/app/SidebarItem.vue";
export default {
  components: {
    SidebarItem,
  },
  props: {
    isMenuOpen: {
      type: Boolean,
      required: true,
    },
  },
  data: () => ({
    links: [
      { title: "Счет", url: "/", exact: true },
      { title: "История", url: "/history", exact: false },
      { title: "Планирование", url: "/planning", exact: false },
      { title: "Новая запись", url: "/record", exact: false },
      { title: "Категории", url: "/categories", exact: false },
    ],
  }),
};
</script>

<style></style>
