import { defineStore } from "pinia";

export const useUsersStore = defineStore(
  "users",
  () => {
    const token = ref<string | undefined>();
    const config = useRuntimeConfig();

    async function login(login: string, password: string): Promise<string> {
      const data = await $fetch<{
        token: string;
      }>(config.public.apiBase + "/auth/login", {
        method: "POST",
        body: {
          email: login,
          password: password,
        },
      });
      token.value = data.token;

      return data.token;
    }

    function logout() {
      token.value = undefined;
    }

    return { token, login, logout };
  },
  {
    persist: true,
  }
);
