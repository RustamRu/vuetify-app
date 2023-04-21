<template>
  <DefaultButton v-if="state === 'purchase'" v-bind="commonAttrs" @click.stop="changeState">
    Купить
  </DefaultButton>
  <DefaultButton v-else-if="state === 'preloader'" v-bind="commonAttrs" :class="'buy-button--in-stock'" loading />
  <DefaultButton v-else-if="state === 'checked'" v-bind="commonAttrs" @click.stop="changeState" :class="'buy-button--in-stock'"
    icon="mdi-check">
    В корзине
  </DefaultButton>
</template>

<script>
import DefaultButton from './DefaultButton.vue';

export default {
  props: {
    productId: String,
    inCart: Boolean
  },
  data: function () {
    return {
      state: 'purchase'
    };
  },
  components: { DefaultButton },
  computed: {
    commonAttrs() {
      return {
        class: 'buy-button'
      }
    }
  },
  methods: {
    changeState() {
      if (this.state === 'purchase') {
        this.state = 'preloader';
        this.$store.commit('ADD_PRODUCT_TO_CART', this.productId);
        setTimeout(() => this.state = 'checked', 2000);
      } else {
        this.$store.commit('REMOVE_PRODUCT_FROM_CART', this.productId);
        this.state = 'purchase';
      }
    }
  },
  mounted() {
    if (this.inCart) {
      this.state = 'checked';
    }
  }
}
</script>

<style lang="scss">
.theme--light.v-btn.v-btn--has-bg.buy-button--in-stock {
  background-color: var(--btn-alt-bg-color);

  .v-btn__content {
    .v-icon--left {
      margin-right: 4px;
    }
  }
}
</style>