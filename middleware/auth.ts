export default defineNuxtRouteMiddleware(() => {
  const token = useCookie<{ token: string }>("users");

  if (!token.value) {
    return navigateTo("/auth/login");
  }
});
