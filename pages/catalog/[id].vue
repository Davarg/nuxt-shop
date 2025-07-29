<script setup lang="ts">
const route = useRoute()
const id = ref(route.params.id)
</script>

<template>
    <div>
        Hello {{ id }}
    </div>
</template>