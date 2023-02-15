import { createStore } from 'vuex';

const state = {
  text: ':',
};

const mutations = {
  updateText(state, value) {
    state.text = value;
    console.log(state.text);
  },
};

const store = createStore({
  state,
  strict: true,
  mutations,
});

export default store;
