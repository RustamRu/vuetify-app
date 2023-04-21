<template>
  <div class="main">
    <h1>Картины эпохи Возрождения</h1>
    <v-row class="main__products-list">
      <v-col v-if="productsList.length === 0">
        <v-banner>Не найдено</v-banner>
      </v-col>
      <v-col v-else v-for="product in productsList" :key="product.id" class="col-3">
        <ProductCard :title="product.title" :price="product.price" :oldPrice="product.oldPrice" :soldOut="product.soldOut"
          :img="product.img" :previews="product.previews" :id="product.id" :inCart="isInCart(product.id)" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: 'MainView',
  components: { ProductCard },
  computed: {
    productsList() {
      if (this.$store.getters.SEARCH_QUERY.length > 0) {
        return this.$store.getters.FILTERED_PRODUCTS;
      } else {
        return this.$store.getters.PRODUCTS;
      }
    }
  },
  methods: {
    isInCart(productId) {
      const cart = this.$store.getters.CART;
      return cart.includes(productId);
    }
  },
  created() {
    this.$store.commit('INIT_CART');
  }
}
</script>

<style>
.main__products-list {
  margin-top: 39px;
}
</style>