<template>
  <v-btn v-bind="{ ...$attrs, ...commonAttrs }" v-on="$listeners">
    <v-icon v-if="icon" left light>
      {{ icon }}
    </v-icon>
    <slot>Кнопка</slot>
  </v-btn>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    icon: String
  },
  computed: {
    commonAttrs() {
      return {
        elevation: 0,
        tile: true,
        class: 'default-button'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.theme--light {
  &.v-btn {
    &.v-btn--has-bg {
      width: 118px;
      height: 48px;
      background-color: var(--btn-bg-color);
      color: var(--btn-color);

      &:hover,
      &:focus {
        background-color: var(--btn-hover-bg-color);
      }

      &.v-btn--disabled {
        background-color: var(--btn-disabled-bg-color) !important;
      }
    }
  }
}
</style>