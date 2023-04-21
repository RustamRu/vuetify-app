<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-card outlined tile :class="{ 'v-card--soldout': soldOut }" v-on="on">
        <v-img height="160" :src="require(`@/assets/img/${img}`)"></v-img>
        <div class="content">
          <v-card-title>{{ title }}</v-card-title>

          <v-card-text v-if="soldOut">
            Продана на аукционе
          </v-card-text>
          <v-card-actions v-else>
            <v-card-text>{{ oldPrice }}</v-card-text>
            <v-card-text>{{ price }}</v-card-text>
            <BuyButton :productId="id" :inCart="inCart"/>
          </v-card-actions>
        </div>
      </v-card>
    </template>

    <v-card class="grey lighten-2">
      <v-card-title class="text-h2">{{ title }}</v-card-title>

      <v-badge overlap tile :content="price" color="red" left bottom offset-x="100" offset-y="80">
        <v-carousel>
          <v-carousel-item v-for="(preview, i) in previews" :key="i" :src="require(`@/assets/img/${preview}`)" reverse-transition="fade-transition"
            transition="fade-transition"></v-carousel-item>
        </v-carousel>
      </v-badge>

      <v-card-text>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <DefaultButton @click="dialog = false">
          Закрыть
        </DefaultButton>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import BuyButton from './BuyButton.vue';
import DefaultButton from './DefaultButton.vue';

export default {
  data() {
    return {
      dialog: false,
    }
  },
  props: {
    id: String,
    title: String,
    oldPrice: String,
    price: String,
    soldOut: Boolean,
    img: String,
    previews: Array,
    inCart: Boolean
  },
  components: { BuyButton, DefaultButton }
}
</script>

<style lang="scss">
.theme--light {
  &.v-card {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    height: 100%;

    &--soldout {
      opacity: 0.5;
    }

    .v-image {
      flex-grow: 0;
    }

    .content {
      flex-grow: 1;
    }
  }
}
</style>