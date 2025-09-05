<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});

const usersStore = useUsersStore();

function onLogout() {
  usersStore.logout();
  navigateTo("/");
}
</script>

<template>
  <div>
    <div>Profile</div>
    <button @click="onLogout">Logout</button>
  </div>
</template>
