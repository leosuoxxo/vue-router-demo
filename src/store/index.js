import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: "en"
  },
  actions: {
    setLang({ commit }, payload) {
      commit("setLangNew", payload);
    }
  },
  mutations: {
    SET_LANG(state, payload) {
      state.lang = payload;
      this.$i18n.locale = payload;
    },
    async setLangNew({ commit }, payload) {
      if (payload in app.$i18n.messages) {
        commit("SET_LANG", payload);
      } else {
        try {
          const res = await import(`../i18n/${payload}.json`);
          app.$i18n.setLocaleMessage(payload, res.data);
          commit("SET_LANG", payload);
        } catch (e) {
          console.log(e);
        }
      }
    }
  }
});
