<script setup lang="ts">
import { ButtonStyle } from "~/components/common/ButtonStyle";

const login = ref<string>();
const password = ref<string>();
const usersStore = useUsersStore();

async function onLogin() {
  if (login.value && password.value) {
    await usersStore.login(login.value, password.value);
    await navigateTo("/");
  }
}
</script>

<template>
  <div :class="$style.main">
    <form :class="$style.container">
      <div :class="$style.title">Мой аккаунт</div>
      <CommonInput
        v-model="login"
        :class="$style.input"
        :with-accessory="false"
        placeholder="Email"
      />
      <CommonInput
        v-model="password"
        :class="$style.input"
        :with-accessory="false"
        placeholder="Пароль"
        type="password"
      />
      <CommonButton
        :style="ButtonStyle.Dark"
        title="Вход"
        :class="$style.button"
        @click.stop.prevent="onLogin"
      />
    </form>
  </div>
</template>

<style module>
.main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 46px;
  width: 500px;
}

.title {
  font-weight: 500;
  font-size: 2.0625rem;
}

.input {
  width: 100%;
}

.button {
  width: 100%;
  height: 3.3125rem;
}
</style>
