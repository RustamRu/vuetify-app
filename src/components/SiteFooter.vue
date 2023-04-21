<template>
  <footer class="footer">
    <div class="footer__inner">
      <SiteNav />
      <div class="footer__contacts">
        <DefaultButton plain text icon="mdi-phone" href="tel:+78125555555">+7 (812) 555-55-55</DefaultButton>
        <DefaultButton plain text icon="mdi-map-marker">г. Санкт-Петербург, ул. Ефимова, 3</DefaultButton>
      </div>
    </div>
  </footer>
</template>

<script>
import DefaultButton from './DefaultButton.vue';
import SiteNav from './SiteNav.vue';

export default {
  components: { SiteNav, DefaultButton }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--footer-bg-color);
  padding-block: 37px;

  &__inner {
    margin-inline: auto;
    max-width: 1167px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__contacts {
    max-width: 496px;
    display: flex;
  }
}
</style>
