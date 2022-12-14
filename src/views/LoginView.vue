<template>
  <form class="card auth-card" @submit.prevent="loginHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          v-model.trim="form.email"
          type="text"
          :class="{ invalid: v$.form.email.$errors.length }"
        />
        <label for="email">Email</label>
        <small
          v-for="error in v$.form.email.$errors"
          :key="error.$uid"
          class="helper-text invalid"
          >{{ error.$message }}
        </small>
      </div>
      <div class="input-field">
        <input
          id="password"
          v-model.trim="form.password"
          type="password"
          :class="{ invalid: v$.form.password.$errors.length }"
        />
        <label for="password">Пароль</label>
        <small
          v-for="error in v$.form.password.$errors"
          :key="error.$uid"
          class="helper-text invalid"
          >{{ error.$message }}
        </small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
export default {
  name: "loginView",
  data: () => ({
    v$: useVuelidate(),
    form: {
      email: "",
      password: "",
    },
  }),
  methods: {
    loginHandler() {
      console.log(this.v$);
      this.v$.$validate();
      if (!this.v$.$error) {
        this.$router.push("/");
      }
    },
  },
  validations() {
    return {
      form: {
        email: {
          required: helpers.withMessage("Это поле обязательно", required),
          email,
        },
        password: { required, minLength: minLength(6) },
      },
    };
  },
};
</script>

<style lang="scss"></style>
