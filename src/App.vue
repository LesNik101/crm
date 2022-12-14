<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";
export default {
  components: {
    AuthLayout,
    MainLayout,
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "auth") + "-layout";
    },
  },
};
</script>

<style lang="scss">
@import "materialize-css/dist/css/materialize.min";
@import "assets/css/index";
</style>
