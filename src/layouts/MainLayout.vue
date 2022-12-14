<template>
  <MainNavbar @menuToggle="isMenuOpen = !isMenuOpen" />
  <MainSidebar :isMenuOpen="isMenuOpen" />
  <div class="app-main-layout">
    <main class="app-content" :class="{ full: !isMenuOpen }">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link to="/record" class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import MainNavbar from "@/components/app/MainNavbar.vue";
import MainSidebar from "@/components/app/MainSidebar.vue";
export default {
  components: {
    MainNavbar,
    MainSidebar,
  },
  data: () => ({
    isMenuOpen: false,
  }),
};
</script>

<style></style>
