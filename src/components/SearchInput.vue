<template>
  <div class="combo-box">
    <v-text-field outlined hide-details flat solo placeholder="Поиск по названию картины" v-model="query"
      @input="handleInput(query)">
    </v-text-field>
    <DefaultButton class="button" :disabled="isDisabled" @click="setSearchQuery(query)">Найти</DefaultButton>
  </div>
</template>

<script>
import DefaultButton from "../components/DefaultButton.vue"
export default {
  name: "SearchInput",
  components: { DefaultButton },
  data: function () {
    return {
      query: ''
    }
  },
  computed: {
    isDisabled() {
      return this.query.length === 0;
    }
  },
  methods: {
    setSearchQuery(query) {
      this.$store.commit('SET_SEARCH_QUERY', query);
    },
    handleInput(query) {
      if (query.length === 0) {
        this.$store.commit('SET_SEARCH_QUERY', '');
      }
    }
  }
}
</script>

<style lang="scss">
.combo-box {
  width: 466px;
  display: flex;

  .theme--light.v-btn.v-btn--has-bg {
    width: 122px;
  }

  .v-input__slot {
    min-height: 48px !important;
  }

  .theme--light.v-text-field--solo>.v-input__control>.v-input__slot {
    background-color: transparent;
  }

  .theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot fieldset {
    border: 1px solid var(--input-border-color);
    border-right: none;
  }

  .theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state):not(.v-input--is-disabled)>.v-input__control>.v-input__slot:hover fieldset,
  .v-text-field--outlined.v-input--is-focused fieldset,
  .v-text-field--outlined.v-input--has-state fieldset {
    border: 1px solid var(--input-hover-border-color);
    border-right: none;
  }
}
</style>