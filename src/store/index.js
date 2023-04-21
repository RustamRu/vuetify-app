import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      {
        id: '1',
        img: 'venus-birth.jpg',
        previews: [
          'venus-birth.jpg',
          'venus-birth11.jpg',
          'venus-birth12.jpg',
          'venus-birth21.jpg',
          'venus-birth22.jpg',
        ],
        title: '«Рождение Венеры» Сандро Боттичелли',
        price: '1 000 000 $',
        oldPrice: '2 000 000 $'
      },
      {
        id: '2',
        img: 'last-supper.jpg',
        previews: [
          'last-supper.jpg',
          'last-supper11.jpg',
          'last-supper12.jpg',
          'last-supper21.jpg',
          'last-supper22.jpg',
        ],
        title: '«Тайная вечеря»  Леонардо да Винчи',
        price: '3 000 000 $'
      },
      {
        id: '3',
        img: 'creation-of-adam.jpg',
        previews: [
          'creation-of-adam.jpg',
          'creation-of-adam11.jpg',
          'creation-of-adam12.jpg',
          'creation-of-adam21.jpg',
          'creation-of-adam22.jpg',
        ],
        title: '«Сотворение Адама» Микеланджело',
        price: '5 000 000 $',
        oldPrice: '6 000 000 $'
      },
      {
        id: '4',
        img: 'anatomy-lesson.jpg',
        previews: [
          'anatomy-lesson.jpg',
          'anatomy-lesson11.jpg',
          'anatomy-lesson12.jpg',
          'anatomy-lesson21.jpg',
          'anatomy-lesson22.jpg',
        ],
        title: '«Урок анатомии» Рембрандт',
        price: '1 000 000 $',
        oldPrice: '2 000 000 $',
        soldOut: true
      },
    ],
    searchQuery: '',
    filteredProducts: [],
    cart: []
  },
  getters: {
    PRODUCTS: state => {
      return state.products;
    },
    FILTERED_PRODUCTS: state => {
      return state.filteredProducts;
    },
    SEARCH_QUERY: state => {
      return state.searchQuery;
    },
    CART: state => {
      return state.cart;
    }
  },
  mutations: {
    SET_SEARCH_QUERY: (state, payload) => {
      state.searchQuery = payload;
      if (payload.length > 0) {
        state.filteredProducts = state.products.filter(
          ({ title }) => title.toLowerCase().includes(payload.toLowerCase())
        );
      } else {
        state.filteredProducts = state.products;
      }
    },
    INIT_CART: (state) => {
      if (localStorage.getItem('cart')) {
        state.cart = [...JSON.parse(localStorage.getItem('cart'))]
      }
    },
    ADD_PRODUCT_TO_CART: (state, payload) => {
      state.cart = [...state.cart, payload];
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    REMOVE_PRODUCT_FROM_CART: (state, payload) => {
      state.cart = state.cart.filter((id) => id !== payload);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  }
});