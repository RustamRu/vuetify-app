<template>
  <nav class="nav">
    <router-link class="nav__item" to="/catalog">Каталог</router-link>
    <router-link class="nav__item" to="/delievery">Доставка</router-link>
    <router-link class="nav__item" to="/paymentt">Оплата</router-link>
    <router-link class="nav__item" to="/contacts">Контакты</router-link>
    <router-link class="nav__item" to="/about">О компании</router-link>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  max-width: 542px;
  display: flex;
  column-gap: 48px;
  justify-content: space-between;

  &__item {
    text-decoration: none;
    color: var(--black);
  }
}
</style>
