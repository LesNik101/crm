import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const userModule = {
  namespaced: true,
  state: () => ({
    user: null,
  }),
  getters: {},
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async registerWithEmailAndPassword({ commit }, { email, password }) {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      commit("setUser", userCredential.user);
    },
    async loginWithEmaiAndPassword({ commit }, { email, password }) {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      commit("setUser", userCredential.user);
    },
  },
};
