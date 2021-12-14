import Vue from "vue";
import Vuex from "vuex";
import httpClient from "../api/http_client";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    setTasks (state, tasks) {
      state.tasks = tasks;
    }
  },
  actions: {
    async fetchTasks ({ commit }) {
      let data = await httpClient.get("/api/task");
      commit("setTasks", data);
    }
  }
});
