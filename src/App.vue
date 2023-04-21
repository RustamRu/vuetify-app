<template>
  <v-app id="app" class="page">
    <SiteHeader class="page__header" />
    <router-view class="page__main" />
    <SiteFooter class="page__footer" />
  </v-app>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue';
import SiteFooter from './components/SiteFooter.vue';

export default {
  components: { SiteHeader, SiteFooter }
}
</script>

<style lang="scss">
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__main {
    flex-grow: 1;
    margin-inline: auto;
    width: 100%;
    max-width: 1216px;
    padding-block: 45px;
  }
}
</style>
