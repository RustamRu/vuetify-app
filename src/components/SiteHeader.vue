<template>
  <header class="header">
    <div class="header__inner">
      <SiteNav />
      <SearchInput />
    </div>
  </header>
</template>

<script>
import SearchInput from './SearchInput.vue';
import SiteNav from './SiteNav.vue';
export default {
  components: { SearchInput, SiteNav }
}
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid var(--header-border-color);
  padding: 24px 0;

  &__inner {
    margin-inline: auto;
    max-width: 1120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
