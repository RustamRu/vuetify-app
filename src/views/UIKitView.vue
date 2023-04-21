<template>
  <div id="ui-kit" class="page">
    <h1 class="page__title">Шрифт: Merriweather</h1>
    <section class="section headings-section">
      <ul class="page__headings-list headings-list">
        <li>
          <h1 class="text-h1">H1 - 24px bold, int. 36</h1>
        </li>
        <li>
          <h2 class="text-h2">H2 - 18px regular, int. 27</h2>
        </li>
        <li>
          <h3 class="text-h3">H3 - 16px bold, int. 24</h3>
        </li>
        <li>
          <h4 class="text-h4">H4 - 14px bold, int. 21</h4>
        </li>
        <li>
          <h5 class="text-h5">H5 - 14px regular, int. 21</h5>
        </li>
        <li>
          <h6 class="text-h6">H6 - 14px light, int. 21</h6>
        </li>
      </ul>
    </section>
    <section class="section buttons-section">
      <h2 class="section__title">Кнопки</h2>
      <ul class="buttons-section__buttons-list buttons-list">
        <li>
          <DefaultButton>Нормал</DefaultButton>
        </li>
        <li>
          <DefaultButton>Ховер</DefaultButton>
        </li>
        <li>
          <DefaultButton disabled>Disable</DefaultButton>
        </li>
        <li>
          <BuyButton />
        </li>
      </ul>
    </section>
    <section class="section search-section">
      <h2 class="section__title">Поиск</h2>
      <ul class="search-section__fields-list fields-list">
        <li>
          <h3 class="fields-list__state">Нормал</h3>
          <SearchInput class="fields-list__field" />
        </li>
        <li>
          <h3 class="fields-list__state">Актив</h3>
          <SearchInput class="fields-list__field" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import BuyButton from "../components/BuyButton.vue"
import DefaultButton from "../components/DefaultButton.vue"
import SearchInput from "../components/SearchInput.vue"

export default {
  name: "UIKit",
  components: { DefaultButton, BuyButton, SearchInput }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
}

.page {
  padding: 56px 80px;

  &__title {
    font-size: 36px;
  }

  &__headings-list {
    margin-top: 44px;
  }

  .headings-list {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  }

  .section {
    &__title {
      margin-top: 59px;
      font-size: 21px;
    }
  }

  .buttons-section {
    &__buttons-list {
      margin-top: 32px;
    }

    .buttons-list {
      display: flex;
      column-gap: 24px;
    }
  }

  .search-section {
    &__fields-list {
      margin-top: 22px;
    }

    .fields-list {
      display: flex;
      flex-direction: column;
      row-gap: 32px;

      &__state {
        font-size: 16px;
      }

      &__field {
        margin-top: 12px;
      }
    }
  }
}
</style>