<template>
  <router-link
    active-class="active"
    :to="link.url"
    :exact="link.exact"
    custom
    v-slot="{ navigate, isActive }"
  >
    <li :class="{ active: isActive }">
      <a href="#" @click="navigate" class="waves-effect waves-orange pointer">{{
        link.title
      }}</a>
    </li>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
