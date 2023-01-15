<template>
  <form class="card auth-card" @submit.prevent="registerHandler">
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
      <div class="input-field">
        <input
          id="name"
          v-model.trim="form.name"
          type="text"
          :class="{ invalid: v$.form.name.$errors.length }"
        />
        <label for="name">Имя</label>
        <small
          v-for="error in v$.form.name.$errors"
          :key="error.$uid"
          class="helper-text invalid"
          >{{ error.$message }}
        </small>
      </div>
      <p>
        <label>
          <input type="checkbox" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import { mapActions } from "vuex";
export default {
  name: "registerView",
  data: () => ({
    v$: useVuelidate(),
    form: {
      email: "",
      password: "",
      name: "",
    },
  }),
  methods: {
    ...mapActions("userModule", ["registerWithEmailAndPassword"]),
    async registerHandler() {
      this.v$.$validate();
      if (!this.v$.$error) {
        try {
          await this.registerWithEmailAndPassword(this.form);
          this.$router.push("/");
        } catch (error) {
          this.$Message(error.message);
        }
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
        name: { required },
      },
    };
  },
};
</script>

<style></style>
